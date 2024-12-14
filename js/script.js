const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}
const currentYear = new Date().getFullYear
document.getElementById('currentYear').textContent = currentYear
