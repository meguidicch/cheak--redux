

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"
import { Button, Container } from "react-bootstrap"

const AddTask=()=>{
    const dispatch = useDispatch()
    const [textP,setTextP] = useState("")
    return(
        <div className="rami">
        <div className="Container">
            <input   type="text" onChange={(e)=>setTextP(e.target.value)}/>
          
            <Button variant="dark" onClick={()=> dispatch(addTask( { text: textP, id : Math.random() , isDone:false}))}>Add</Button>

        </div>
        </div>
    )
}

export default AddTask