const Sequelize = require('sequelize');

const todosdb = new Sequelize('todosdb', 'sergey', 'dunice', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

const Todo = todosdb.define('Todo', require('./models/todo.model')(Sequelize));

module.exports.Todo = Todo;
module.exports.database = todosdb;
