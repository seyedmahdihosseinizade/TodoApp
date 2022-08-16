

const Todo = ({todo,onComplete,onDelete,onEdit}) => {
    
    
    
    return (
        <div className="todo" key={todo.id}>
            <div  onClick={onComplete} className={`todoText ${todo.isCompleted ? "completed" : ""}`} >{todo.text}</div>
            <div>
                <button className="edit" onClick={onEdit}>Edit</button>
                <button className="remove" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;