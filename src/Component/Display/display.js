import React from 'react'
import { connect } from 'react-redux'
// import store from '../../Redux/store'
import imag1 from '../../bulbon.avif'
import imag2 from '../../bulboff.avif'
import { show,hide } from '../../Redux/display/action'
import { useDispatch,useSelector } from 'react-redux'

const Display = ()=> {
    const display = useSelector((state)=>state.displayReducer.display)
    const dispatch = useDispatch()
 return <>
        {display? <img  src={imag1} alt='bulbon'></img>:<img  src={imag2} alt='bulboff'/>}

        <button onClick={()=>display?dispatch(hide()):dispatch(show())}> show/hide</button>
   </>
}



export default Display