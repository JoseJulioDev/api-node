const express = require("express");

const app = express(); 

app.get("/", (request, response) => {
    return response.send("A API in node.js using express");
});

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});


app.put('/projects/:id', (resquest, response) => {
    return response.json([
        'Projeto 10',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.delete('/projects/:id', (resquest, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
})


app.listen(3333, () => {
    console.log('🚀 API Started. 🚀');
});



