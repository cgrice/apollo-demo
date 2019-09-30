import React from 'react'

import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const todoData = [
    { id: 1, text: "Build a UI", done: true },
    { id: 2, text: "Add some sweet styles ✨", done: true },
    { id: 3, text: "Hook up Apollo Client", done: false },
    { id: 4, text: "Pull to-do items from the API", done: false },
    { id: 5, text: "Mutate some data", done: false },
    { id: 6, text: "Update our cache", done: false },
    { id: 7, text: "Be optimistic!", done: false },
]

const Todos = () => {
    const completeTodo = (id) => {
        alert(`Completing todo ${id}`)
    }

    const resetTodo = (id) => {
        alert(`Resetting todo ${id}`)
    }
    
    const finishedTodos = todoData.filter((todo) => todo.done === true)
    const todos = todoData.filter((todo) => todo.done === false)

    return (
        <div className="todos">
            <h2>To Do</h2>
            <div>
                <AddTodoForm />
                <TodoList todos={todos} onClick={completeTodo} />
                {finishedTodos.length > 0 && (
                    <div>
                        <h2>Done</h2>
                        <TodoList todos={finishedTodos} onClick={resetTodo} />
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Todos