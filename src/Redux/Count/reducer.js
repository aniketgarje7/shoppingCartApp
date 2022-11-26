
// create a state or central state

import  { INCREAMENT_COUNT } from './action'

const countState = {
    count:5
}

const countReducer = (state=countState,action)=>{
     switch(action.type){
        case INCREAMENT_COUNT:
            return {
                count:state.count+1
            }
        default:
             {
            return state
        }    
     }
}
export default countReducer;