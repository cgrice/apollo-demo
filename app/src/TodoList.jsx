import React from 'react'
import Todo from './Todo'

const TodoList = ({
    todos,
    onClick,
}) => (
    todos.length > 0 && (
        <div className="todolist">
            {todos.map(todo => (
                <Todo 
                    {...todo}
                    onClick={onClick}
                />
            ))}
        </div>
    )
    
)

export default TodoList