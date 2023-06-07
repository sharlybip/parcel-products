const $app = document.getElementById('app');
const baseUrl = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10';


const main = async() => {
    const response =  await fetch(baseUrl);
    const products = await response.json();

    const output =  products?.map(product => {
        return `
            <article class="Card">
                <img class="" href="${product.images[0]}">
                <h2>
                    ${product.title}<small>Precio $ ${product.price}</small>
                </h2>
            </article>
        `;
    }).join('');

    let newItem = document.createElement('section.Item');
    
    $app.append(newItem);

}
