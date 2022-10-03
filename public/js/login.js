const loginBtn = document.querySelector('.login');
const sighUpBtn = document.querySelector('.sign-up');
const logoutBtn = document.querySelector('.logout');

// function for user login 
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
     document.location.replace('/');
    } else {
      message('Failed to log in');
    }
  }

};

//function for user sign-up
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#username-signup').value.trim()
  const email = document.querySelector('#sign-up-email').value.trim();
  const password = document.querySelector('#sign-up-password').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log('Failed to sign up.');
    }
  }
};

//function for user sign-up
const logoutHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    console.log('Failed to logout.');
  }
};

if (logoutBtn) logoutBtn.addEventListener('click', logoutHandler);
if (loginBtn) loginBtn.addEventListener('click', loginFormHandler);
if (sighUpBtn) sighUpBtn.addEventListener('click', signupFormHandler);