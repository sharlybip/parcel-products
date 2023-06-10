const append = document.getElementById("img-otra");
const post = document.getElementById("post");
const btn = document.getElementById("btn");
let title = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");
let categoryId = document.getElementById("category");
const generateImage = ()=>{
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const source = `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 10000)}`;
    img.src = source;
    figure.append(img);
    return figure;
};
append.append(generateImage(), generateImage(), generateImage());
btn.addEventListener("click", ()=>{
    append.append(generateImage());
});
const data = {
    "title": `${title.value}`,
    "price": `${Number(price.value)}`,
    "description": `${description.value}`,
    "categoryId": `${Number(categoryId.value)}`,
    "images": [
        `https://picsum.photos/1080/768?r=${Math.floor(Math.random() * 10000)}`,
        `https://picsum.photos/1080/768?r=${Math.floor(Math.random() * 10000)}`,
        `https://picsum.photos/1080/768?r=${Math.floor(Math.random() * 10000)}`
    ]
};
const API = "https://api.escuelajs.co/api/v1/products/";
const postear = (url, data)=>{
    console.log([
        title.innerText,
        price.innerText,
        description.innerText,
        categoryId.innerText
    ]);
    const response = fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": `${title.value}`,
            "price": `${Number(price.value)}`,
            "description": `${description.value}`,
            "categoryId": `${Number(categoryId.value)}`,
            "images": [
                `https://picsum.photos/1080/768?r=${Math.floor(Math.random() * 10000)}`,
                `https://picsum.photos/1080/768?r=${Math.floor(Math.random() * 10000)}`,
                `https://picsum.photos/1080/768?r=${Math.floor(Math.random() * 10000)}`
            ]
        })
    });
    return response // parses JSON response into native JavaScript objects
    ;
};
post.addEventListener("click", (event)=>{
    event.preventDefault();
    if (title.value === "" || price.value === "" || description.value === "" || categoryId.value === "") window.alert("llena todos los campos");
    else postear(API, data).then((response)=>response.json()).then((data)=>{
        console.log(data);
    });
});

//# sourceMappingURL=otra.74ea3be3.js.map
