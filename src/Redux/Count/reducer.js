
// create a state or central state

import  { INCREAMENT_COUNT } from './action'
import { DECREAMENT_COUNT,INCREAMENT_COUNTX } from './action'

const countState = {
    count:5
}

const countReducer = (state=countState,action)=>{
     switch(action.type){
        case INCREAMENT_COUNT:
            return {
                count:state.count+1
            }
        case DECREAMENT_COUNT:
            return {
                count:state.count-1
            }
        case INCREAMENT_COUNTX:
            return {
                ...state,
                count:state.count+action.payLoad
            }
        default:
             {
            return state
        }    
     }
}
export default countReducer;