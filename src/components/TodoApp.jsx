import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    
    const [todos,setTodos] = useState([])
    const [filteredTodos,setFilteredTodos] = useState([])
    const [selectedOption,setSelectedOption] = useState("All")

    useEffect(() =>{
        filterTodos(selectedOption.value)
    },[todos,selectedOption])


    const addTodo = (input) =>{
        const newTodo = {id:Math.floor(Math.random() * 1000),text:input,isCompleted:false}
        setTodos([...todos,newTodo])
    }

    const completeTodo = (id) =>{
        const index = todos.findIndex((todo) => todo.id === id);
        const selectedTodo = {...todos[index]};

        selectedTodo.isCompleted = !selectedTodo.isCompleted;

        const updatedTodos = [...todos]
        updatedTodos[index] = selectedTodo
        setTodos(updatedTodos)
    }

    const deleteHandler = (id) =>{
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos)
    }

    const updateTodo = (id,newValue) =>{
        const index = todos.findIndex((todo) => todo.id === id)
        const selectedTodo = {...todos[index]};
        selectedTodo.text = newValue;

        const updatedTodos = [...todos]
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos)
    }

    const filterTodos = (status) =>{
        switch (status) {
            case "Completed":
                setFilteredTodos(todos.filter((t) => t.isCompleted))
                break;
            case "Uncompleted" :
                setFilteredTodos(todos.filter((t) => !t.isCompleted))
                break;
            default:
                setFilteredTodos(todos)
        }
        
    }
    const selectHandler = (e) =>{
        setSelectedOption(e)
        filteredTodos(e.value)
    }

    return (
        <div className="container">
            
            <NavBar 
                unCompletedTodos = {todos.filter((todo) => !todo.isCompleted).length} 
                selectedOption = {selectedOption}
                onChange={selectHandler}
            />
            <TodoForm
                submitTodo = {addTodo}
            />
            <TodoList
                todos = {filteredTodos}
                completeHandler = {completeTodo}
                deleteHandler = {deleteHandler}
                onUpdate = {updateTodo}
            />
        </div>
    );
}

export default TodoApp;