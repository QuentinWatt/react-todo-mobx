import { observable, action } from "mobx";
import ITodo from "../Interfaces/ITodo";

const todoStore = observable({
  todos: [] as Array<ITodo>,

  openMenu: action((todo: ITodo) => {
    todoStore.todos.push(todo)
  })
})
