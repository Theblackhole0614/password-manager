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

backgroundPopup.style.display = 'none'
popup.style.display = 'none'

function addAnItem() {
	showPopup()
}

function addACard() {
	hidePopup()
	const cardTitle = document.createElement('h2')
	cardTitle.innerHTML = title.value
	const cardUsername = document.createElement('p')
	cardUsername.innerHTML = `Username : ${username.value}`
	const cardEmail = document.createElement('p')
	cardEmail.innerHTML = `Email : ${email.value}`
	const cardPassword = document.createElement('p')
	cardPassword.innerHTML = `Password : ${password.value}`
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