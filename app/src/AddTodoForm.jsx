import React from 'react'
import { Formik } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const ADD_TODO_MUTATION = gql`
    mutation AddTodo($text: String!) {
        addTodo(text: $text) { 
            id
            text
            done
        }
    }
`

const GET_TODOS = gql`
    query GetTodos {
        todos {
            id
        }
    }
`


const AddTodoForm = () => {
    const [addTodo] = useMutation(ADD_TODO_MUTATION, {
        update: (cache, { data: { addTodo }}) => {
            const { todos } = cache.readQuery({ query: GET_TODOS })
            cache.writeQuery({
                query: GET_TODOS,
                data: { todos: [...todos, addTodo] },
            })
        }
    })

    const onSubmit = async (values, {
        resetForm,
    }) => {
        await addTodo({
            variables: {
                text: values.text
            }
        })
        resetForm()
    }

    return (
        <Formik
            initialValues={{ text: '' }}
            onSubmit={onSubmit}
        >
            {({
                values,
                handleSubmit,
                handleChange,
                handleBlur,
            }) => (
                <form className="addtodo-form" onSubmit={handleSubmit}>
                    <button className="addtodo-submit">+</button>
                    <input 
                        className="addtodo-input" 
                        type="text" 
                        name="text"
                        placeholder="to do" 
                        autoComplete="off"
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        value={values.text}
                    />
                </form>
            )}
        </Formik>
        
    )
}

export default AddTodoForm