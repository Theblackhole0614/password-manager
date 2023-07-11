const items = document.getElementById('items')
const addItem = document.getElementById('add-item')

function addAnItem() {
	items.appendChild(document.createElement('li'))
}

addItem.addEventListener('click', event => {
	addAnItem()
})