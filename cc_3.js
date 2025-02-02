// Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system.
// Declare an array prices using let and initialize it with at least five numerical values.
let prices = [25, 50, 75, 100, 125];

// Add a new price to the array.
prices.push(15); // Add 15

// Remove the first price from the array.
prices.shift(); 

// Log the updated price list to the console.
console.log("Updated Product Price List: $", prices);



// Task 2: Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities.
// Declare an array orders with at least five numerical values representing quantities.
let orders= [4, 9, 15, 23, 30];

// Increase the third order quantity by 5.
orders[2] += 5;

// Calculate the total number of all orders.
let totalOrders = orders.reduce((total, orders) => total + orders, 0);

// Log the updated array and total order count to the console.
console.log("Updated Customer Order Quantities: ", orders);
console.log("Total Customer Order Count: ", totalOrders);


// Task 3: Employee Performance Tracking Scenario: HR System You are tracking employee performance data.
// Declare an object employee with properties: name, role, performanceScore, and isActive.
let employee= {
    name: "Ivan Hernandez",
    role: "Investor",
    performanceScore: 99,
    isActive: true
};

// Update the performanceScore property.
employee.performanceScore =100;

//Add a new property promotionEligible with a boolean value.
promotionEligible = false;

// Log the updated employee object to the console. 
console.log("Updated Employee Performance Data: ", employee);



// Task 4: Customer Feedback Records Scenario: Feedback Management You are collecting customer feedback data.
// Declare an array feedback containing at least three objects, each with properties: customerName, feedbackText, and rating.
let feedbacks = [
    {customerName: "Luffy", feedbackText: "Excellent job and great service!", rating: 89},
    {customerName: "Zoro", feedbackText: "The quality has been slipping.", rating: 63},
    {customerName: "Sanji", feedbackText: "The attention to detail is impressive!", rating: 82}
];

// Add a new feedback object to the array.
feedbacks.push({customerName: "Robin", feedbackText: "The prices are too expensive", rating: 60}),
// something is wrong with this, fix in the morning...

// Log the entire feedback list to the console. 
console.log("Customer Feedback Data: ", feedbacks);



//Task 5: Inventory Management System Scenario: Stock Analysis You are developing a system to track inventory details.
// Declare an object inventory with properties: itemName, stockCount, and price.
let inventory = {
    itemName: "iPad Mini",
    stockCount: 15,
    price: 649.99,

    // Add a method calculateTotalValue that returns the total value (stockCount * price).
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

// Log the inventory details and total value to the console. 
console.log("Inventory details: ", inventory);
console.log("Total value of inventory: $", inventory.calculateTotalValue());

