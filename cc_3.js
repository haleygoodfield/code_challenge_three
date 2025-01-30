// Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system.
// Declare an array prices using let and initialize it with at least five numerical values.
let prices = [25, 50, 75, 100, 125];

// Add a new price to the array.
prices.push(15); // Add 15

// Remove the first price from the array.
prices.slice(1); // Remove 15

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




