// const { DataSource } = require('apollo-datasource');
//
// class TodoAPI extends DataSource {
//   constructor({ store }) {
//     super();
//     this.store = store;
//   }
//
//   initialize(config) {
//     this.context = config.context;
//   }
//
//   async getAllHomes() {
//     const response = await this.store.homes.findAll();
//     return Array.isArray(response)
//       ? response.map(home => this.homeReducer(home))
//       : [];
//   }
//
//   homeReducer(home) {
//     // let picture = '';
//     // if (fs.existsSync(`uploads/homes/${home.id}`)) {
//     //   console.log('%c "HERE"--> ', "HERE");
//     //
//     //   const extension = path.extname(`uploads/homes/${home.id}`);
//     //   picture = `http://localhost:4000/uploads/homes/${home.id}${extension}`
//     // }
//
//     return {
//       id: home.id || 0,
//       name: home.name || '',
//       address: home.address || '',
//       buildYear: home.buildYear || 0,
//       createdAt: home.createdAt || 0,
//       updatedAt: home.updatedAt || 0,
//       price: home.price || 0,
//       bedroom: home.bedroom || 0,
//       bathroom: home.bathroom || 0,
//       cursor: `${home.createdAt}`,
//     };
//   }
//
//   async getHomeById({ homeId }) {
//     const response = await this.store.homes.findOne({ where: { id: homeId }, raw: true });
//     return this.homeReducer(response);
//   }
//
//   getHomesByIds({ homeIds }) {
//     return Promise.all(
//       homeIds.map(homeId => this.getHomeById({ homeId })),
//     );
//   }
//
//   async changeHomeInfo({ homeId, name }) {
//     try{
//       const home = await this.store.homes.findOne({ where: { id: homeId } });
//       if (!home) {
//         return {
//           success: false,
//           message: 'failed to change home info',
//         };
//       }
//
//       const updatedHome = await home.update({ name });
//       const homeInfo = this.homeReducer(updatedHome.dataValues);
//       return {
//         success: true,
//         message: 'success',
//         home: homeInfo,
//       }
//     } catch (err) {
//       console.log(err);
//       return {
//         success: false,
//         message: 'failed to change home info',
//       };
//     }
//   }
//
//   async addHomeInfo(data){
//     try {
//       console.log('%c !!!!!data -->', 'color: orange;', data);
//       const {
//         name, address, buildYear,
//         price, bedroom, bathroom,
//       } = data;
//       const newRow = {
//         name,
//         address,
//         buildYear,
//         price,
//         bedroom,
//         bathroom,
//         createdAt: epochSeconds(),
//       };
//
//       const response = await this.store.homes.create(newRow);
//       const homeInfo = this.homeReducer(response.dataValues);
//       return {
//         success: true,
//         message: 'success',
//         home: homeInfo,
//       }
//     } catch (err) {
//       console.log(err);
//       return {
//         success: false,
//         message: 'failed to add home info',
//       };
//     }
//   }
//
// }
//
// module.exports = TodoAPI;
