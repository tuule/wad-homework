const express = require('express');
const pool = require('./database');
const render = require("ejs");
const functions = require('./public/js/script');

const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

// use static files
app.use(express.static('public'))
//without this middleware, we cannot use data submitted by forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    next();
});

// listen for requests on port 3000
app.listen(3000);

/* app.get() is used to respond to Get requests: */
app.get('/', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const postData = await pool.query(
            "SELECT * FROM posts ORDER BY post_date DESC"
        );
        res.render('posts', { posts: postData.rows, helper: functions });
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/posts/:id', async(req, res) => {
    try {
        console.log("get a single post request has arrived");
        const { id } = req.params;
        console.log(req.params);
        const postData = await pool.query(
            "SELECT * FROM posts WHERE post_id = $1", [id]
        );
        console.log(postData.rows[0])
        if (postData.rows.length > 0) {
            res.render('singlepost', { post: postData.rows[0], helper: functions });
        }
        else {
            res.redirect('/404');
        }
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost');
});

app.post('/posts', async(req, res) => {
    try {
        const post = req.body;
        console.log(post);
        const newpost = await pool.query(
            "INSERT INTO posts(post_date, post_title, post_text, post_image_url, number_of_likes, author_avatar_url, has_been_liked) values (CURRENT_TIMESTAMP, $1, $2, $3, 0, 'https://kodu.ut.ee/~a71486/user-3.png', false) RETURNING *",
            [post.post_title, post.post_text, post.post_image_url]
    );
        res.redirect('/');
    } catch (err) {
        console.error(err.message)
    }
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.use((req, res) => {
    res.status(404).render('404', { message: 'Uh-oh! The page you were looking for does not exist.', title: 'Page Not Found'});
});