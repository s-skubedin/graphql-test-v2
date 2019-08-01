const Sequelize = require('sequelize');

const todosdb = new Sequelize('todosdb', 'sergey', 'dunice', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

const Todos = todosdb.define('Todos', require('./models/todos.model')(Sequelize));

module.exports.Todos = Todos;
module.exports.database = todosdb;



// (async function() {
//   // await todosdb.sync({ force: true }); // drop database
//   await Promise.all([
//     Todos.create({
//       description: 'asd'
//     }),
//     Todos.create({
//       description: 'asd'
//     }),
//   ]);
// })();
