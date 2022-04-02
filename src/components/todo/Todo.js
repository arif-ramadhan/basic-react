import TodoCreate from '../todo-create/TodoCreate'
import TodoList from '../todo-list/TodoList'
import './Todo.css'

const Todo = () => {
    const todos = [
        {id: 1, val: 'makan'},
        {id: 2, val: 'mminum'},
        {id: 3, val: 'jalan'}
    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate/>
            <TodoList data={todos} />
        </div>
    )
}

export default Todo