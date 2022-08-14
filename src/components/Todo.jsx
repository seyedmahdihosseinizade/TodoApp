

const Todo = ({todo,onComplete,onDelete}) => {
    
    
    
    return (
        <div className="todo" key={todo.id}>
            <div  onClick={onComplete} className={todo.isCompleted ? "completed" : ""} >{todo.text}</div>
            <div>
                <button>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;