const express = require('express');
const hostRouter = express.Router();
const { addHome } = require('./homeStore');






// Add home page
hostRouter.get("/add-home", (req, res, next) => {
    console.log(req.url, req.method);

    res.send(`
        <h1> Register your home here </h1>
       <form  action="/add-home" method="POST"> 
       <input type="text" name="houseName"
       placeholder="enter the name of your house"/>
       <input type="submit"/>
       </form>
    `);
});

// Add post page
hostRouter.post("/add-home", (req, res, next) => {
    const houseName = req.body.houseName?.trim();
    if (!houseName) {
        return res.redirect("/add-home");
    }

    addHome(houseName);
    res.redirect("/");
});


exports.hostRouter = hostRouter;
