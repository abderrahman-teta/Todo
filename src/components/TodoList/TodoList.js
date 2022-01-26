import './TodoList.css'
import Todo from '../Todo/Todo'
const TodoList = (props) =>{
    
    return (
        <div className="todo-list">
            {props.todos.map((todo,id) =>{
                return <Todo key={id} todo={todo} />
            })}
        
        </div>
    )
}
export default TodoList