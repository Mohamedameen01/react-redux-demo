// To bind the reducer in the store.
import { legacy_createStore } from "redux";

import rootReducer from "./rootReducer";



const store = legacy_createStore(rootReducer);

export default store