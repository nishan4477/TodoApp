import { Container } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { removeTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux'


const Todos = () => {
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

  return (
   <>
   <div className='todolist'>
    <Container>
      <h3>Todo List</h3>
      {todos.map((a)=>(
        <div key={a.id}>
          <Grid justify="space-between" alignItems="center" container  spacing={1}>
            <Grid item xs={10}> <h4>{a.text}</h4></Grid>
            <Grid item xs={2}> <Button onClick={()=> dispatch(removeTodo(a.id))} variant="contained" size='large' >Delete</Button></Grid>
          
          </Grid>
          </div>
      ))}



    </Container>
   </div>
   
   
   
   
   
   
   </>
  )
}

export default Todos