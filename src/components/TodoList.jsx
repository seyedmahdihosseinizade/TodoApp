import Todo from "./Todo";

const TodoList = ({todos,completeHandler,deleteHandler}) => {
    

    const renderTodos = () =>{
        if (todos.length === 0) return <p>add some todos</p>
        return todos.map((todo) =>{
            return(
                <Todo
                    key = {todo.id}
                    todo = {todo}
                    onComplete = {() => completeHandler(todo.id)}
                    onDelete = {() => deleteHandler(todo.id)}
                />
            );
        })
    }

    return <div>{renderTodos()}</div>
};
export default TodoList;