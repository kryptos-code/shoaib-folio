function getTyped() {
    var typed = new Typed(".multiple-text", {
        strings: ["Software Engineer", "Java Developer", "Content Creator", "Blogger"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });     
}

function changeActive(name) {
    
    var activeClasses = document.getElementsByClassName('active');
    while (activeClasses.length)
        activeClasses[0].classList.remove('active');

    var element2 = document.getElementById('nav-'+name);
    element2.classList.add('active');
}