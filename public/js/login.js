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
     document.location.replace('/api/game');
    } else {
      message('Failed to log in');
    }
  }

};

//function to rendser sign-up page
const signUpPage = (event) => {
event.preventDefault();
document.location.replace('/sign-up')
}

//function for user sign-up
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim()
  const email = document.querySelector('#sign-up-email').value.trim();
  const password = document.querySelector('#sign-up-password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/sign-up', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      message ('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.signUpBtn')
  .addEventListener('click', signUpPage);

  try{
    document
    .querySelector('.sign-up')
    .addEventListener('click', signupFormHandler);
  }
  catch (err) {
    
  }