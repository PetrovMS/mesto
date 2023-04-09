let openForm = document.querySelector('.profile__edit-button');
let closeForm = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.popup__input_Name');
let inputSelf = document.querySelector('.popup__input_Self');
let profileName = document.querySelector('.profile__title');
let profileSelf = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('form');

function openWindow() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputSelf.value = profileSelf.textContent;
}
openForm.addEventListener('click', openWindow);

function closeWindow() {
    popup.classList.remove('popup_opened');
}
closeForm.addEventListener('click', closeWindow);

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileSelf.textContent = inputSelf.value;
    popup.classList.remove('popup_opened');
}
formElement.addEventListener('submit', handleFormSubmit);
