import todoStore from "../Store/TodoStore";
import ITodo from "../Interfaces/ITodo";
import { observer } from "mobx-react";

// @ts-ignore
const TodoListView = observer(({todoStore}) => (
  <ul>
    {
      todoStore.todos.map((todo: ITodo) => (
        <li
          key={todo.id}
          className="border rounded px-3 py-2 bg-gray-50 relative flex"
        >
          { todo.title }
        </li>
      ))
    }
  </ul>
))

const TodoList = () => {
  return (
    <div className="border bg-white rounded-lg p-3 mt-3">
      <h3 className="font-bold text-2xl mb-3">
        Your task list
      </h3>
      <TodoListView todoStore={todoStore} />
    </div>
  )
}

export default TodoList
