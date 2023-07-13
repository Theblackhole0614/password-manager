const items = document.getElementById('items')
const addItem = document.getElementById('add-item')
const closePopup = document.getElementById('close-popup')
const backgroundPopup = document.getElementById('background-popup')
const popup = document.getElementById('popup')
const addCard = document.getElementById('popup-button')
const title = document.getElementById('title')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')

// Cancel submit  
const addCardForm = document.getElementById('popup-addcard-form')

addCardForm.addEventListener('submit', event => {
	event.preventDefault()
})

backgroundPopup.style.display = 'none'
popup.style.display = 'none'

function addAnItem() {
	showPopup()
}

function addACard() {
	hidePopup()
	const cardTitle = document.createElement('h2')
	cardTitle.textContent = title.value
	title.value = ''
	const cardUsername = document.createElement('p')
	cardUsername.textContent = `Username : ${username.value}`
	username.value = ''
	const cardEmail = document.createElement('p')
	cardEmail.textContent = `Email : ${email.value}`
	email.value = ''
	const cardPassword = document.createElement('p')
	cardPassword.textContent = `Password : ${password.value}`
	password.value = ''
	const cardLi = document.createElement('li')
	cardLi.appendChild(cardTitle)
	cardLi.appendChild(cardUsername)
	cardLi.appendChild(cardEmail)
	cardLi.appendChild(cardPassword)
	items.appendChild(cardLi)
}

function showPopup() {
	backgroundPopup.style.display = 'flex'
	popup.style.display = 'flex'
}

function hidePopup() {
	backgroundPopup.style.display = 'none'
	popup.style.display = 'none'
}

addItem.addEventListener('click', event => {
	addAnItem()
})

closePopup.addEventListener('click', event => {
	hidePopup()
})

addCard.addEventListener('click', event => {
	addACard()
})