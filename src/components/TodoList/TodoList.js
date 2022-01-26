import './TodoList.css'
import Todo from '../Todo/Todo'
const TodoList = ({taskList,setTaskList}) =>{
    
    return (
        <div className="todo-list">
            {taskList.map((todo,id) =>{
                return <Todo key={id} todo={todo} taskList={taskList} setTaskList={setTaskList} />
            })}
        
        </div>
    )
}
export default TodoList