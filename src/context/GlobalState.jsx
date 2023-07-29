import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; // Make sure to use the correct path to the file
import axios from "axios";

// Initial state for the global context
const initialState = {
  transactions: [], // Array to store the list of transactions
  error: null, // Error message, if any
  loading: true, // Flag to indicate if data is being loaded
};

// Create a context for the global state
export const GlobalContext = createContext(initialState);

// Provider Component to manage the global state using the useReducer hook
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions to interact with the state and perform API calls

  // Action to get all transactions from the server
  async function getTransactions() {
    try {
      const res = await axios.get(
        "https://expense-tracker-api-service.onrender.com/api/v1/transactions"
      );
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data, // Received transactions from the server
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error, // Error message in case of API call failure
      });
    }
  }

  // Action to delete a specific transaction by its ID
  async function deleteTransaction(id) {
    try {
      await axios.delete(
        `https://expense-tracker-api-service.onrender.com/api/v1/transactions/${id}`
      );
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id, // ID of the deleted transaction
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error, // Error message in case of API call failure
      });
    }
  }

  // Action to add a new transaction to the server and update the state
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://expense-tracker-api-service.onrender.com/api/v1/transactions",
        transaction,
        config
      );
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data, // Newly added transaction from the server
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error, // Error message in case of API call failure
      });
    }
  }

  // Provide the state and action functions to the components using the GlobalContext
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// In summary, the GlobalProvider component creates a context to manage the global state of the application. It uses the useReducer hook to handle state changes and defines actions like getTransactions, deleteTransaction, and addTransaction to interact with the state and perform API calls for fetching, deleting, and adding transactions. The context provider makes these actions and the state accessible to the child components wrapped within it, allowing them to read and update the global state as needed.
