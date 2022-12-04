
import { CHANGE,REMOVE } from "./action";

const initailState = {
    cartProduct:[]
}

const Reducer = (state=initailState,action)=>{
    switch(action.type){
        case CHANGE:
            return {
              cartProduct:[...state.cartProduct,action.payload]
            }
        case REMOVE:
            return {
                cartProduct:[...state.cartProduct.filter(c=>c.Name!==action.payload.Name)]
            }
        default:
            return state
        
    }
}
export default Reducer