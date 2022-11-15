import todoStore from "../Store/TodoStore";
import TodoListView from "./TodoListView";

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
