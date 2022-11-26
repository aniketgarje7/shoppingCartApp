import { connect } from "react-redux"
// import store from "../Redux/store"

const Count = ({count})=>{
    return <>
        <h1 style={{marginLeft:"40%"}}>hello redux</h1>
         <h1 style={{marginLeft:"43%"}}>{count}</h1>
    </>
}

const mapStateToProps = (store)=>{
    return {
        count:store.count
    }
}

export default connect(mapStateToProps)(Count);