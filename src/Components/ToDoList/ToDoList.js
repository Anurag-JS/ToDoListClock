import { useState } from "react";
import style from "./toDoList.module.css";

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
        <div className={style.todoContainer}>
            <h2>Create Todo</h2>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addTodo();
                }}>
                    <label><strong>Enter todo</strong></label> &nbsp;
                    <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                </form>
                <button className={style.addBtn} onClick={addTodo}>Add Todo</button>
            </div>
            <div className={style.listContainer}>
                {todo.map((todo,i) => <><div>
                    <span key={i}><strong>{todo.content}</strong></span> &nbsp; &nbsp;
                    <button className={style.deleteBtn} onClick={()=> deleteTodo(i)}>Delete</button> &nbsp;
                    <button className={style.toggleBtn} onClick={() => toggleCompleted(i)}>{todo.completed ? "Completed" : "Pending"}</button>
                    </div><br></br> </>)}
            </div>
        </div>
    )
}