import React from 'react'
import style from './TodoListItem.module.css'
import PropType from 'prop-types'

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
};
TodoListitem.PropType = {
  id: PropType.func,
  title: PropType.func,
  onRemoveTodo: PropType.func
};
export default TodoListitem;
