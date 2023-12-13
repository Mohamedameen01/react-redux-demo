import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    // Here, cakeReducer is a value of key (cake).So, when you call state from Redux-
    // Store, you should specify which one is calling by key name (eg.cake, iceCream).
    // If you don't , it will crash eachother you won't get an output.
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer