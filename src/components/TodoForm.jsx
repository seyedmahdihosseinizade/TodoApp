import { useEffect, useState,useRef } from "react";


const TodoForm = ({submitTodo,edit}) => {
    
    const [input,setInput] = useState(edit ? edit.text : "")
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
            <div className="formControl">
                <input 
                    value={input}
                    type="text" 
                    onChange={changeHanlder} 
                    placeholder={edit ? "Update value" : "Add todo"}
                    ref={inputRef}
                />
                <button className={`${edit ? "updateTodo" : "Add"}`} type="submit" >{edit ? "Update" : "Add"}</button>
            </div>
            
        </form>
    );
}

export default TodoForm;