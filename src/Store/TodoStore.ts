import { observable, action, computed } from "mobx";
import ITodo from "../Interfaces/ITodo";

const todoStore = observable({
  todos: [] as Array<ITodo>,

  makeTodo: action((title: string) => {
    const todo: ITodo = {
      id: Number(todoStore.getNewId),
      title,
      isCompleted: false,
    }
    todoStore.todos.push(todo)
  }),

  removeTodo: action((removeTodo: ITodo) => {
    todoStore.todos = todoStore.todos.filter((todo: ITodo) => todo.id !== removeTodo.id)
  }),

  setCompleted: action((changedTodo: ITodo, isCompleted: boolean) => {
    todoStore.todos = todoStore.todos.map((todo) => {
      if(todo.id === changedTodo.id){
        todo.isCompleted = isCompleted
      }
      return todo
    })
  }),

  getNewId: computed ((): number => {
    return todoStore.todos.length
      ? todoStore.todos.slice(-1)[0]!.id + 1
      : 1
  })
})

export default todoStore
