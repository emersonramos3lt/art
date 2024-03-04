window.sr = ScrollReveal({reset: true});

sr.reveal('img', {duration: 2000});

window.onload = function(){
    setTimeout(function () {
        document.querySelector('.loader-wrapper').classList.add('hidden').style.display = 'none';

        document.body.classList.add('loading');

        document.getElementById('content').style.display = 'block';
    }, 1500)
}