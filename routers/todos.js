const { Router } = require('express');
const router = Router();

const getData = require('../methods/getdata');

router.get('/', async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const apiData = await getData(url);
    const todoData = [];

    for (let i = 0; i < apiData.length; i++) {
        delete apiData[i].userId
        todoData.push(apiData[i]);
    }

    res.json(todoData);
})

module.exports = router;