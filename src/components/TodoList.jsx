import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({todos,completeHandler,deleteHandler,onUpdate}) => {
    
    const [edit,setEdit] = useState({id:null,text:"" , isCompleted:false})

    const editTodo = (newValue) =>{
        onUpdate(edit.id,newValue)
        setEdit({id:null,text:""})
    }

    const renderTodos = () =>{
        if (todos.length === 0) return <p>add some todos</p>
        return todos.map((todo) =>{
            return(
                <Todo
                    key = {todo.id}
                    todo = {todo}
                    onComplete = {() => completeHandler(todo.id)}
                    onDelete = {() => deleteHandler(todo.id)}
                    onEdit = {() => setEdit(todo)}
                />
            );
        })
    }

    return <div>{edit.id ? <TodoForm submitTodo = {editTodo} edit= {edit}/> : renderTodos()}</div>
};
export default TodoList;