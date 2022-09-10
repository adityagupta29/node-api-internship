const express = require('express');
const todos = require('./routers/todos.js');
const users = require('./routers/users.js');

const app = express();

app.use(todos);
app.use(users);


app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});