import { useState } from "react";


const TodoForm = ({addTodoHandler}) => {
    
    const [input,setInput] = useState("")

    const changeHanlder = (e) =>{
        setInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if (!input) {
            alert('هیچی  وارد نکردی عزیزم')
            return
        }
        addTodoHandler(input)
        setInput("")
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input value={input} type="text" onChange={changeHanlder}></input>
            <button type="submit" >Add</button>
        </form>
    );
}

export default TodoForm;