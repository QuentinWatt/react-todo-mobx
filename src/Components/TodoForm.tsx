function TodoForm() {
    return (
        <form
          className="mt-3 bg-white rounded-lg border p-3"
        >
          <h3 className="font-bold text-2xl mb-3">
            Add a task
          </h3>
          <div className="flex items-center">
            <input
              type="text"
              className="border py-2 px-3 rounded w-1/2"
              placeholder="Something to do."
            />
            <button className="w-32 bg-primary-500 rounded text-white py-2 px-3 ml-3">
              Add
            </button>
          </div>
        </form>
    )
}

export default TodoForm
