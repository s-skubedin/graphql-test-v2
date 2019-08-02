module.exports = {
  Query: {
    getAllTodos: async (_, data, { dataSources }) =>
      await dataSources.todoAPI.getAllTodos(data),
  },

  Mutation: {
    createTodo: async (_, data, { dataSources }) =>
      await dataSources.todoAPI.createTodo(data),

    updateTodo: async (_, data, { dataSources }) =>
      await dataSources.todoAPI.updateTodo(data),

    deleteTodo: async (_, data, { dataSources }) =>
      await dataSources.todoAPI.deleteTodo(data),

    completedTodo: async (_, data, { dataSources }) =>
      await dataSources.todoAPI.completedTodo(data),
  },
};
