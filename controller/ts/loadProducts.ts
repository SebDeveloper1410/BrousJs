interface productInterface {
  id: number,
  title: string,
  description: string,
  image: string,
  price: number,
}

const getProducts = async () => {
  const products = await fetch('https://fakestoreapi.com/products');
  const productsArr: productInterface[] = await products.json();
  return productsArr;
}

const displayProducts = async () => {
  const root = document.querySelector("#root");
  const products = await getProducts()
  for (let product of products) {
    // create elements
    let cardDiv = document.createElement('div')
    let cardImg = document.createElement('img')
    let cardBody = document.createElement('div')
    let cardTitle = document.createElement('h5')
    let cardText = document.createElement('p')
    let cardButton = document.createElement('a')
    // add bootstrap styles
    cardDiv.classList.add("card")
    cardDiv.style.width = "20%"
    cardDiv.style.margin = "0.4rem"
    cardImg.classList.add("card-img-top")
    cardBody.classList.add("card-body")
    cardTitle.classList.add("card-title")
    cardText.classList.add("ard-text")
    cardButton.classList.add("btn")
    cardButton.classList.add("btn-primary")
    // add content from product
    cardDiv.id = String(product.id)
    cardImg.src = product.image
    cardImg.alt = product.title
    cardTitle.innerText = product.title
    cardText.innerText = product.description
    cardButton.innerText = `Buy $${product.price}`
    //append elements
    cardBody.append(cardTitle)
    cardBody.append(cardText)
    cardBody.append(cardButton)
    cardDiv.append(cardImg)
    cardDiv.append(cardBody)
    root?.append(cardDiv)
  }
}

displayProducts()