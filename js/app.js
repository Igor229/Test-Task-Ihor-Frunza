
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
	document.querySelector('.products-box').innerHTML = ``

	for (key in productsArr) {
	let prd = document.createElement('div')
	prd.innerHTML = `<div class="product-box__item">
                    <h3 class="product-box__title">${productsArr[key].name}</h3>
                    <div class="product-box__img">
                        <img class="img-fluid" src="${productsArr[key].imageURL}">
                    </div>
                    <div class="product-box__meta" data-id="prise">
                        <p>${productsArr[key].price} грн.</p>
                        <div class="qty">
                            <input class="qty__item" type="number" id="${productsArr[key].inputID}"> Кол
                        </div>
                        <button class="product-box__btn" onclick="getCart()"" id="${productsArr[key].id}" ${productsArr[key].category}>Добавить</button>

                    </div>
                </div>`

    document.querySelector('.products-box').appendChild(prd)
	}
}
// writre only Breakfests
function addBreakfests() {

	document.querySelector('.products-box').innerHTML = ``

		for (key in breakfests) {
	let prd = document.createElement('div')
	prd.innerHTML = `<div class="product-box__item">
                    <h3 class="product-box__title">${breakfests[key].name}</h3>
                    <div class="product-box__img">
                        <img class="img-fluid" src="${breakfests[key].imageURL}">
                    </div>
                    <div class="product-box__meta" data-id="prise">
                        <p>${breakfests[key].price} грн.</p>
                        <div class="qty">
                            <input class="qty__item" type="number" id="${breakfests[key].inputID}"> Кол
                        </div>
                        <button class="product-box__btn" onclick="getCart()" id="${breakfests[key].id}" ${breakfests[key].category}>Добавить</button>

                    </div>
                </div>`

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