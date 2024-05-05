
  $('.slide-items').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    pauseOnHover: false,

  });

  $('.slide-items2').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    pauseOnHover: false,

  });
  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();
        if (position.top < windowHeight) {
            element.classList.add('in-view');
        }
    });
});