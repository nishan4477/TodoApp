import React from 'react'
import AddTodo from './components/AddTodo'
import "./app.scss"
import Todos from './components/Todos'
import { Container } from '@mui/material'

const App = () => {
  return (
   <>
   <Container>
   <AddTodo/>
   <Todos/>
   </Container>
   </>
  )
}

export default App