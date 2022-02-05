

// write all Elements
document.addEventListener("DOMContentLoaded",  () => {
	renderItems(productsArr)
	getCategory()
	getPrice()
	openPopup()
})


function renderItems(productsArr){
	const productsContainer = document.getElementById('products')
	const secondContainer = document.createElement('div')
	secondContainer.setAttribute('class', 'products-box grid-box')
	secondContainer.setAttribute('id', 'products')

	for (key in productsArr) {
	 	//Create DOM elements and set attribute for div
		const prdBox = document.createElement('div')
		prdBox.setAttribute('class', 'product-box__item')
		prdBox.setAttribute('id', productsArr[key].id)
		prdBox.setAttribute('category', productsArr[key].category)
	 		
		//Create title element and set attribute
		const prdTitle = document.createElement('h3')
		prdTitle.setAttribute('class', 'product-box__title')

		//add text for title
		const prdTitleText = document.createTextNode(productsArr[key].name)

		//Create DOM element and set attribute for div
		const prdBoxImg = document.createElement('div')
		prdBoxImg.setAttribute('class', 'product-box__img')

		//Create image element and set attributes
		const prdImg = document.createElement('img')
		prdImg.setAttribute('src', productsArr[key].imageURL)
		prdImg.setAttribute('class', 'img-fluid')

		//Create price element and set attribute for div
		const prdBoxPrice = document.createElement('div')
		prdBoxPrice.setAttribute('class', 'product-box__meta')

		//Create price elements, set attribute for p tag and add price
		const price = document.createElement('p')
		const priceText = document.createTextNode(productsArr[key].price + 'грн')

		//Create DOM element and set attribute for div
		const prdQty = document.createElement('div')
		prdQty.setAttribute('class', 'qty')
		const inputText = document.createTextNode('Кол')

		const qtyInput = document.createElement('input')
		qtyInput.setAttribute('class', 'qty__item')
		qtyInput.setAttribute('type', 'number')
		qtyInput.setAttribute('value', '0')


		const prdBtn = document.createElement('button')
		prdBtn.setAttribute('class', 'product-box__btn')
		prdBtn.addEventListener('click', addToCart)
		const btnText = document.createTextNode('Добавить')

		//Append elements
		prdBtn.appendChild(btnText)
		prdQty.appendChild(qtyInput)
		prdQty.appendChild(inputText)
		price.appendChild(priceText)

		prdBoxPrice.appendChild(price)
		prdBoxPrice.appendChild(qtyInput)
		prdBoxPrice.appendChild(prdQty)
		prdBoxPrice.appendChild(prdBtn)

		prdBoxImg.appendChild(prdImg)
		prdTitle.appendChild(prdTitleText)

		prdBox.appendChild(prdTitle)
		prdBox.appendChild(prdBoxImg)
		prdBox.appendChild(prdBoxPrice)
		secondContainer.appendChild(prdBox)
	}
	productsContainer.replaceWith(secondContainer)
}

function getCategory(event){
	const getCategory = document.getElementById('category-filter')
	let categoryArr = []

	getCategory.addEventListener('change', (event) => {
		document.querySelectorAll('.product-box__item').forEach(e => e.remove())

		categoryArr = productsArr.filter(element => {
			return element.category == event.target.value
		})
		if (event.target.value === "0"){
			renderItems(productsArr)
		}else{
			renderItems(categoryArr)
		}
	})
}

function getPrice(event){
	const getPrice = document.getElementById('price-filter')
	let priceArr = []

	getPrice.addEventListener('change', (event) => {
		document.querySelectorAll('.product-box__item').forEach(e => e.remove())

		priceArr = productsArr.filter(element => {
			return element.price <= event.target.value
		})
		if (event.target.value === "0"){
			renderItems(productsArr)
		}else{
			renderItems(priceArr)
		}
	})
}





// ============ Add the value to the cart and get the product ID ===========
function addToCart(event) {
	const button = event.target
	const productId = parseInt(button.closest('.product-box__item').id)
	const numOfItems = parseInt(button.closest('.product-box__meta').childNodes[1].value)
	const obj = {productsNum: numOfItems, id: productId}
	const item = cart.find(e => e.id === obj.id)

	if (item){
		item.productsNum = item.productsNum + obj.productsNum
	} else {
		cart.push(obj)
	}
// ============ Get the total values of the Cart ==================

	const totalValue = cart.reduce((acum, elem) => {
	const product = productsArr.find(e => e.id === elem.id)

	if (!product){
		return acum
	}
		return {
			totalNum: acum.totalNum + elem.productsNum,
			totalPrice: (product.price * elem.productsNum) + acum.totalPrice
		}
	},{totalNum: 0, totalPrice: 0})
		
	document.getElementById('numOfItems').innerHTML = totalValue.totalNum
	document.getElementById('totalPrice').innerHTML = totalValue.totalPrice
}



function openPopup(event){
	const popupLink = document.querySelector('.popup-link')
	const popup = document.querySelector('.popup')
	const btnCheck = document.getElementById('btn-confirm')
	const userName = document.getElementById('userName')
	const userEmail = document.getElementById('userEmail')

	popupLink.addEventListener('click', () => {
		popup.classList.add('open')
	})

	btnCheck.addEventListener('click', () => {
		if (!userName.value){
			userName.style.border = '2px solid red'
			alert("Введіть ваше ім'я")
			return false
		}

		if (!userEmail.value){
			userEmail.style.border = '2px solid red'
			alert('Введіть ваш Email')
			return false
		}
		alert('Дякуємо за ваше замовлення')
		popup.classList.remove('open')
	})
}

