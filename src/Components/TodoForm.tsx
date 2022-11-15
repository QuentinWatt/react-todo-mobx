import { useState } from "react";
import todoStore from "../Store/TodoStore";

function TodoForm() {
    const [ todoTitle, setTodoTitle ] = useState('')

    const addTodo = (event: any) => {
      event.preventDefault()
      todoStore.makeTodo(todoTitle)
      setTodoTitle('')
    }

    return (
      <form
        onSubmit={ addTodo }
        className="mt-3 bg-white rounded-lg border p-3"
      >
        <h3 className="font-bold text-2xl mb-3">
          Add a task
        </h3>
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            className="border py-2 px-3 rounded w-full md:w-1/2 md:mr-3"
            onChange={event => setTodoTitle(event.target.value)}
            value={todoTitle}
            placeholder="Something to do."
          />
          <button
            className="mt-3 md:mt-0 w-full md:w-32 bg-primary-500 rounded text-white py-2 px-3"
          >
            Add
          </button>
        </div>
      </form>
    )
}

export default TodoForm
