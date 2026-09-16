const insertNameBtn = document.querySelector('.insert-name');
const customNameSpan = document.querySelector('.name-span');


const savedName = localStorage.getItem('userCustomName');
if(savedName) {
    customNameSpan.textContent = savedName;
}

insertNameBtn.addEventListener('click', () => {
    const yourName = prompt('Please enter your name:')
    if(yourName) {
        localStorage.setItem('userCustomName', yourName);

        customNameSpan.textContent = yourName;        
    }
});

// loading screen

function loadingFade() {
    const loadingBg = document.querySelector('.loading_bg');
    const loadingImg = document.querySelector('.loading_img');
    loadingBg.style.opacity = "0";
    loadingImg.style.opacity = "0";

}

function loadingRemove() {
    const loading = document.querySelector('.loading');
    loading.style.display = "none";
}

const firstVisit = localStorage.getItem('visited');
if(firstVisit == null) {
    window.setInterval(loadingFade, 6480);
    window.setInterval(loadingRemove, 7080);
    localStorage.setItem('visited', 1)
}
else {
    loadingRemove();
}