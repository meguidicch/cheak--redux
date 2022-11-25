
import './App.css';
import AddTasks from './Components/AddTasks'
import TasksList from './Components/TasksList';

function App() {
  return (
    <div>
      
      <div className='asma'>
      <img src='./todo.png'/>
      </div>
      <TasksList/>
     <AddTasks/>
    </div>
  );
}

export default App;
