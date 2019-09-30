import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const GET_TODOS = gql`
    query GetTodosQuery {
        todos {
            id
            done
            text
        }
    }
`

const UPDATE_TODO_STATUS = gql`
    mutation UpdateTodoStatus($id: ID!, $done: Boolean!) {
        changeTodoStatus(id: $id, done: $done) {
            id
            done
        }
    } 
`

const Todos = () => {
    const { loading, error, data } = useQuery(GET_TODOS)
    const [updateTodo] = useMutation(UPDATE_TODO_STATUS)

    const completeTodo = (id) => {
        return updateTodo({
            variables: { id, done: true }
        })
    }

    const resetTodo = (id) => {
        return updateTodo({
            variables: { id, done: false }
        })
    }
    
    if(loading) {
        return <div>...loading</div>
    }

    if(error) {
        return <div>{error.message}</div>
    }

    const finishedTodos = data.todos.filter((todo) => todo.done === true)
    const todos = data.todos.filter((todo) => todo.done === false)

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