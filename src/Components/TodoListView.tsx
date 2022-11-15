import {observer} from "mobx-react";
import ITodoStore from "../Interfaces/ITodoStore";
import ITodo from "../Interfaces/ITodo";
import store from "../Store/TodoStore";

const TodoListView = observer(({todoStore}: ITodoStore) => {
  if(todoStore.todos.length){
    return (
      <ul>
        {
          todoStore.todos.map((todo: ITodo) => (
            <li
              key={todo.id}
              className="mt-3 border rounded pl-3 bg-gray-50 w-full flex items-center justify-between"
            >
              <span>
                <input
                  type="checkbox"
                  className="inline-block mr-3"
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
