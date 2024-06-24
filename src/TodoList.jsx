import React from 'react'

const todoList = [
  {
    id: 1,
    title: 'cleaning',
  },
  {
    id: 2,
    title: 'painting',
  },
  {
    id: 3,
    title: 'shopping',
  },
  {
    id: 4,
    title: ' cooking',
  },
]

function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default TodoList
