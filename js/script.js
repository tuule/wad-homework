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