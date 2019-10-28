const showBtn = document.querySelectorAll('.overlay');

showBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('overlay3');
    });
});