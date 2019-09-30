import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'


const client = new ApolloClient({
    uri: 'http://localhost:3333',
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
)