export const CHANGE = 'CHANGE';
export const REMOVE = 'REMOVE'
export const setChange = (value)=>{
    return {
        type:CHANGE,
        payload:value
    }
}

export const remove = (value)=>{
    return {
        type:REMOVE,
        payload:value
    }
}