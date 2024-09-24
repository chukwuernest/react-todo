import React from 'react'
import style from './TodoListItem.module.css'

function TodoListitem({ id, title, onRemoveTodo }) {
  return (
    <div>
      <li className={style.ListItem}>
        {title}
        <button
          className={style.button}
          type='button'
          onClick={() => onRemoveTodo(id)}
        >
          Remove
        </button>
      </li>
    </div>
  )
}

export default TodoListitem
