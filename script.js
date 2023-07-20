// Main elements
const cards = document.getElementById('cards')
const buttonAddCard = document.getElementById('button-addcard')

// Popup elements
const popupBlur = document.getElementById('popup-blur')
const popupCross = document.getElementById('popup-cross')
const popupForm = document.forms['card-create']

// Cancel submit  
popupForm.addEventListener('submit', event => {
	event.preventDefault()
	addCard()
})

// Popup visibility
function showPopup() {
	popupBlur.classList.remove("hidden");
}

function hidePopup() {
	popupBlur.classList.add("hidden");
}

// Add card fonctionality
function addCard() {
	hidePopup()
	const formData = new FormData(popupForm);
	const cardTitle = document.createElement('h2')
	cardTitle.textContent = formData.get('title')
	const cardUsername = document.createElement('p')
	cardUsername.textContent = `Username : ${formData.get('username')}`
	const cardEmail = document.createElement('p')
	cardEmail.textContent = `Email : ${formData.get('email')}`
	const cardPassword = document.createElement('p')
	cardPassword.textContent = `Password : ${formData.get('password')}`
	popupForm.reset()
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
popupCross.addEventListener('click', hidePopup)