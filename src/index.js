

const app = document.getElementById('app');
const btn_mas = document.getElementById('mas');
const imgContainer = document.getElementsByClassName('img-container');


const main = async(page) => {
    const baseUrl = `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`;
    const response =  await fetch(baseUrl);
    const products = await response.json();
    console.log(products);
    const noMore = document.createElement('p')
    noMore.className = 'noMore';
    noMore.textContent = "No hay mas productos que mostrar..."
    if (products.length === 0){
        if (!document.querySelector('.noMore')) {
            document.body.append(noMore)
        } else {
            return
        }
    } else {
        const output =  products?.map(product => {
        
            const images = product.images.map(img=>{
                return `<img class="img" src="${img}">`;
            }).join(); 
            return `
            <article class="Card">
            <div class="img-container">
            ${images}
            </div>
            <small>$ ${product.price}  <span>${Math.floor(Math.random()*10)}% Envio gratis</span></small>
            <h2>
            ${product.title}
            </h2>
            <p class="visible">${product.description}</p>
            </article>
            `;
        }).join('');
        

    let newItem = document.createElement('section');
    newItem.className = "Items";
    newItem.innerHTML = await output;
    newItem.addEventListener('click', (event) =>{
        
    })
    app.appendChild(newItem);
}
}

main(0);
main(10);

document.onscrollend = (event) => {
    const page = document.querySelectorAll('article');
    const total = page.length;
    main(total)
  };
  
