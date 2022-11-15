import React from "react";
import {FormEvent, useState} from "react";
import todoStore from "../Store/TodoStore";

function TodoForm() {
  const [ todoTitle, setTodoTitle ] = useState('')
  const [ errors, setErrors ] = useState<Array<string>>([])

  const update = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value)
    if(errors.length){
      setErrors([])
    }
  }

  const addTodo = (event: FormEvent) => {
    setErrors([])
    event.preventDefault()
    if(todoTitle.length){
      todoStore.makeTodo(todoTitle)
      setTodoTitle('')
    }
    else {
      setErrors(['Enter a value'])
    }
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
        <div className="w-full md:w-1/2 md:mr-3">
          <input
            type="text"
            className="border py-2 px-3 rounded block w-full"
            onChange={event => update(event)}
            value={todoTitle}
            placeholder="Something to do."
          />
          { errors.map((error) => (
            <div className="text-red-500 text-sm">
              { error }
            </div>
          )) }
        </div>
        <div>
          <button
            className="mt-3 md:mt-0 w-full md:w-32 bg-primary-500 hover:bg-primary-600 rounded text-white py-2 px-3"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  )
}

export default TodoForm
