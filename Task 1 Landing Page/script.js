$(document).ready(function() {
    $('a.nav-link, a.smooth-scroll, .navbar-brand').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

$('.card').hover(
    function() {
        $(this).css('transform', 'scale(1.05)');
    },
    function() {
        $(this).css('transform', 'scale(1)');
    }
);

$('.social-icons a').each(function(index) {
    $(this).css('transition-delay', index * 0.1 + 's');
});

gsap.from('.hero-section h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero-section p', { opacity: 0, y: 50, duration: 1 });

gsap.from('.card', { opacity: 0, y: 50, stagger: 0.2, duration: 1 });
