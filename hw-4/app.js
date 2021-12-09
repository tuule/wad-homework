const express = require('express');
const pool = require('./database');
const render = require("ejs");
const functions = require('./public/js/script');

const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

// use static files
app.use(express.static('public'))
// without this middleware, we cannot use data submitted by forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for testing

app.use((req, res, next) => {
    next();
});

// listen for requests on port 3000
app.listen(3000);

/* app.get() is used to respond to Get requests: */
app.get('/', async(req, res) => {
    try {
        console.log("Get request to \'/\'");
        const postData = await pool.query(
            "SELECT * FROM posts ORDER BY post_date DESC"
        );
        res.render('posts', { posts: postData.rows, helper: functions });
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/posts', (req, res) => {
    console.log("Get request to \'/posts\', redirected to \'/\'");
    res.redirect('/');
});

app.get('/posts/:id', async(req, res) => {
    try {
        const id = req.params.id; // or you could write it like this -> const { id } = req.params;
        console.log("Get request to \'/posts/id/" + id + "\'");
        const postData = await pool.query(
            "SELECT * FROM posts WHERE post_id = $1", [id]
        );
        if (postData.rows.length > 0) {
            res.render('singlepost', { post: postData.rows[0], helper: functions });
        }
        else {
            console.log("No post with this post_id in database, redirected to \'/404\'");
            res.redirect('/404');
        }
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/addnewpost', (req, res) => {
    console.log("Get request to \'/addnewpost\'");
    res.render('addnewpost');
});

app.post('/add', async(req, res) => {
    try {
        const post = req.body;
        console.log("Post request to \'/add\'");
        console.log(post);
        const newpost = await pool.query(
            "INSERT INTO posts(post_date, post_title, post_text, post_image_url, number_of_likes, author_avatar_url, has_been_liked) values (CURRENT_TIMESTAMP, $1, $2, $3, 0, 'https://kodu.ut.ee/~a71486/user-3.png', false) RETURNING *",
            [post.post_title, post.post_text, post.post_image_url]
    );
        console.log("After post request redirect to \'/\'");
        res.redirect('/');
    } catch (err) {
        console.error(err.message)
    }
});

app.delete('/posts/:id', async(req, res) => {
    try {
        const id = req.params.id;
        console.log("Delete request to \'/posts/" + id + "\'");
        const deletepost = await pool.query(
            "DELETE FROM posts WHERE post_id = $1", [id]
        );
        console.log("After delete request redirect to \'/\'");
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/contact', (req, res) => {
    console.log("Get request to \'/contact\'");
    res.render('contact');
});

app.use((req, res) => {
    console.log("Well done, you have reached the 404 page");
    res.status(404).render('404', { message: 'Uh-oh! The page you were looking for does not exist.', title: 'Page Not Found'});
});