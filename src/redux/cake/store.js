// To bind the reducer in the store.
import { legacy_createStore } from "redux";

// Exporting Reducer Function (cakeReducer).
import cakeReducer from "./cakeReducer";

const store = legacy_createStore(cakeReducer);

export default store