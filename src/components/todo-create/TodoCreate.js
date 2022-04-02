import matchers from '@testing-library/jest-dom/matchers'
import './TodoCreate.css'

const TodoCreate = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            val: 'Learn React'
        }
        console.log(newTodo)
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" name="" id="" />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate