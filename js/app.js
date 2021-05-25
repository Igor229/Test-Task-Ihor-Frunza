
// filter arrays by category
const breakfests = productsArr.filter(function(el){return el.category == "breakfast"})
const sideDishes = productsArr.filter(function(el){return el.category == "sideDishes"})
const firstMeal = productsArr.filter(function(el){return el.category == "firstMeal"})

const thirty = productsArr.filter(function(el){return el.price <= 30})
const fifty = productsArr.filter(function(el){return el.price <= 50})
const hundred = productsArr.filter(function(el){return el.price <= 100})
const oneFifty = productsArr.filter(function(el){return el.price <= 150})

// write values to the cart
function getCart() {
	let n = event.target.id
	const val = document.getElementById(n)
	val.addEventListener('change', function(event){
	})

	cart[0].productsNum = val.value
 	cart[0].totalPrice = val.value * productsArr[n].price
 		addCart()
	}

	const categoryFilter = document.getElementById('category-filter')
	categoryFilter.addEventListener('change', function (event){
		if (categoryFilter.value == 0){
			addElements()
		} else if (categoryFilter.value == 1) {
			addBreakfests()
		} else if (categoryFilter.value == 2) {
			addFirstMeal()
		} else if (categoryFilter.value == 3) {
			addDishes()
		}
	})

	const priceFilter = document.getElementById('price-filter')
	priceFilter.addEventListener('change', function(event){
		if (priceFilter.value == 30){
			upToThirty()
		} else if (priceFilter.value == 50){
			upToFifty()
		} else if (priceFilter.value == 100){
			upToHundred()
		} else if (priceFilter.value == 150){
			upToOneFifty()
		} else if (priceFilter.value == 0){
			addElements()
		}
	})

// write all Elements
function addElements() {

	for (key in productsArr) {
		//Create DOM elements and set attribute for div
 		const prd = document.createElement('div')
 		prd.setAttribute('class', 'products-box')
 		prd.setAttribute('class', 'grid-box')

 		//Create DOM elements and set attribute for div
		const prdBox = document.createElement('div')
		prdBox.setAttribute('class', 'product-box__item')

		//Create title element and set attribute
		const prdTitle = document.createElement('h3')
		prdTitle.setAttribute('calss', 'product-box__title')

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
		const priceText = document.createTextNode(productsArr[key].price)

		//Create DOM element and set attribute for div
		const prdQty = document.createElement('div')
		prdQty.setAttribute('class', 'qty')

		const qtyInput = document.createElement('input')
		qtyInput.setAttribute('class', 'qty__item')
		qtyInput.setAttribute('type', 'number')
		qtyInput.setAttribute('id', productsArr[key].inputID)

		const inputText = document.createTextNode('Кол')

		const prdBtn = document.createElement('button')
		prdBtn.setAttribute('class', 'product-box__btn')
		prdBtn.setAttribute('id', productsArr[key].id)
		prdBtn.setAttribute('onclick', 'getCart()')
		prdBtn.setAttribute('category-filter', productsArr[key].category)
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
		prd.appendChild(prdBox)

		//generating document
		document.querySelector('.products-box').appendChild(prd)


	}
}
// writre only Breakfests
function addBreakfests() {

		for (key in breakfests) {

		const prd = document.createElement('div')
 		prd.setAttribute('class', 'products-box')
 		prd.setAttribute('class', 'grid-box')

		const prdBox = document.createElement('div')
		prdBox.setAttribute('class', 'product-box__item')

		const prdTitle = document.createElement('h3')
		prdTitle.setAttribute('calss', 'product-box__title')

		const prdTitleText = document.createTextNode(breakfests[key].name)

		const prdBoxImg = document.createElement('div')
		prdBoxImg.setAttribute('class', 'product-box__img')

		const prdImg = document.createElement('img')
		prdImg.setAttribute('src', breakfests[key].imageURL)
		prdImg.setAttribute('class', 'img-fluid')

		const prdBoxPrice = document.createElement('div')
		prdBoxPrice.setAttribute('class', 'product-box__meta')

		const price = document.createElement('p')
		const priceText = document.createTextNode(breakfests[key].price)

		const prdQty = document.createElement('div')
		prdQty.setAttribute('class', 'qty')

		const qtyInput = document.createElement('input')
		qtyInput.setAttribute('class', 'qty__item')
		qtyInput.setAttribute('type', 'number')
		qtyInput.setAttribute('id', breakfests[key].inputID)

		const inputText = document.createTextNode('Кол')

		const prdBtn = document.createElement('button')
		prdBtn.setAttribute('class', 'product-box__btn')
		prdBtn.setAttribute('id', breakfests[key].id)
		prdBtn.setAttribute('onclick', 'getCart()')
		prdBtn.setAttribute('category-filter', breakfests[key].category)
		const btnText = document.createTextNode('Добавить')


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
		prd.appendChild(prdBox)

		document.querySelector('.products-box').appendChild(prd)



	}
}

// write only Dishes
function addDishes() {

	document.querySelector('.products-box').innerHTML = ``

		for (key in sideDishes) {
	let prd = document.createElement('div')
	prd.innerHTML = `<div class="product-box__item">
                    <h3 class="product-box__title">${sideDishes[key].name}</h3>
                    <div class="product-box__img">
                        <img class="img-fluid" src="${sideDishes[key].imageURL}">
                    </div>
                    <div class="product-box__meta" data-id="prise">
                        <p>${sideDishes[key].price} грн.</p>
                        <div class="qty">
                            <input class="qty__item" type="number" id="${sideDishes[key].inputID}"> Кол
                        </div>
                        <button class="product-box__btn" onclick="getCart()" id="${sideDishes[key].id}" ${sideDishes[key].category}>Добавить</button>

                    </div>
                </div>`

    document.querySelector('.products-box').appendChild(prd)
	}
}

