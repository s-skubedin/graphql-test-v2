/*

import database, models
 */

module.exports = {
  Query: {
    todos: async (_, data, { dataSources }) => {
      const allTodos = await dataSources.todoAPI.getAllTodos();
      console.log('getAllTodos', allTodos);
      // we want these in reverse chronological order

      return {
        allTodos,
      };
    },


  //     async () =>  {
  //     const todos = await Model.findAndCountAll({
  //       where: {
  //         completed: true,
  //       },
  //       limit: 20,
  //       offset: 0,
  //       order: [['description', 'DESC']]
  //     }); // { rows: [], total: '10' }
  //   },
  },

  // Mutation: {
  //   changeTodo: async (_, { name, id }, { dataSources }) => dataSources.todoAPI.changeTodoInfo({ todoId: id, name }),
  //   createTodo: async (_, data, { dataSources }) => dataSources.todoAPI.addTodoInfo(data),
  // },
};


/*

const user = await Todos.findOne({
  where: {
    id: asdadkas;d,
  },
});

findAll

findAndCountAll

create({
  text:
  title:


})

 */
