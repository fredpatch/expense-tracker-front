import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  // Access the deleteTransaction function from the GlobalContext using the useContext hook
  const { deleteTransaction } = useContext(GlobalContext);

  // Determine the sign of the transaction amount (positive or negative)
  const sign = transaction.amount < 0 ? "-" : "+";

  // JSX markup for displaying a single transaction
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {/* Display the transaction text */}
      {transaction.text}
      <span>
        {/* Display the transaction amount with commas as a separator, the sign (positive/negative), and "MAD" as the currency */}
        {sign} {Math.abs(transaction.amount)} MAD
      </span>
      {/* Button to delete the transaction, which calls the deleteTransaction function with the transaction's ID as an argument */}
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;

// Explanation:

// The Transaction component is a functional component that represents a single transaction item in the list of transactions.

// The component receives the transaction object as a prop, which contains information about the specific transaction to be displayed, such as its text and amount.

// The component uses the useContext hook to access the deleteTransaction function from the GlobalContext. This function is used to delete a transaction from the global state when the delete button is clicked.

// The sign variable is calculated to determine whether the transaction amount is positive (represented by "+") or negative (represented by "-").

// The JSX markup displays the transaction information within an <li> element. The transaction text is displayed as is, and the transaction amount is displayed with commas as separators, along with the determined sign and "MAD" as the currency.

// The component also includes a delete button (represented by the "x" symbol) that calls the deleteTransaction function when clicked, passing the transaction's _id as an argument. This allows the transaction to be removed from the list of transactions when the user deletes it.
