// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

// Modalni ochish va yopish uchun tugmalar va overlaylarni tanlang
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// Modal tugmasiga va yopish tugmasiga klik hodisalari eshitilganda
// 'open-modal' sinfini overlayga qo'shing
modalBtn.addEventListener('click', () => {
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    // 'open-modal' sinfini overlaydan olib tashlang
    modal.classList.remove('open-modal');
});