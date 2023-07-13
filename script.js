// Main elements
const cards = document.getElementById('cards')
const buttonAddCard = document.getElementById('button-addcard')

// Popup elements
const backgroundPopupAddCard = document.getElementById('background-popup-addcard')
const popupAddCard = document.getElementById('popup-addcard')
const closerPopupAddCard = document.getElementById('closer-popup-addcard')
const formPopupAddCard = document.getElementById('form-popup-addcard')
const submitPopupAddCard = document.getElementById('submit-popup-addcard')

const titleInputPopupAddCard = document.getElementById('title-input-addcard')
const usernameInputPopupAddCard = document.getElementById('username-input-addcard')
const emailInputPopupAddCard = document.getElementById('email-input-addcard')
const passwordInputPopupAddCard = document.getElementById('password-input-addcard')

// Cancel submit  
formPopupAddCard.addEventListener('submit', event => {
	event.preventDefault()
})

// Popup visibility
backgroundPopupAddCard.classList.add("hiden");

function showPopup() {
	backgroundPopupAddCard.classList.remove("hiden");
}

function hidePopup() {
	backgroundPopupAddCard.classList.add("hiden");
}

// Add card fonctionality
function addCard() {
	hidePopup()
	const cardTitle = document.createElement('h2')
	cardTitle.textContent = titleInputPopupAddCard.value
	const cardUsername = document.createElement('p')
	cardUsername.textContent = `Username : ${usernameInputPopupAddCard.value}`
	const cardEmail = document.createElement('p')
	cardEmail.textContent = `Email : ${emailInputPopupAddCard.value}`
	const cardPassword = document.createElement('p')
	cardPassword.textContent = `Password : ${passwordInputPopupAddCard.value}`
	formPopupAddCard.reset()
	const cardLi = document.createElement('li')
	cardLi.appendChild(cardTitle)
	cardLi.appendChild(cardUsername)
	cardLi.appendChild(cardEmail)
	cardLi.appendChild(cardPassword)
	cards.appendChild(cardLi)
}

// Main events
buttonAddCard.addEventListener('click', showPopup)

// Popup events
closerPopupAddCard.addEventListener('click', hidePopup)
submitPopupAddCard.addEventListener('click', addCard)