const app = document.getElementById("app");
const baseUrl = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";
console.log("uyyy");
const main = async ()=>{
    const response = await fetch(baseUrl);
    const products = await response.json();
    const output = products?.map((product)=>{
        return `
            <article class="Card">
                <div class="img-container">
                    <img class="img" src="${product.images[0]}">
                    <img class="img" src="${product.images[1]}">
                    <img class="img" src="${product.images[2]}">
                
                </div>
                <small>$ ${product.price}</small>
                <h2>
                    ${product.title}
                </h2>
            </article>
        `;
    }).join("");
    let newItem = document.createElement("section");
    newItem.className = "Items";
    newItem.innerHTML = await output;
    app.appendChild(newItem);
};
main();

//# sourceMappingURL=index.579125c3.js.map
