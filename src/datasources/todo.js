const { DataSource } = require('apollo-datasource');

class TodoAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllTodos() {
    const response = await this.store.todos.findAll();
    console.log(response, 'response');
    return Array.isArray(response)
      ? response.map(todo => this.homeReducer(todo))
      : [];
  }

  homeReducer(todo) {

    return {
      id: todo.id || 0,
      description: todo.description || 'ups',
      completed: todo.completed,
      createdAt: todo.createdAt || 0,
      priority: todo.priority,
    };
  }

  // async getHomeById({ homeId }) {
  //   const response = await this.store.homes.findOne({ where: { id: homeId }, raw: true });
  //   return this.homeReducer(response);
  // }
  //
  // getHomesByIds({ homeIds }) {
  //   return Promise.all(
  //     homeIds.map(homeId => this.getHomeById({ homeId })),
  //   );
  // }
  //
  // async changeHomeInfo({ homeId, name }) {
  //   try{
  //     const home = await this.store.homes.findOne({ where: { id: homeId } });
  //     if (!home) {
  //       return {
  //         success: false,
  //         message: 'failed to change home info',
  //       };
  //     }
  //
  //     const updatedHome = await home.update({ name });
  //     const homeInfo = this.homeReducer(updatedHome.dataValues);
  //     return {
  //       success: true,
  //       message: 'success',
  //       home: homeInfo,
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     return {
  //       success: false,
  //       message: 'failed to change home info',
  //     };
  //   }
  // }
  //
  // async addHomeInfo(data){
  //   try {
  //     console.log('%c !!!!!data -->', 'color: orange;', data);
  //     const {
  //       name, address, buildYear,
  //       price, bedroom, bathroom,
  //     } = data;
  //     const newRow = {
  //       name,
  //       address,
  //       buildYear,
  //       price,
  //       bedroom,
  //       bathroom,
  //       createdAt: epochSeconds(),
  //     };
  //
  //     const response = await this.store.homes.create(newRow);
  //     const homeInfo = this.homeReducer(response.dataValues);
  //     return {
  //       success: true,
  //       message: 'success',
  //       home: homeInfo,
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     return {
  //       success: false,
  //       message: 'failed to add home info',
  //     };
  //   }
  // }

}

module.exports = TodoAPI;
