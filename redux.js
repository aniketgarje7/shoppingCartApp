
const redux = require('redux');
const {createStore,applyMiddleware,combineReducers} = redux;
const reduxLogger = require('redux-logger');
const {createLogger} = reduxLogger;

const initialState = {
    count:0
}
const INCREAMENT_COUNT = 'INCREAMENT_COUNT';
const DECREAMENT_COUNT = 'DECREAMENT_COUNT';

const increametCount = (value)=>({
    type:INCREAMENT_COUNT,
    payLoad:value
});

const decreamentCount = (value)=>({
    type:DECREAMENT_COUNT,
    payLoad:value
});

const reducer = (state=initialState,action)=> {
    switch(action.type){
        case INCREAMENT_COUNT:
            return {
                ...state,
                count:state.count+action.payLoad
            }
        case DECREAMENT_COUNT:
            return {
                ...state,
                count:state.count-action.payLoad
            }   
            
        default:
            return state    
    }
}
const SHOW = "SHOW";
const HIDE = "HIDE";

const showState = {
    flag:true
}

const showFlag = ()=>({
    type:SHOW
})
const hideFlag = ()=>({
    type:HIDE
})
const showReducer = (state= showState,action)=>{
    switch(action.type){
        case SHOW:
            return{
                ...showState,
                flag:true
            }
        case HIDE:
            return{
                ...showState,
                flag:false
            }
        default:
            return showState;    
    }
}
 const rootReducer = combineReducers({
    reducer,showReducer
 })
const store = createStore(rootReducer,applyMiddleware(createLogger()));
const unsubscibe = store.subscribe(()=>{})
store.dispatch(increametCount(2))
store.dispatch(increametCount(2))
store.dispatch(increametCount(4))
store.dispatch(increametCount(5))
store.dispatch(showFlag())
store.dispatch(decreamentCount(37))

unsubscibe();