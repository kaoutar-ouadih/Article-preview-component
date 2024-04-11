const shareSection = document.querySelector('.shareDiv');
const shareBtn = document.querySelector('#shareBtn');
console.log(shareBtn);
console.log(shareBtn);

function showShareSection(){
    shareSection.classList.toggle('active');
}

shareBtn.addEventListener('click',showShareSection
)