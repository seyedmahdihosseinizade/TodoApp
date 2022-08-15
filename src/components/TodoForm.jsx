import { useEffect, useState,useRef } from "react";


const TodoForm = ({submitTodo,edit}) => {
    
    const [input,setInput] = useState("")
    const inputRef = useRef(null)
    useEffect(() =>{
        inputRef.current.focus()
    },[])

    const changeHanlder = (e) =>{
        setInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if (!input) {
            alert('هیچی  وارد نکردی عزیزم')
            return
        }
        submitTodo(input)
        setInput("")
    }
    console.log(edit);
    return (
        <form onSubmit={submitHandler}>
            {edit  ?  (
                <>
                    <input value={input} type="text" onChange={changeHanlder} placeholder="update todo..." ref={inputRef}/>
                    <button type="submit" >Update</button>
                </>
            ):(
                <>
                    <input value={input} type="text" onChange={changeHanlder} placeholder="add todo..." ref={inputRef}/>
                    <button type="submit" >Add</button>
                </>
            )}
        </form>
    );
}

export default TodoForm;