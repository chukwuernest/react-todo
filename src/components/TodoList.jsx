import React from 'react';
import TodoListitem from './TodoListitem';
import PropType from 'prop-types';

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
};
TodoList.PropType = {
  todoList: Prop.func,
  onRemoveTodo: PropType.func,
};

export default TodoList;
