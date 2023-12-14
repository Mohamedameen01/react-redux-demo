// importing actiion from specific file.
import { BUY_CAKE } from "./cakeTypes"

//Creating action creator for defining action safely and handling bugs easly.
// exporting action creator. Action creator return an object.
// this object must have type property.
export const buyCake = (number = 1) => {
    return{
        type: BUY_CAKE,
    // Payload props is additional data needed to update the state based on the action.
    // Here, giving number of cakes to buy.
        payload: number
    }
}