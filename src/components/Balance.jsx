import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  // Access the transactions array from the GlobalContext using the useContext hook
  const { transactions } = useContext(GlobalContext);

  // Extract the amounts from each transaction to calculate the total balance
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calculate the total balance by summing up all amounts and format it to two decimal places
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Calculate the equivalent amount in XAF (CFA Francs) by multiplying the total balance with the exchange rate (60.6) and format it to two decimal places
  const totalXafAmount = (total * 60.6).toFixed(2);

  // Output the total balance and equivalent XAF amount to the console for debugging purposes
  console.log("total: ", total, "total XAF: ", totalXafAmount);

  // JSX markup for displaying the total balance and equivalent XAF amount
  return (
    <div>
      <div className="inc-exp-container-balance">
        <div>
          <h4>Your Balance</h4>
          {/* Display the total balance with commas as a separator and "MAD" as the currency */}
          <h4 className={transactions.total < 0 ? "money minus" : "money plus"}>
            {numberWithCommas(total)} MAD
          </h4>
        </div>
        <div>
          <h4>XAF amount</h4>
          {/* Display the equivalent XAF amount with commas as a separator and "XAF" as the currency */}
          <h4
            className={
              transactions.totalXafAmount < 0 ? "money minus" : "money plus"
            }
          >
            {numberWithCommas(totalXafAmount)} XAF
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Balance;

// Explanation:

// The Balance component is a functional component that displays the user's
// current balance and the equivalent amount in XAF (CFA Francs).

// The component uses the useContext hook to access the transactions array
//  from the GlobalContext. This array contains all the transactions available in the application's global state.

// The amounts array is created by extracting the amount property from
//  each transaction. This array is used to calculate the total balance.

// The total variable calculates the total balance by summing up all the
// amounts in the amounts array. The toFixed(2) method is used to format the total to two decimal places.

// The totalXafAmount variable calculates the equivalent amount in XAF by
// multiplying the total balance with the exchange rate (60.6). Like the total, it is also formatted to two decimal places.

// The console.log statement outputs the total balance and equivalent XAF
//  amount to the console for debugging purposes.

// The JSX markup displays the total balance and equivalent XAF amount
// in two separate <div> elements. The balance is displayed with commas as
//  a separator and "MAD" as the currency. The XAF amount is displayed with
//   commas as a separator and "XAF" as the currency. The <h4> elements are
//   styled differently based on whether the values are positive or negative, adding a class of "plus" or "minus" accordingly.
