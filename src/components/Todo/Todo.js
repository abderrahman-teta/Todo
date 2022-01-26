import './Todo.css'
import { useState} from 'react';
const Todo = ({taskList,setTaskList,todo}) =>{
    
    const [checked,setChecked] = useState(true)
    
    const handleClick = (e) => {
       
        if(checked){
            
            setChecked(!checked)
        }else {
            setChecked(!checked)
        }
        
    }
    const handleDelete = (e) =>{
        console.log(e.target.value);
        let filterdList = taskList.filter(todo =>{
            return !todo.includes(e.target.value)
        })
        setTaskList(filterdList)
        console.log(setTaskList);
    }
    
    return (
        <div className="todo-control" >
          <div className="checkbox">
            <input type="checkbox" name="todo-check" id={"id_"+ todo} onClick={handleClick}/>
          <label htmlFor={"id_"+ todo} > </label>
          </div>
          <div className='todos'>
          {checked? <h2 className="todo" >{todo}</h2>  :  <del className="todo-del" >{todo}</del>}
          <button onClick={handleDelete} className="delete" value={todo}>Dlete</button>
          </div>
          
         
        </div>
    )
}
export default Todo