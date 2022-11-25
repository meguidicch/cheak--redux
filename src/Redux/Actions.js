import { ADDTASK, CHANGEDONE, DELETETASK } from "./ActionsTypes"

export const addTask=(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}

export const deleteTask=(payload)=>{
    return(
        {
            type : DELETETASK,
            payload
        }
    )
}

export const changeDone=(payload)=>{
    return(
        {
            type : CHANGEDONE,
            payload
        }
    )
}