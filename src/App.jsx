import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
