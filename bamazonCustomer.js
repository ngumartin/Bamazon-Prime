let inquirer = require('inquirer');
let mysql = require('mysql');
let Table = require('cli-table');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Charlotte1904",
    database: "bamazon_db"
})

//MAIN CHECK AND BUY FUNCTION WHICH DISPLAYS ALL ITEMS FROM MY SQL AND THEN ADDS FUNCTIONALITY TO BUY AN ITEM WITH QUANTITIY CHOICES. 
let checkAndBuy = function () {
    connection.query('SELECT * FROM products', function (err, res) {
        //CREATES A NEW TABLE  
        let table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Stock Quantity']
        });

        //DISPLAYS ALL ITEMS FOR SALE 
        console.log("================================================================\n");
        console.log("PLEASE TAKE A LOOK AT OUR ITEMS, CHRISTMAS SALE GOING ON NOW !!!");
        console.log("================================================================");
        for (let i = 0; i < res.length; i++) {
            table.push([res[i].id, res[i].ProductName, res[i].DepartmentName, res[i].Price, res[i].StockQuantity]);
        }
        //LOGS THE TABLE WITH ITEMS IN FOR PURCHASE. 
        console.log(table.toString());
        inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "What is the item ID you would like to buy?",
            validate: function (value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
            validate: function (value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function (answer) {
            let chosenId = answer.itemId - 1
            let chosenProduct = res[chosenId]
            let chosenQuantity = answer.Quantity
            if (chosenQuantity <= res[chosenId].StockQuantity) {
                console.log("Your total for " + "(" + answer.Quantity + ")" + " - " + res[chosenId].ProductName + " is: " + res[chosenId].Price * chosenQuantity);
                // console.log(answer.Quantity);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    StockQuantity: res[chosenId].StockQuantity - chosenQuantity
                }, { id: res[chosenId].id }], function (err, res) {
                    if (err) throw err;
                    // console.log();




                })
            } else {
                // console.log(chosenProduct.StockQuantity);
                // console.log(chosenQuantity);
                if (chosenQuantity > chosenProduct.StockQuantity) {
                    // console.log(answer.Quantity);

                    console.log("==========================================================================================");
                    console.log("Sorry, insufficient quanity in our inventory at this time, please choose a smaller amount.");
                    console.log("========================================================================================\n");

                };
            }
            inquirer
                .prompt({
                    name: 'next',
                    type: "input",
                    message: 'Would you like to place another order (yes/no)?\n',
                })
                .then(function (answer) {
                    if (answer.next === "yes") {
                        checkAndBuy();
                    } else {
                        connection.end()
                        console.log("===============================================");
                        console.log("Thank you for shopping with us! Come back soon!")
                        console.log("===============================================\n");

                    }

                });

        });
    })

};

checkAndBuy();