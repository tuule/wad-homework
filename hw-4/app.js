const express = require('express');
const {render} = require("ejs");

const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

// listen for requests on port 3000
app.listen(3000);

// use static files
app.use(express.static('public'))

app.use((req, res, next) => {
    next();
});

/* app.get() is used to respond to Get requests: */
app.get('/', (req, res) => {
    res.render('posts');
});

app.get('/posts', (req, res) => {
    res.render('posts');
});

app.get('/singlepost', (req, res) => {
    res.render('singlepost');
});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.use((req, res) => {
    res.status(404).render('404', { message: 'Sorry, this page does not exist.', title: 'Page Not Found'});
});

// terminalis käsk 'node app' <- ei uuenda automaatselt, pead serveri sulgema ja uuesti käivitama, et muudatusi näha
// terminalis käsk 'nodemon app' <- uuendab automaatselt
// nodemon  (https://www.npmjs.com/package/nodemon)  is  a  tool  that  helps  develop  node.js
// based applications by automatically restarting the node application when file changes in the
// directory are detected.