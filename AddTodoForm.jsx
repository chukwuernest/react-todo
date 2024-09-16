import React, { useState } from 'react'
import InputWithLabel from './src/InputWithLabel'

function AddTodoForm({ onAddTodo }) {
  let [todoTitle, setTodoTitle] = useState([])

  const handleTitleChange = (event) => {
    event.preventDefault()
    let newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()

    let todoTitle = event.target.title.value

    {
      onAddTodo({ title: todoTitle, id: Date.now() })
    }

    setTodoTitle('')
  }
  return (
    <div>
      <h1>this is a AddTodoForm</h1>
      <form action='form' onSubmit={handleAddTodo}>
        <InputWithLabel
          label='Title'
          value={todoTitle}
          type='text'
          id='todoTitle'
          name='title'
          onChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
