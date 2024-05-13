// Get the form element
const loginForm = document.querySelector('#login-form');

// Add event listener to the form submit event
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the input values
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Perform validation
    if (username === 'admin' && password === 'password') {
        // Successful login
        alert('Login successful!');
        // Redirect to the dashboard or another page
        window.location.href = '/dashboard.html';
    } else {
        // Invalid credentials
        alert('Invalid username or password. Please try again.');
    }
});