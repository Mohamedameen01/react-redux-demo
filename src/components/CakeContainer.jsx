import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Num of Cakes: {props.numOfCakes} </h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

// Defining mapStateToProps function to access Redux State in our component.
// And it gets entire "Redux Store State" as an argument to retrieve appropriate state property.
// And return an object.
const mapStateToProps = state => {
  return{
    numOfCakes: state.numOfCakes 
  }
} 

// Defining mapDispatchToProps function to dispatch action.
// This function gets dispatch as a parameter and allows to access action creator-
// as props in our component.

const mapDispatchToProps = dispatch => {
  return{
    buyCake: () => dispatch(buyCake())
  }
}
// Here, connecting mapStateToProps and mapDispatchToProps with CakeContainer.
// This connect function providing to access props from these map functions to -
// CakeContainer Component.
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer) 