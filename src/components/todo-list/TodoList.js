import './TodoList.css'

const TodoList = (props) => {
    console.log(props)
    return (
        <ul>
            {
                props.data.map((todo) => {
                    return <li key={todo.id}>{todo.val}</li>
                })
            }
        </ul>
    )
}

export default TodoList