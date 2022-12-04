import React from 'react'
import {connect} from 'react-redux';
import {Increament} from '../Redux/Count/action'

function CountIncreament({increament}) {
  return (
    <div><button onClick={increament}>increament</button></div>
  )
}

const mapDispatchToProps= (dispatch)=>{
  return {
         increament:()=>dispatch(Increament())
  }
}

export default connect(null,mapDispatchToProps)(CountIncreament)

















































