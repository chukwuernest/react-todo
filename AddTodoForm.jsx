import React from 'react'

function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    event.preventDefault()
    var todoTitle = event.target.title.value

    console.log(todoTitle)

    {
      props.onAddTodo(todoTitle)
    }
    todoTitle = ''
  }
  return (
    <div>
      <h1>this is a AddTodoForm</h1>
      <form action='form' onSubmit={handleAddTodo}>
        <label htmlFor='' id='todoTitle'>
          Title
        </label>
        <input type='text' id='todoTitle' name='title' />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
