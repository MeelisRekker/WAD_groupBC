const userImage = document.getElementById('profileImage');
const dropdown = document.getElementById('dropdown-content');

userImage.addEventListener('click', function() {
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

const username = document.getElementById('username');
const email = document.getElementById('email');
const logoutLink = document.getElementById('logout-link');
// Replace these values with actual user data
username.textContent = 'JohnDoe';
email.textContent = 'johndoe@example.com';

document.getElementById('loginbutton').addEventListener('click', function() {
    var field1Value = document.getElementById('usr').value;
    var field2Value = document.getElementById('pwd').value;
    username.textContent = field1Value;
    if (field1Value && field2Value) {
        // All fields are filled, redirect to index.html
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
});

logoutLink.addEventListener('click', function() {
    var field1Value=null;
    var field2Value=null;
    username.textContent = field1Value;
    alert('Logging out...');
});