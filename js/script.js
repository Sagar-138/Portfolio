// Form Submission
document.getElementById('cont').addEventListener('submit', function (e) {
    e.preventDefault();
    // Assuming you have a valid URL for the AJAX request
    let url = 'https://script.google.com/macros/s/AKfycbz5kTi-Oks-GsuMYkhUKg8YL2DF_PTg_RzA7RfD-b242KVTBs_uFAxk6iUjS1pFmr8Rew/exec';
    let formData = new FormData(this);

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        alert('Data submitted successfully!');
         
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Toggle icon/navbar scroll
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking on navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
