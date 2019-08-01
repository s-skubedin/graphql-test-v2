module.exports = {
  Query: {
    allTodo: () => ({
      description: 'asda',
      completed: false,
      createdAt: new Date(1992, 12,12,12,12,12,12),
      priority: 1,
    }),
  },

  // Mutation: {
  //   changeTodo: async (_, { name, id }, { dataSources }) => dataSources.todoAPI.changeTodoInfo({ todoId: id, name }),
  //   createTodo: async (_, data, { dataSources }) => dataSources.todoAPI.addTodoInfo(data),
  // },
};
