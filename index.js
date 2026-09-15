const insertNameBtn = document.querySelector('.insert-name');
const customNameSpan = document.querySelector('.name-span');

insertNameBtn.addEventListener('click', () => {
    const yourName = prompt('Please enter your name:')
    customNameSpan.textContent = yourName;
});