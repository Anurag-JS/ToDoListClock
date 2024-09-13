import { useState } from "react"

export default function (){

    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = ()=>{
        if(newTodo.trim()!==""){
            setTodo([...todo, {content:newTodo, completed:false}]);
            setNewTodo("")
        }
    };

    const deleteTodo = (index)=>{
        const updatedTodo = todo.filter((todo,i) => i !== index);
        setTodo(updatedTodo);
    };

    const toggleCompleted = (index)=>{
        const updatedTodo = todo.map((todoItem, i) => 
            i===index ? {...todoItem, completed: !todoItem.completed} : todoItem
        );
        setTodo(updatedTodo);
    };

    return(
        <div>
            <h2>Create Todo</h2>
            <div>
                <form>
                    <label>Enter todo</label>
                    <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                </form>
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div>
                {todo.map((todo,i) => <div>
                    <span key={i}>{todo.content}</span>
                    <button onClick={()=> deleteTodo(i)}>Delete</button>
                    <button onClick={() => toggleCompleted(i)}>{todo.completed ? "Completed" : "Pending"}</button>
                    </div>)}
            </div>
        </div>
    )
}