const express = require('express');
const pool = require('./database');
const {render} = require("ejs");

const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

// listen for requests on port 3000
app.listen(3000);

// use static files
app.use(express.static('public'))

app.use(express.json());

app.use((req, res, next) => {
    next();
});

/* app.get() is used to respond to Get requests: */
app.get('/', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const postData = await pool.query(
            "SELECT * FROM posts"
        );
        res.render('posts', { posts: postData.rows });
    } catch (err) {
        console.error(err.message);
    }
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