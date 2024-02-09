AOS.init();

var btn = document.querySelector('.btn_click');

btn.style.display = 'none';

setTimeout(function() {
    btn.style.display = 'block';
}, 600);


document.querySelector('.btn_click').addEventListener('click', function() {
    $('.hello').animate({
        top: '-100%',
        opacity: '0'
    }, 800, function() {
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 800);
        });
});

//aleatoire animation
function moveRandomly() {
    var height = window.innerHeight;
    var width = window.innerWidth;

    var newTop = Math.random() * height;
    var newLeft = Math.random() * width;

    var blurObject = document.querySelector('.object-blur2');
    blurObject.style.top = newTop + 'px';
    blurObject.style.left = newLeft + 'px';
}

setInterval(moveRandomly, 10000); // Change position every 10 seconds

document.addEventListener("DOMContentLoaded", function() {
    $('.icons img').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#thanks").offset().top
        }, 2000); // 2000ms = 2s
    });
});

document.addEventListener("DOMContentLoaded", function() {
    $('.btn_click_1').on('click', function() {
        $('h1').animate({
            top: '-100%',
            opacity: '0'
        }, 800, function() {
            setTimeout(function() {
                window.location.href = 'homePage.html';
                location.reload();
            }, 800);
        });
    });
});
