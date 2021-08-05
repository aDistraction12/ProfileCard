const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const btnC = document.querySelector('.btn-c');

btn.addEventListener('click', () => {
    container.classList.toggle('on')
})
btnC.addEventListener('click', () => {
    container.classList.remove('on')
})