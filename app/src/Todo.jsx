import React from 'react'
import classnames from 'classnames'

const Todo = ({
    id,
    text,
    done,
    onClick,
}) => {
    const handleClick = () => onClick(id)

    return (
        <div className={classnames(
            'todo',
            {
                'todo-done': done,
            }
        )}>
            <span className="todo__actions">
                <button onClick={handleClick}>✔</button>
            </span>
            <span className="todo__text">{text}</span>
        </div>
    )
}

export default Todo