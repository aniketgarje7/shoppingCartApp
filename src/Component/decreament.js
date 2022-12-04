import React from 'react'
import {decreament} from '../Redux/Count/action'
import {useDispatch} from 'react-redux'


function Decreament() {
  const dispatch = useDispatch();
  return (
    <div><button onClick={()=>dispatch(decreament())}>decreament</button></div>
  )
}

export default Decreament