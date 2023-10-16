// You are given a list of transactions, each represented as an object 
// with the following properties: id, sender, receiver, and amount. 
// Write a JavaScript function to find all pairs of transactions that 
// cancel each other out. A transaction cancels another if they have 
// the same sender and receiver and the sum of their amount is equal 
// to zero. Return an array of pairs of transaction objects that cancel each other.

const transactions = [
    { id: 1, sender: 'A', receiver: 'B', amount: 100 },
    { id: 2, sender: 'B', receiver: 'A', amount: -100 },
    { id: 3, sender: 'C', receiver: 'D', amount: 50 },
    { id: 4, sender: 'D', receiver: 'C', amount: -50 },
    { id: 5, sender: 'X', receiver: 'Y', amount: 200 },
  ];
  
  const canceledTransactions = findCanceledTransactions(transactions);
  console.log(canceledTransactions);
// Should output: [{id: 1, sender: 'A', receiver: 'B', amount: 100}, {id: 2, sender: 'B', receiver: 'A', amount: -100}]


// 1. Create an empty Map to store transactions using a unique key composed of sender and receiver.
// 2. Create an empty array to store canceled transactions.
// 3. For each transaction in the input list of transactions:
//    1. Calculate a unique key by concatenating sender and receiver (e.g., key = sender + receiver).
//    2. If the Map already has a transaction with the same key:
//       1. Get the opposite transaction.
//       2. Check if the sum of their amounts is equal to 0.
//       3. If the amounts cancel each other out (amount1 + amount2 === 0):
//          1. Add both the current transaction and the opposite transaction to the canceled transactions array.
//          2. Delete the key from the Map to avoid duplication.
//       4. If the amounts don't cancel each other out, update the key in the Map to the current transaction.
//    3. If the Map doesn't have a transaction with the same key, add the current transaction to the Map.
// 4. Return the array of canceled transactions.

const cancelledTransactions = () => {


}