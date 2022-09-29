const loginFormHandler = async (event) => {
   event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
     document.location.replace('/api/game');
    } else {
      //message('Failed to log in');
    }
  }

};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#sign-up-email').value.trim();
  const password = document.querySelector('#sign-up-password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/game', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login')
  .addEventListener('click', loginFormHandler);

  // document
  // .querySelector('#sign-up')
  // .addEventListener('click', signupFormHandler);