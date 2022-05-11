import React, {useState} from "react";
import uuid from "uuid";
function TodoForm()
{const [todo, setTodo] = useState({
    id: "",
    task: "",
    Completed: false

});

function handleTaskInput(e)
{
setTodo ({...todo, task: e.target.value});
}

function handleSubmit(e)
{
e.preventDefault();
if(todo.task.trim())
{
    addTodo({...todo, id: uuid.v4() });
    setTodo({...todo, task: ""})
}
}
    return (
        <form onSubmit={handleSubmit}>
            <input 
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInput }
            />
            <button />
        </form>
    );

}
export default TodoForm;