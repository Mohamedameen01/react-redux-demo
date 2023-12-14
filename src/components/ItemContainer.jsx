import React from 'react'
import {connect} from 'react-redux'

function ItemContainer(props) {
  return (
    <div>
        <h2> Item : {props.item}</h2>
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

export default connect(mapStateToProps)(ItemContainer)