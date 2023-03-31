---
title: Mini Project Reflection
date: 2023-03-31
---
<p>
My team and I built a todo application using node.js and express.js.
The following is the API I have written which is to mark a specific task as completed from the todo list.
</p>
<pre>
const express = require('express');
const router = express.Router();


// POST endpoint to mark a todo item as complete
module.exports = (todos) => {
    router.post('/', (req, res) => {
        const id = parseInt(req.body.id);
        const index = todos.findIndex((todo) => todo.id === id);
        
        if (index === -1) {
            // Update the done value of the todo to true
            return res.json({success: false, message: `The todo item with ID ${id} is not found `}); 
        }
        todos[index].state = true;
        //res.json({success: true, message: `The todo item with ID ${id} has been marked as done`});

        res.send(todos);
        
        // Return success response
        //res.json({success: true, message: `The todo item with ID ${id} has been marked as doene`});
    });

    return router;
};
</pre>
<p>
  My previous knowledge of git for creation of a branch, pushing and merging were useful in this project.
To complete this project I need to learn how to write APIs in JavaScript, using postman software, and creating github issues. This is my first time writing an API. 
</p>
  <b>Challenges:</b>
<p>  Initially, I faced challenges in writing the APIs in separate files. But, with the help of my teammates I was able to complete my task. The biggest challenge was managing the time. As each of us 
have different subjects and different tasks to complete, we had troubles in managing time. At the end of the day, we successfully completed the project.
  </p>
  
