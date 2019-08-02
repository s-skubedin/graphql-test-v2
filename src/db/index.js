const Sequelize = require('sequelize');

const index = new Sequelize('todosdb', 'sergey', 'dunice', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

const Todos = index.define('Todos', require('./models/todos.model')(Sequelize));

module.exports.database = index;
module.exports.Todos = Todos;
module.exports.createStore = () => ({ todos: Todos });
