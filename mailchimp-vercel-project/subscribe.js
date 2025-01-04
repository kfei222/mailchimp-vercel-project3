<script>
  document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Basic validation
    if (!name || !email) {
      document.getElementById('form-message').innerText = 'Please fill out both fields.';
      return;
    }

    // Clear any previous error or success messages
    document.getElementById('form-message').innerText = '';

    // Send data to the Vercel serverless function
    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ FNAME: name, EMAIL: email })
    })
    .then(response => {
      if (response.ok) {
        // Success: show success message and clear form
        document.getElementById('form-message').innerText = 'Thanks for subscribing!';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
      } else {
        // If there's an error, show error message
        document.getElementById('form-message').innerText = 'There was an error. Please try again.';
      }
    })
    .catch(error => {
      // Catch any network or unexpected errors
      document.getElementById('form-message').innerText = 'There was an error. Please try again.';
    });
  });
</script>
