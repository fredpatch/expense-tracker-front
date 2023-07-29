import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  // State variables to store the transaction details (text and amount)
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Access the addTransaction function from the GlobalContext using useContext hook
  const { addTransaction } = useContext(GlobalContext);

  // Function to handle the form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Create a new transaction object with a random id, text, and amount
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount, // Convert the amount to a number using the unary plus operator
    };

    // Call the addTransaction function from the GlobalContext to add the new transaction
    addTransaction(newTransaction);
  };

  // JSX markup for the AddTransaction component
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction description..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Negative: - expense, Positive: - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

// Explanation:

// The AddTransaction component is a functional component that uses the useState hook from React to manage the state of the text and amount variables. These variables store the user input for the transaction description and amount.

// The component uses the useContext hook to access the addTransaction function from the GlobalContext. This function will be used to add the new transaction to the global state.

// The onSubmit function is triggered when the user submits the form. It prevents the default form submission behavior and creates a new transaction object with a random id, the text value from the state, and the amount value from the state.

// The addTransaction function from the GlobalContext is then called with the new transaction object as an argument, adding the transaction to the global state.

// In the JSX markup, the component displays a form with input fields for the transaction description and amount. As the user types in the input fields, the onChange event handlers update the corresponding state variables (text and amount) to keep track of the user input.

// The form has a submit button labeled "Add transaction." When the user clicks this button, the onSubmit function is called to handle the form submission.

// The component renders a simple form that allows the user to enter the details of a new transaction (transaction description and amount) and add it to the application's transaction list.
