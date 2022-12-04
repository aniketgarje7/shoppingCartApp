
// import store from "../Redux/store"
import { useSelector } from "react-redux"
import CountIncreament from './countIncreament'
import Decreament from './decreament'
import IncreamentX from './increamentX'

const Count = ()=>{
    const count = useSelector((state)=>state.countReducer.count)
    return <>
        <h1 style={{marginLeft:"40%"}}>hello redux</h1>
         <h1 style={{marginLeft:"43%"}}>{count}</h1>
         <CountIncreament/>
         <Decreament/>
         <IncreamentX/>
    </>
}



export default Count;