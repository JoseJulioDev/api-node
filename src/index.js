const express = require("express");

const app = express(); 

app.use(express.json());

app.get("/", (request, response) => {
    return response.send("A API in node.js using express");
});

// params query
app.get('/projects', (request, response) => {
   
    const {title, owner} = request.query;

    console.log(title);
    console.log(owner);
   
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

// params body
app.post('/projects', (request, response) => {
    
    const {title, owner} = request.body;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});


// params resquest
app.put('/projects/:id', (resquest, response) => {
    
    const {id} = resquest.params;

    console.log(id);
    
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



