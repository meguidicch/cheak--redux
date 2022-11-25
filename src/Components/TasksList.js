
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeDone, deleteTask } from "../Redux/Actions"
import { Button } from "react-bootstrap"
const TasksList=()=>{
    const tasks = useSelector(state=>state.tasks)
    const dispatch = useDispatch()
    const [test,setTest] = useState('ALL')
    return(
        <div>
            <div className="Buttonn">
             <Button variant="secondary" onClick={()=>setTest('ALL')}>All</Button>
            <Button variant="secondary" onClick={()=>setTest('DONE')}>Done</Button>
            <Button variant="secondary" onClick={()=>setTest('UNDONE')}>Undone</Button></div>
            {   test == 'ALL' ?
                tasks.map(task=> 
                <div>
                    
                    <h2 className="titre1">{task.text}</h2>
                    
                    <h3 className="titre2">{task.isDone ? "TRUE" : "FALSE"}</h3>
                   <br/>
                   <div className="But">
                    <Button variant="danger" onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>
                    <Button variant="danger" onClick={()=> dispatch(changeDone(task.id))}>Done</Button>
                    </div>
                    <br/>
                </div>)
                : test == "DONE" ? 
                tasks.filter(el=> el.isDone == true).map(task=> 
                    <div>
                        <h2 className="titre1">{task.text}</h2>
                        <h3 className="titre2">{task.isDone ? "TRUE" : "FALSE"}</h3>
                        <div className="But">
                        <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                        <button onClick={()=> dispatch(changeDone(task.id))}>Done</button>
                         </div>
                    </div>)
                :
                tasks.filter(el=> el.isDone == false).map(task=> 
                    <div>
                        <h2 className="titre1">{task.text}</h2>
                        <h3 className="titre2">{task.isDone ? "TRUE" : "FALSE"}</h3>
                        <div className="But">
                        <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                        <button onClick={()=> dispatch(changeDone(task.id))}>Done</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TasksList