// Toggle sidebar
document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
});

//cart icon
document.getElementById('cartIcon').addEventListener('click', function() {
    alert('Your cart is empty');
});

// Login modal functionality
var userIcon = document.getElementById('userIcon');
var modal = document.getElementById('loginModal');
var span = document.getElementsByClassName('close')[0];
var loginButton = document.getElementById('loginButton');

userIcon.addEventListener('click', function() {
    modal.style.display = 'block';
});

span.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

loginButton.addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username && password) {
        document.getElementById('greeting').innerText = 'Hi, ' + username;
        alert('Welcome ' + username + '!');
        modal.style.display = 'none';
    } else {
        alert('Please enter both username and password.');
    }
});

// Navigation links functionality
document.getElementById('homeLink').addEventListener('click', function() {
    document.getElementById('home11').scrollIntoView();
});

document.getElementById('categoriesLink').addEventListener('click', function() {
    document.getElementById('main1').scrollIntoView();
});

document.getElementById('womenLink').addEventListener('click', function() {
    document.getElementById('women').scrollIntoView();
});

document.getElementById('menLink').addEventListener('click', function() {
    document.getElementById('men').scrollIntoView();
});
document.getElementById('electronicsLink').addEventListener('click', function() {
    document.getElementById('electronics').scrollIntoView();
});

document.getElementById('groceryLink').addEventListener('click', function() {
    document.getElementById('grocery').scrollIntoView();
});

document.getElementById('cartLink').addEventListener('click', function() {
    alert('Your cart is empty');
});

document.getElementById('aboutLink').addEventListener('click', function() {
    document.getElementById('foot').scrollIntoView();
});



/*
// Search functionality
document.getElementById('searchIcon').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var items = document.querySelectorAll('.card .crd, .car .c');
    items.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchInput)) {
            item.style.border = '2px solid red';
            setTimeout(() => {
                item.style.border = 'none';
            }, 2000);
        }
    });
});*/

// Shop Now buttons functionality
document.querySelectorAll('.shopNow[data-target]').forEach(button => {
    button.addEventListener('click', function() {
        var target = this.getAttribute('data-target');
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    });
});


//add to cart button functionality
document.querySelectorAll('.addToCart').forEach(button => {
    button.onclick = function() {
        alert('Item added to cart!');
    };
});



