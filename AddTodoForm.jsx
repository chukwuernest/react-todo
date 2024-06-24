import React from 'react'

function AddTodoForm() {
  return (
    <div>
      <h1>this is a AddTodoForm</h1>
      <form action='form'>
        <label htmlFor='' id='todoTitle'>
          Title
        </label>
        <input type='text' id='todoTitle' />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
