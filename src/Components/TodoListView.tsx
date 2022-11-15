import React from "react";
import {observer} from "mobx-react";
import ITodoStore from "../Interfaces/ITodoStore";
import ITodo from "../Interfaces/ITodo";
import store from "../Store/TodoStore";

const TodoListView = observer(({todoStore}: ITodoStore) => {
  const setTodoCompleted = (event: React.ChangeEvent<HTMLInputElement>, todo: ITodo) => {
    store.setCompleted(todo, event.target.checked)
  }

  if(todoStore.todos.length){
    return (
      <ul>
        {
          todoStore.todos.map((todo: ITodo) => (
            <li
              key={todo.id}
              className={ todo.isCompleted ? 'bg-green-100 mt-3 todo-item' : 'mt-3 todo-item'}
            >
              <span>
                <input
                  type="checkbox"
                  className="inline-block mr-3"
                  onChange={event => setTodoCompleted(event, todo)}
                />
                { todo.title }
              </span>
              <button
                onClick={() => store.removeTodo(todo)}
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-3 py-2 rounded"
              >
                Delete
              </button>
            </li>
          ))
        }
      </ul>
    )
  }
  else {
    return (
      <div className="text-gray-400">
        No todos in your list.
      </div>
    )
  }
})

export default TodoListView
