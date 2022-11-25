
import { ADDTASK, CHANGEDONE, DELETETASK } from "./ActionsTypes"

const initialState={
    tasks : [
        { text: 'Buy tabbac', id : 0 , isDone:false},        
        {text: 'Buy more tabbac', id:1 , isDone:true},
        {text:'Quit smoking', id:2, isDone:false}
          ]
}
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADDTASK : return {...state,tasks: [...state.tasks,action.payload]}
        case DELETETASK: return {...state, tasks : state.tasks.filter(el=> el.id != action.payload)}
        case CHANGEDONE : return {...state, tasks : state.tasks.map(el=> el.id == action.payload ? {...el,isDone : !el.isDone}:el)}
        default: return state
    }
    
}
export default Reducer