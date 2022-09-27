async function signupFormHandler(event) {
    event.preventDefault();

    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (firstname && lastname && username && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({
                firstname,
                lastname,
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/login');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);