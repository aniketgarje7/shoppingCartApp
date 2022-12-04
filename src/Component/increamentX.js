import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import {increamentX} from '../Redux/Count/action'

function IncreamentX() {
    const [input,setInput] = useState(0);
    const dispatch = useDispatch();
  return (
    <>
       <input onChange={(e)=>setInput(e.target.value)}></input>
       <button onClick={()=>dispatch(increamentX(Number(input)))}>increamentX{input}</button>
    </>
  )
}



export default IncreamentX