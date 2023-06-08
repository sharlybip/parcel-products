const e=document.getElementById("app"),s=document.getElementById("mas");console.log("uyyy");const t=async s=>{let t=`https://api.escuelajs.co/api/v1/products?offset=${s}&limit=10`,a=await fetch(t),i=await a.json();console.log(i);let l=i?.map(e=>`
            <article class="Card">
                <div class="img-container">
                    <img class="img" src="${e.images[0]}">
                    <img class="img" src="${e.images[1]}">
                    <img class="img" src="${e.images[2]}">
                </div>
                <small>$ ${e.price}  <span>${Math.floor(10*Math.random())}% Emvio gratis</span></small>
                <h2>
                    ${e.title}
                </h2>
                <p class="visible">${e.description}</p>
            </article>
        `).join(""),c=document.createElement("section");return c.className="Items",c.innerHTML=await l,document.getElementsByClassName("Card"),e.appendChild(c),s};t(0),s.addEventListener("click",()=>{let e=document.querySelectorAll("article"),s=e.length;t(s)});
//# sourceMappingURL=index.cc97f4b7.js.map
