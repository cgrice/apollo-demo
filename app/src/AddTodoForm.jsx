import React from 'react'
import { Formik } from 'formik'


const AddTodoForm = () => {
    const onSubmit = async (values, {
        resetForm,
    }) => {
        alert(values.text)
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