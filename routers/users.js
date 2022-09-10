const { Router } = require('express');
const router = Router();

const getData = require('../methods/getdata');

router.get('/users/:userId', async (req, res) => {
    const userId = req.params.userId;

    const urlUsers = 'https://jsonplaceholder.typicode.com/users/' + userId;
    const urlTodos = 'https://jsonplaceholder.typicode.com/todos';

    let apiData = await getData(urlUsers);
    const todoData = await getData(urlTodos);

    let todos = [];

    for (let i = 0; i < todoData.length; i++) {
        if (todoData[i].userId == userId) {
            todos.push(todoData[i]);
        }
    }

    apiData.todos = todos;
    res.json(apiData);
})

module.exports = router;