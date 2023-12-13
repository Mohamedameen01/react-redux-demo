// Importing createStore to bind the reducer in the store.
// Importing applymiddleware.
import { legacy_createStore, applyMiddleware } from "redux";
// Importing Logger.
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// Passing applyMiddleware as an argument of createStore.
// And passing logger as an argument of applyMiddleware to get information that - 
// related to redux store.
const store = legacy_createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger)));

export default store