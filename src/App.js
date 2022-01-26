import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import './App.css';

function App() {
  const [task,setTask] = useState("");
  const [taskList,setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value)
  }
  
 let l = []
  const handleClick = (e) => {
    
    if(task != ""){
      setTaskList(l=>[...l,task])
   
      setTask('')
    }
   
    
  }
  
  
  return (
    <main className="App">
      <div className='container'>
      <div className="control">
        <input type="text" placeholder="Add New Task" value={task} onChange={handleChange}/>
        <button onClick={handleClick}>Save</button>
        
      </div>
      </div>
      <TodoList  taskList={taskList} setTaskList={setTaskList}/>
    </main>
  );
}

export default App;
