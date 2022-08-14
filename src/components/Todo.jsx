

const Todo = ({todo,onComplete}) => {
    
    
    
    return (
        <div className="todo" key={todo.id}>
            <div  onClick={onComplete} className={todo.isCompleted && "completed"} >{todo.text}</div>
            <div>
                <button>Edit</button>
                <button >Delete</button>
            </div>
        </div>
    );
}

export default Todo;