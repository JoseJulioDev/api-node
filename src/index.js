const express = require('express');
const { uuid } = require('uuidv4');

const app = express(); 

app.use(express.json());

app.get("/", (request, response) => {
    return response.send("A API in node.js using express");
});


const projects = [];

// params query
app.get('/projects', (request, response) => {
    const {title} = request.query;

    const results = title
     ?  projects.filter(project => project.title.includes(title))
     :  projects;
    

    return response.json(results);
});

// params body
app.post('/projects', (request, response) => {
    
    const {title, owner} = request.body;

    const project = {id: uuid(), title, owner}

    projects.push(project);

    return response.json(project);
});


// params resquest
app.put('/projects/:id', (request, response) => {
    
    const {id} = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0) {
        return response.status(400).json("Project not found");
    }

    const project = {
        id,
        title,
        owner
    };

    projects[projectIndex] = project;

    return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0) {
        return response.status(400).json("Project not found");
    }

    projects.splice(projectIndex, 1);
    
    return response.json();
})


app.listen(3333, () => {
    console.log('🚀 API Started. 🚀');
});



