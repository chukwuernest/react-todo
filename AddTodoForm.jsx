import React, { useState } from 'react'

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState('')
  const handleAddTodo = (event) => {
    event.preventDefault()
    var todoTitle = event.target.title.value

    console.log(todoTitle)

    {
      props.onAddTodo(todoTitle)
    }
    event.target.title.value = ''
  }
  return (
    <div>
      <h1>this is a AddTodoForm</h1>
      <form action='form' onSubmit={handleAddTodo}>
        <label htmlFor='' id='todoTitle' className='todotitle'>
          Title
        </label>
        <input type='text' id='todoTitle' name='title' />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
