window.addEventListener('scroll', function () {
    document.getElementById('scrolling-block').style.transform = `rotateX(45deg) rotateZ(45deg) translate3d(270px, ${2200-pageYOffset}px, 0px)`;
});