import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  // Access the transactions array from the GlobalContext using the useContext hook
  const { transactions } = useContext(GlobalContext);

  // Extract the amounts from each transaction to calculate income and expenses
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calculate the total income by summing up all positive amounts and format it to two decimal places
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Calculate the total expenses by summing up all negative amounts, converting them to positive values, and format it to two decimal places
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  // JSX markup for displaying the income and expense sections
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          {/* Display the total income with commas as a separator and "MAD" as the currency */}
          <p className="money plus">{income} MAD</p>
          {/* Display the equivalent income in XAF with commas as a separator */}
          <h2 className="money plus">{(income * 60.4).toFixed(2)} XAF</h2>
        </div>
        <div>
          <h4>Expense</h4>
          {/* Display the total expenses with commas as a separator and "MAD" as the currency */}
          <p className="money minus">{expense} MAD</p>
          {/* Display the equivalent expenses in XAF with commas as a separator */}
          <h1 className="money minus">{(expense * 60.4).toFixed(2)} XAF</h1>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;

// Explanation:

// The IncomeExpenses component is a functional component that displays the total income and expenses for the user's transactions.

// The component uses the useContext hook to access the transactions array from the GlobalContext. This array contains all the transactions available in the application's global state.

// The amounts array is created by extracting the amount property from each transaction. This array is used to calculate income and expenses.

// The income variable calculates the total income by summing up all the positive amounts in the amounts array. The toFixed(2) method is used to format the income to two decimal places.

// The expense variable calculates the total expenses by summing up all the negative amounts, converting them to positive values (since expenses are represented as negative values in transactions), and then formatting it to two decimal places.

// The JSX markup displays the income and expenses sections in two separate <div> elements. The total income and expenses are displayed with commas as separators and "MAD" as the currency. The equivalent income and expenses in XAF (CFA Francs) are also displayed, using the exchange rate (60.4) to convert MAD to XAF, and formatted to two decimal places. The <p> and <h1> elements are styled differently based on whether they represent income or expenses, adding a class of "plus" or "minus" accordingly.
