import ITodo from "./ITodo";

export default interface ITodoStore {
  todoStore: {
    todos: Array<ITodo>
  }
}
