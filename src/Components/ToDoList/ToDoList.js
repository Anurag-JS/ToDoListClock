import { useState } from "react"

export default function (){

    const [todo, setTodo] = useState([]);

    const addTodo = (newTodo)=>{
        setTodo([...todo, newTodo]);
    }

    const deleteTodo = (index)=>{
        const updatedTodo = todo.filter((todo,i) => i !== index);
        setTodo(updatedTodo);
    }

    return(
        <div>
            <h2>Create Todo</h2>
            <div>
                <form>
                    <label>Enter todo</label>
                    <input></input>
                </form>
                <button onClick={()=> addTodo()}>Add Todo</button>
            </div>
            <div>
                {todo.map((todo,i) => <div>
                    <span key={i}>{todo}</span>
                    <button onClick={()=> deleteTodo(i)}>Delete</button>
                    </div>)}
            </div>
        </div>
    )
}