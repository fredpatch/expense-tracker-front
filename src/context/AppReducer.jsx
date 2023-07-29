// The reducer function takes two parameters: state and action. It is responsible for updating the state based on the action type and payload received from the dispatched actions in the application.

export default (state, action) => {
  switch (action.type) {
    // When the action type is "GET_TRANSACTIONS", the reducer updates the state with the fetched transactions received in the action payload. It also sets the loading state to false, indicating that the transactions have been fetched successfully.
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };

    // When the action type is "DELETE_TRANSACTION", the reducer filters out the transaction with the specified ID (received in the action payload) from the transactions array in the state. It returns a new state with the updated transactions list, effectively removing the deleted transaction from the global state.
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };

    // When the action type is "ADD_TRANSACTION", the reducer adds the new transaction (received in the action payload) to the transactions array in the state. It returns a new state with the updated transactions list, including the newly added transaction.
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    // When the action type is "TRANSACTION_ERROR", the reducer updates the state with the error message received in the action payload. This can be used to handle any errors that occur during API calls or other operations related to transactions.
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    // If the action type does not match any of the defined cases, the reducer returns the current state without making any changes.
    default:
      return state;
  }
};

// In summary, the reducer is responsible for handling various actions that can be dispatched in the application, such as fetching transactions, deleting transactions, adding new transactions, and handling any errors that might occur. It updates the global state accordingly, allowing components to access and display the latest data based on the actions performed in the application.
