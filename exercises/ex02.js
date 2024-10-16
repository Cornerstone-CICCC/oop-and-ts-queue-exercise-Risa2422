// Create a function called groceryCheckout which processes a queue of customers
// Each customer has a cart (array of items with a name and price).
// Remove customers whose total cost is less than or equal to $50 from the queue.
// Make sure to implement FIFO (First-In, First-Out)

const Queue = require("../lib/Queue");

function groceryCheckout(queue) {
  // your code here
  const temp = new Queue();
  let totalNum;

  while (!queue.isEmpty()) {
    let filteredCustomer = queue.dequeue();
    totalNum = filteredCustomer.cart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);

    if (totalNum > 50) {
      temp.enqueue(filteredCustomer);
    }
  }

  while (!temp.isEmpty()) {
    queue.enqueue(temp.dequeue());
  }

  return queue;
}

const customers = new Queue();
customers.enqueue({
  name: "Alice",
  cart: [
    { item: "Milk", price: 10 },
    { item: "Bread", price: 5 },
  ],
});
customers.enqueue({
  name: "Bob",
  cart: [
    { item: "Laptop", price: 500 },
    { item: "Mouse", price: 20 },
  ],
});
customers.enqueue({
  name: "Charlie",
  cart: [
    { item: "Candy", price: 2 },
    { item: "Juice", price: 3 },
  ],
});

groceryCheckout(customers);
console.log(customers.printQueue());
// Expected output:
// { name: "Bob", cart: [{ item: "Laptop", price: 500 }, { item: "Mouse", price: 20 }] ] }
