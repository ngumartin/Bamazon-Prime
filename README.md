# Bamazon-Prime
https://martinn80.github.io/Bamazon-Prime/

## Overview 

Bamazon is an Amamzon like store which utilizes MySQL and Node.js. The app will take in orders from customers and deplete items from the store's inventory.

## Bamazon Customer View

* Running "bamazonCustomer.js" will display the items available for sale. This will include the ID number of item, product name, department name, and stock quantity.

* The app will then prompt the user with two questions.

  1. The first question will ask for the ID of the item you would like to purchase.
  2. The second question will ask how many units of the product you would like to purchase.
  
* Once the customer has placed the order, the app will check if there are enough items in stock to fill the order the customer has requested.

  1. If not, the app will prompt "Sorry, insufficient quanity in our inventory at this time, please choose a smaller amount.", and prevent the order from going through.
  
* The app will require npm inquirer and npm mysql packages.
