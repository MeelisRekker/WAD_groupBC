document.getElementById('loginbutton').addEventListener('click', function() {
    var field1Value = document.getElementById('usr').value;
    var field2Value = document.getElementById('pwd').value;

    if (field1Value && field2Value) {
        // All fields are filled, redirect to index.html
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
});