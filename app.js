const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({
    extended: false

}));

const userRouter = require("./routes/userRouter")
const {
    hostRouter
} = require("./routes/hostRouter")


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.use(express.static(path.join(__dirname, 'routes', 'public')))

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1> 404 Page not found </h1>")
})




const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