// write only FirstMeal
function addFirstMeal() {

	document.querySelector('.products-box').innerHTML = ``

		for (key in firstMeal) {
	let prd = document.createElement('div')
	prd.innerHTML = `<div class="product-box__item">
                    <h3 class="product-box__title">${firstMeal[key].name}</h3>
                    <div class="product-box__img">
                        <img class="img-fluid" src="${firstMeal[key].imageURL}">
                    </div>
                    <div class="product-box__meta" data-id="prise">
                        <p>${firstMeal[key].price} грн.</p>
                        <div class="qty">
                            <input class="qty__item" type="number" id="${firstMeal[key].inputID}"> Кол
                        </div>
                        <button class="product-box__btn" onclick="getCart()" id="${firstMeal[key].id}" ${firstMeal[key].category}>Добавить</button>

                    </div>
                </div>`

    document.querySelector('.products-box').appendChild(prd)
	}
}

// write category up to thirty
function upToThirty() {

	document.querySelector('.products-box').innerHTML = ``	

		for (key in thirty) {
			let prd = document.createElement('div')
			prd.innerHTML = `<div class="product-box__item">
		                    <h3 class="product-box__title">${thirty[key].name}</h3>
		                    <div class="product-box__img">
		                        <img class="img-fluid" src="${thirty[key].imageURL}">
		                    </div>
		                    <div class="product-box__meta" data-id="prise">
		                        <p>${thirty[key].price} грн.</p>
		                        <div class="qty">
		                            <input class="qty__item" type="number" id="${thirty[key].inputID}"> Кол
		                        </div>
		                        <button class="product-box__btn" onclick="getCart()" id="${thirty[key].id}" ${thirty[key].category}>Добавить</button>

		                    </div>
		                </div>`

		    document.querySelector('.products-box').appendChild(prd)
	}	
}

// write category up to fifty
function upToFifty() {

	document.querySelector('.products-box').innerHTML = ``
	
		for (key in fifty) {
			let prd = document.createElement('div')
			prd.innerHTML = `<div class="product-box__item">
		                    <h3 class="product-box__title">${fifty[key].name}</h3>
		                    <div class="product-box__img">
		                        <img class="img-fluid" src="${fifty[key].imageURL}">
		                    </div>
		                    <div class="product-box__meta" data-id="prise">
		                        <p>${fifty[key].price} грн.</p>
		                        <div class="qty">
		                            <input class="qty__item" type="number" id="${fifty[key].inputID}"> Кол
		                        </div>
		                        <button class="product-box__btn" onclick="getCart()" id="${fifty[key].id}" ${fifty[key].category}>Добавить</button>

		                    </div>
		                </div>`

		    document.querySelector('.products-box').appendChild(prd)
	}	
}

// write category up to hundred
function upToHundred() {
	
	document.querySelector('.products-box').innerHTML = ``

		for (key in hundred) {
			let prd = document.createElement('div')
			prd.innerHTML = `<div class="product-box__item">
		                    <h3 class="product-box__title">${hundred[key].name}</h3>
		                    <div class="product-box__img">
		                        <img class="img-fluid" src="${hundred[key].imageURL}">
		                    </div>
		                    <div class="product-box__meta" data-id="prise">
		                        <p>${hundred[key].price} грн.</p>
		                        <div class="qty">
		                            <input class="qty__item" type="number" id="${hundred[key].inputID}"> Кол
		                        </div>
		                        <button class="product-box__btn" onclick="getCart()" id="${hundred[key].id}" ${hundred[key].category}>Добавить</button>

		                    </div>
		                </div>`

		    document.querySelector('.products-box').appendChild(prd)
	}	
}

// write category up to one hundred fifty
function upToOneFifty() {

	document.querySelector('.products-box').innerHTML = ``
	
		for (key in oneFifty) {
			let prd = document.createElement('div')
			prd.innerHTML = `<div class="product-box__item">
		                    <h3 class="product-box__title">${oneFifty[key].name}</h3>
		                    <div class="product-box__img">
		                        <img class="img-fluid" src="${oneFifty[key].imageURL}">
		                    </div>
		                    <div class="product-box__meta" data-id="prise">
		                        <p>${oneFifty[key].price} грн.</p>
		                        <div class="qty">
		                            <input class="qty__item" type="number" id="${oneFifty[key].inputID}"> Кол
		                        </div>
		                        <button class="product-box__btn" onclick="getCart()" id="${oneFifty[key].id}" ${oneFifty[key].category}>Добавить</button>

		                    </div>
		                </div>`

		    document.querySelector('.products-box').appendChild(prd)
	}	
}

// write cart
function addCart() {

	document.querySelector('.top-cart-info__item').innerHTML = ``

	for (key in cart) {
		let crd = document.createElement('div')
		crd.innerHTML = `<span class="top-cart-info__item">
	                     Товаров в корзине - <span class="red-info">${cart[0].productsNum}</span>,
	                      на сумму <span class="red-info">${cart[0].totalPrice}</span> грн</span>`

	    document.querySelector('.top-cart-info__item').appendChild(crd)
	}
}

addElements()