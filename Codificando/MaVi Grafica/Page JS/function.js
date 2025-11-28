//Interacao e animacao da tela de cadastro de login e senha
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active')
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
});

// //Interacao Modo Dark e Modo Light
// let trilho = document.getElementById('trilho')
// let body = document.querySelector('body')

// trilho.addEventListener('click',()=>{
//     trilho.classList.toggle('dark')
//     body.classList.toggle('dark')
// })

