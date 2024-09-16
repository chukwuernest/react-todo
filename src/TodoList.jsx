import React from 'react'
import TodoListitem from './TodoListitem'

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <TodoListitem
            key={item.id}
            title={item.title}
            id={item.id}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
