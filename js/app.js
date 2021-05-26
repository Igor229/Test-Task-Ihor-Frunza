

// write all Elements
function addElements() {

	for (key in productsArr) {
		//Create DOM elements and set attribute for div
 		const prd = document.createElement('div')
 		prd.setAttribute('class', 'grid-box')
 		prd.setAttribute('class', 'products-box')

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
		const priceText = document.createTextNode(productsArr[key].price + 'грн')

		//Create DOM element and set attribute for div
		const prdQty = document.createElement('div')
		prdQty.setAttribute('class', 'qty')

		const qtyInput = document.createElement('input')
		qtyInput.setAttribute('class', 'qty__item')
		qtyInput.setAttribute('type', 'number')

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

		prd.appendChild(prdBox)
		prdBox.appendChild(prdTitle)
		prdBox.appendChild(prdBoxImg)
		prdBox.appendChild(prdBoxPrice)

		//generating document
		document.querySelector('.products-box').appendChild(prd)


	}
}

addElements()