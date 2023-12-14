// This file for Reducer Function which changes the state in the store

// Importing action.
import { BUY_CAKE } from "./cakeTypes"

// Initializing State.
const initialState = {
    numOfCakes: 10
}

// This is a Reducer Function. It accepts two arguments.
// One is a state. Another one is a action
const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: 
            return {
            // This spread operator is created for copying the state to be immutable.
                ...state, 
                numOfCakes: state.numOfCakes - action.payload
            }
        default: return state
    }
}

export default cakeReducer