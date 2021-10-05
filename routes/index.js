var express = require('express');
var router = express.Router();
var { Todos } = require('../models/todos');

/* GET home page. */
router.get('/',  async function(req, res, next) {
  const todos = await Todos.find();
  //{task: "Learn Node Js", complete: false}
  res.render('index', { title: 'Todos', todos: todos });
});

module.exports = router;
