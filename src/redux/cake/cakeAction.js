// importing actiion from specific file.
import { BUY_CAKE } from "./cakeTypes"

//Creating action creator for defining action safely and handling bugs easly.
// exporting action creator. Action creator return an object.
// this object must have type property.
export const buyCake = () => {
    return{
        type: BUY_CAKE
    }
}