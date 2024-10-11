import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function AscendingSort(objectA, objectB) {
  if (objectA < objectB) {
    return -1
  } else if (objectA > objectB) {
    return 1
  } else {
    return 0
  }
}

function DescendingSort(objectA, objectB) {
  if (objectA > objectB) {
    return -1
  } else if (objectA < objectB) {
    return 1
  } else {
    return 0
  }
}

function App() {
  let [todoList, setTodoList] = useState([])
  let [isLoading, setIsLoading] = useState(true)
  let [sortAscend, setSortAscend] = useState(true)

  async function fetchData() {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    }
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${
      import.meta.env.VITE_TABLE_NAME
    }?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()

      const todos = data.records.map((record) => ({
        id: record.id,
        title: record.fields.Title,
        createdTime: record.createdTime
      }))

      setTodoList(todos)
      setIsLoading(false)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])
  function sortTodos(todos, sortAscend) {
    return todos.sort((objectA, objectB) => {
      // if (sortAscend) {
      //   return AscendingSort(objectA.title, objectB.title)
      // } else {
      //   return DescendingSort(objectA.title, objectB.title)
      // }
      if (sortAscend) {
        return AscendingSort(objectA.createdTime, objectB.createdTime)
      } else {
        return DescendingSort(objectA.createdTime, objectB.createdTime)
      }
    })
  }
  function handleSort() {
    setSortAscend(!sortAscend)
    setTodoList((prevTodos) => sortTodos(prevTodos, !sortAscend))
  }

  useEffect(() => {
    const loadTodoList = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const savedTodoList = localStorage.getItem('savedTodoList')
          const initialList = savedTodoList ? JSON.parse(savedTodoList) : []
          resolve({ data: { todoList: initialList } })
        }, 2000)
      })
    }
    loadTodoList().then((result) => {
      setTodoList(result.data.todoList)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
  }, [todoList, isLoading])

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(updatedTodoList)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <h1>Todo List</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <AddTodoForm onAddTodo={addTodo} />
                  <button onClick={handleSort} className='toggle'>
                    Choose order ascending or descending
                  </button>
                  <p>{}</p>
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                </>
              )}
            </>
          }
        />
        <Route path='/new' element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
