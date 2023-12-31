import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
        <h2> Item : {props.item}</h2>
        <button onClick={props.itemFunction}>Buy Item</button>
    </div>
  )
}

// Here, this function takes 2 parameters.
// 1- Parameter is Redux State 
// 2- Parameter is the props of component itself.
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
        ? state.cake.numOfCakes 
        : state.iceCream.numOfIceCreams
    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    return{
        itemFunction: dispatchFunction
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ItemContainer)