// we gone create action type constants

export const INCREAMENT_COUNT = "INCREAMENT_COUNT";
export const DECREAMENT_COUNT = "DECREAMENT_COUNT"
export const INCREAMENT_COUNTX = 'INCREAMENT_COUNTX'

// action creators

export const Increament = ()=>{
      return {
       type:INCREAMENT_COUNT
      }
}
export const decreament =()=>{
      return {
            type:DECREAMENT_COUNT
      }
}
export const increamentX = (value)=>{
      return {
            type:INCREAMENT_COUNTX,
            payLoad:value
      }
}