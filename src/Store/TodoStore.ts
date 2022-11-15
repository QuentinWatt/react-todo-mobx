import { observable, action, computed } from "mobx";
import ITodo from "../Interfaces/ITodo";

const todoStore = observable({
  todos: [] as Array<ITodo>,

  makeTodo: action((title: string) => {
    const todo: ITodo = {
      id: Number(todoStore.getNewId),
      title,
      completed: false,
    }
    todoStore.todos.push(todo)
  }),

  removeTodo: action((removeTodo: ITodo) => {
    todoStore.todos = todoStore.todos.filter((todo: ITodo) => todo.id !== removeTodo.id)
  }),

  getNewId: computed ((): number => {
    return todoStore.todos.length
      ? todoStore.todos.slice(-1)[0]!.id + 1
      : 1
  })
})

export default todoStore
