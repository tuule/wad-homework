// javaScript function for profile drop-down
function dropdownMenu() {
    const clickMenu = document.querySelector('.dropdown');
    clickMenu.classList.toggle('active')
}

// jQuery function for like button
$(function() {
    $('.like-button > button').click(function() {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active');
        } else {
            $this.addClass('active');
        }
    });
});

const url = 'http://myjson.dit.upm.es/api/bins/1bwf';

function fetchPosts() {
    return fetch(url)
        .then(response => response.json())
        .then(data => showPosts(data));
}

function showPosts(data) {
    let output = '';
    data.forEach(post => {
        console.log(post)
        var date = new Date(post.post_date);
        // when the post contains an image
        if (post.post_image_url !== "") {
            output += `
                <div class="post">
                    <div class="post-top">
                        <img src="${post.author_avatar_url}" alt="avatar">
                        <p>${date.toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric',
                hour12: false, hour: '2-digit', minute: '2-digit'})}</p>
                    </div>
                    <div class="post-image">
                        <img src="${post.post_image_url}" alt="posted-image">
                    </div>
                    <div class="post-comment">
                        <p>${post.post_text}</p>
                    </div>
                    <div class="like-button">
                        <button type="button" name="thumbs-up"></button>
                    </div>
                </div>    
            `;
        }
        else {
            output += `
                <div class="post">
                    <div class="post-top">
                        <img src="${post.author_avatar_url}" alt="avatar">
                        <p>${date.toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric',
                hour12: false, hour: '2-digit', minute: '2-digit'})}</p>
                    </div>
                    <div class="post-comment">
                        <p>${post.post_text}</p>
                    </div>
                    <div class="like-button">
                        <button type="button" name="thumbs-up"></button>
                    </div>
                </div>
            `;
        }
    })
    // this is where we will insert the posts
    // innerHTML lets you easily replace the existing contents of an element with new content
    document.getElementById('content-flow').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function() {
    fetchPosts()
})