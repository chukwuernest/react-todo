import React, { useState } from 'react'

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState([])

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
        <label htmlFor='' id='todoTitle' className='todotitle'>
          Title
        </label>
        <input
          value={todoTitle}
          type='text'
          id='todoTitle'
          name='title'
          onChange={handleTitleChange}
        ></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
