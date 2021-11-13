// javaScript function for profile drop-down (you will also need to add
// onclick="dropdownMenu();" to .profile-image img)
/*
function dropdownMenu() {
    const clickMenu = document.querySelector('.dropdown');
    clickMenu.classList.toggle('active')
}
 */

// jQuery function for profile drop-down (you will also need to remove
// onclick="dropdownMenu();" from .profile-image img)
$(function () {
    var image = $('.profile-image img');
    image.click(function () {
        var dropdown = $('.dropdown');
        if (dropdown.hasClass('active')) {
            dropdown.removeClass('active');
        } else {
            dropdown.addClass('active');
        }
    });
});



// jQuery code that can retrieve/fetch the posts information from the endpoint (URI)
$(document).ready(function (){
    var api = 'http://myjson.dit.upm.es/api/bins/1ijb';
    //var local = 'js/posts.json'
    $.getJSON(api, function (data) {
        //console.log(data)
        var $newPost;
        $.each(data, function (index, post) {
            var date = new Date(post.post_date).toLocaleString('default', {year: 'numeric', month: 'long',
                day: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit'});
            // the post contains an image
            if (post.post_image_url !== null) {
                // the post contains text
                if (post.post_text !== null) {
                    $newPost =
                        '<div class="post">' +
                            '<div class="post-top">' +
                                '<img src="' + post.author_avatar_url + '" alt="avatar">' +
                                '<p>' + date + '</p>' +
                            '</div>' +
                            '<div class="post-image">' +
                                '<img src="' + post.post_image_url + '" alt="posted-image">' +
                            '</div>' +
                            '<div class="post-comment">' +
                                '<p>' + post.post_text + '</p>' +
                            '</div>' +
                            '<div class="like-button">' +
                                '<button type="button" name="thumbs-up"></button>' +
                            '</div>' +
                        '</div>'
                    $('#content-flow').append($newPost);
                }
                // the post does not contain text (but contains an image)
                else {
                    $newPost =
                        '<div class="post">' +
                            '<div class="post-top">' +
                                '<img src="' + post.author_avatar_url + '" alt="avatar">' +
                                '<p>' + date + '</p>' +
                            '</div>' +
                            '<div class="post-image">' +
                                '<img src="' + post.post_image_url + '" alt="posted-image">' +
                            '</div>' +
                            '<div class="like-button">' +
                                '<button type="button" name="thumbs-up"></button>' +
                            '</div>' +
                        '</div>'
                    $('#content-flow').append($newPost);
                }
            }
            // the post does not contain an image but contains text
            else {
                $newPost =
                    '<div class="post">' +
                        '<div class="post-top">' +
                            '<img src="' + post.author_avatar_url + '" alt="avatar">' +
                            '<p>' + date + '</p>' +
                        '</div>' +
                        '<div class="post-comment">' +
                            '<p>' + post.post_text + '</p>' +
                        '</div>' +
                        '<div class="like-button">' +
                            '<button type="button" name="thumbs-up"></button>' +
                        '</div>' +
                    '</div>'
                $('#content-flow').append($newPost);
            }
        });

        // jQuery function for like button
        $(function() {
            var button = $('.like-button > button')
            button.click(function() {
                var btn = $(this);
                if (btn.hasClass('active')) {
                    btn.removeClass('active');
                } else {
                    btn.addClass('active');
                }
                console.log("Button was clicked")
            });
        });

    });
});


// javascript code that can retrieve/fetch the posts information from the endpoint (URI)
/*
const url = 'http://myjson.dit.upm.es/api/bins/1ijb';

function fetchPosts() {
    return fetch(url)
        .then(response => response.json())
        .then(data => showPosts(data));
}

function showPosts(data) {
    let output = '';
    data.forEach(post => {
        //console.log(post)
        var date = new Date(post.post_date).toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric',
            hour12: false, hour: '2-digit', minute: '2-digit'});
        // when the post contains an image
        if (post.post_image_url !== null) {
            // when the post contains image and text
            if (post.post_text !== null) {
                output += `
                <div class="post">
                    <div class="post-top">
                        <img src="${post.author_avatar_url}" alt="avatar">
                        <p>${date}</p>
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
            // when the post does not contain text (but contains an image)
            else {
                output += `
                <div class="post">
                    <div class="post-top">
                        <img src="${post.author_avatar_url}" alt="avatar">
                        <p>${date}</p>
                    </div>
                    <div class="post-image">
                        <img src="${post.post_image_url}" alt="posted-image">
                    </div>
                    <div class="like-button">
                        <button type="button" name="thumbs-up"></button>
                    </div>
                </div>    
            `;
            }
        }
        else {
            output += `
                <div class="post">
                    <div class="post-top">
                        <img src="${post.author_avatar_url}" alt="avatar">
                        <p>${date}</p>
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
 */