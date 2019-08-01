const { Todos } = require('../db/db');

module.exports.createStore = () => ({ todos: Todos });
