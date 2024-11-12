const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// register
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

// login
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})