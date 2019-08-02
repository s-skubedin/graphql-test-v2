const { DataSource } = require('apollo-datasource');

const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';
const ASC = 'asc';

class TodoAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async createTodo(data) {
    if (data.priority < 1) delete data.priority;
    await this.store.todos.create(data);
    return await this.getAllTodos();
  }

  async deleteTodo({ id }) {
    await this.store.todos.destroy({
      where: { id }
    });
    return await this.getAllTodos();
  }

  async updateTodo({ description, priority, id }) {
    if (priority < 1) priority = 1;

    await this.store.todos.update(
      { description, priority },
      { where: { id } }
    );
    return await this.getAllTodos();
  }

  async completedTodo({ id }) {
    await this.store.todos.update(
      { completed: true },
      { where: { id } }
    );
    return await this.getAllTodos();
  }

  async getAllTodos(data = {}) {
    const {sortField, sortOrder = ASC, filterTodos} = data;
    const isSortField = sortField && sortField.length > 0;
    const isFilterTodos = filterTodos && filterTodos.length > 0;
    const options = isSortField
      ? { order: [[sortField, sortOrder.toUpperCase()]] }
      : {};
    const response = await this.store.todos.findAll(options);
    const todos =  Array.isArray(response)
      ? response.map(todo => this.todoReducer(todo))
      : [];

    let filteredTodos;

    if (isFilterTodos && filterTodos.toLowerCase() === COMPLETED)
      filteredTodos = todos.filter(todo => todo.completed === true);

    if (isFilterTodos && filterTodos.toLowerCase() === UNCOMPLETED)
      filteredTodos  = todos.filter(todo => todo.completed === false);

    return filteredTodos || todos;
  }

  todoReducer(todo) {
    return {
      id: todo.id || 0,
      description: todo.description || 'description is null, oops',
      completed: todo.completed,
      createdAt: todo.createdAt || 0,
      priority: todo.priority,
    };
  }

}

module.exports = TodoAPI;
