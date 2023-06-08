const app = document.getElementById("app");
const btn_mas = document.getElementById("mas");
console.log("uyyy");
const main = async (page)=>{
    const baseUrl = `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`;
    const response = await fetch(baseUrl);
    const products = await response.json();
    console.log(products);
    const output = products?.map((product)=>{
        return `
            <article class="Card">
                <div class="img-container">
                    <img class="img" src="${product.images[0]}">
                    <img class="img" src="${product.images[1]}">
                    <img class="img" src="${product.images[2]}">
                </div>
                <small>$ ${product.price}  <span>${Math.floor(Math.random() * 10)}% Emvio gratis</span></small>
                <h2>
                    ${product.title}
                </h2>
                <p class="visible">${product.description}</p>
            </article>
        `;
    }).join("");
    let newItem = document.createElement("section");
    newItem.className = "Items";
    newItem.innerHTML = await output;
    const card = document.getElementsByClassName("Card");
    app.appendChild(newItem);
    return page;
};
main(0);
btn_mas.addEventListener("click", ()=>{
    const page = document.querySelectorAll("article");
    const total = page.length;
    main(total);
});

//# sourceMappingURL=index.579125c3.js.map
