import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import  {addTodo}  from '../features/todo/todoSlice'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()


    const addTodoHandler = (e) => {
                e.preventDefault()
                dispatch(addTodo(input))
                setInput("")
               
    }
  return (
    <div className='addtodo'>
    <Container>
        <h2>Todo List APP</h2>
    <form onSubmit={addTodoHandler} >
    <Box
      // component="form" 
      // onSubmit={addTodoHandler}
      sx={{
        '& .MuiTextField-root': { m: 2, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
        <Grid justify="center" alignItems="center" container spacing={4}>
  <Grid xs={8}>
      <TextField id="outlined-search" value={input} onChange={(e)=>setInput(e.target.value) } label="Write Your todo here..." type="text" autoComplete='off' />
  </Grid>
  <Grid xs={4}>
   <Button type='submit' variant="contained" size='large'>Add Todo</Button>
  </Grid>

  
    
    </Grid>
  
        </Box>

    </form>
    
    </Container>
    
    
    
    
    </div>
  )
}

export default AddTodo