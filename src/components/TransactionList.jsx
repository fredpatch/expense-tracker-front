import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  // Access the transactions array and the getTransactions function from the GlobalContext using the useContext hook
  const { transactions, getTransactions } = useContext(GlobalContext);

  // useEffect hook to fetch the transactions when the component mounts
  useEffect(() => {
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Output the transactions array to the console for debugging purposes
  console.log(transactions);

  // JSX markup for displaying the list of transactions
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {/* Map through the transactions array and render each transaction as a separate <Transaction> component */}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

// Explanation:

// The TransactionList component is a functional component that displays a list of transactions fetched from the global state.

// The component uses the useContext hook to access the transactions array and the getTransactions function from the GlobalContext.

// The useEffect hook is used to fetch the transactions from the global state when the component mounts. The getTransactions function is called inside the useEffect hook, and an empty dependency array ensures that it runs only once when the component mounts.

// The transactions array is output to the console for debugging purposes, so you can see the data fetched from the global state.

// The JSX markup renders a heading "History" and an unordered list (<ul>) with the class "list". Each transaction in the transactions array is mapped to a separate <Transaction> component. The key attribute is set to transaction.id to provide a unique identifier for each transaction, and the transaction object is passed as a prop to the <Transaction> component.

// Each <Transaction> component is responsible for rendering the information of a single transaction in the list.
