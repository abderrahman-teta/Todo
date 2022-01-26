import './Todo.css'
import { useState} from 'react';
const Todo = (props) =>{
    console.log(props);
    const [checked,setChecked] = useState(true)
    
    const handleClick = (e) => {
       
        if(checked){
            
            setChecked(!checked)
        }else {
            setChecked(!checked)
        }
        
    }
    return (
        <div className="todo-control" >
          <div className="checkbox">
            <input type="checkbox" name="todo-check" id={"id_"+props.todo} onClick={handleClick}/>
          <label htmlFor={"id_"+props.todo} > </label>
          </div>
          {checked? <h2 className="todo" >{props.todo}</h2>  :  <del className="todo-del" >{props.todo}</del>}
         
        </div>
    )
}
export default Todo