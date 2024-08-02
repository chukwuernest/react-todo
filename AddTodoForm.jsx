import React, { useState } from 'react'
import InputWithLabel from './src/InputWithLabel'

function AddTodoForm({ onAddTodo }) {
  let [todoTitle, setTodoTitle] = useState([])

  const handleTitleChange = (event) => {
    event.preventDefault()
    var newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()

    var todoTitle = event.target.title.value

    // console.log(todoTitle)

    {
      onAddTodo({ title: todoTitle, id: Date.now() })
    }

    setTodoTitle('')
  }
  return (
    <div>
      <h1>this is a AddTodoForm</h1>
      <form action='form' onSubmit={handleAddTodo}>
        {/* <label htmlFor='' id='todoTitle' className='todotitle'>
          <h2> Title</h2>
        </label> */}
        {/* <input>
          value={todoTitle},
          type='text', 
          id='todoTitle' 
          name='title' 
          onChange={handleTitleChange}
        </input> */}

        <InputWithLabel
          label='Title'
          value={todoTitle}
          type='text'
          id='todoTitle'
          name='title'
          onChange={handleTitleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
