import React from 'react'

// importing useSelector & useDispatch from react-redux
import {useSelector, useDispatch} from 'react-redux'

import { buyCake } from '../redux'

function HookCakeContainer() {
  // useSelector takes a function as argument.
  const numOfHookCakes = useSelector( state => state.cake.numOfCakes)

  //useDispatch function return a dispatch function
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Num of Hook Cakes: {numOfHookCakes} </h2>
      <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
     </div>
   )
 }

export default HookCakeContainer