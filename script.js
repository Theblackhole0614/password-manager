// Main elements
const cards = document.getElementById('cards')
const buttonAddCard = document.getElementById('button-addcard')

// Popup elements
const backgroundPopupAddCard = document.getElementById('background-popup-addcard')
const popupAddCard = document.getElementById('popup-addcard')
const closerPopupAddCard = document.getElementById('closer-popup-addcard')
const formPopupAddCard = document.forms['card-create']
const submitPopupAddCard = document.getElementById('submit-popup-addcard')

// Cancel submit  
formPopupAddCard.addEventListener('submit', event => {
	event.preventDefault()
	addCard()
})

// Popup visibility
function showPopup() {
	backgroundPopupAddCard.classList.remove("hidden");
}

function hidePopup() {
	backgroundPopupAddCard.classList.add("hidden");
}

// Add card fonctionality
function addCard() {
	hidePopup()
	const formData = new FormData(formPopupAddCard);
	const cardTitle = document.createElement('h2')
	cardTitle.textContent = formData.get('title')
	const cardUsername = document.createElement('p')
	cardUsername.textContent = `Username : ${formData.get('username')}`
	const cardEmail = document.createElement('p')
	cardEmail.textContent = `Email : ${formData.get('email')}`
	const cardPassword = document.createElement('p')
	cardPassword.textContent = `Password : ${formData.get('password')}`
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