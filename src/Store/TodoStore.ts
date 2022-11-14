import { observable, action } from "mobx";
import ITodo from "../Interfaces/ITodo";

const todoDefault: ITodo = {
  id: 1,
  title: "Do the laundry",
  completed: false
}

const todoStore = observable({
  todos: [todoDefault] as Array<ITodo>,

  makeTodo: action((title: string) => {
    const todo: ITodo = {
      id: Math.random(),
      title,
      completed: false,
    }
    todoStore.todos.push(todo)
  }),
})

export default todoStore
