const s=document.getElementById("app");console.log("uyyy");const a=async()=>{let a=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),e=await a.json(),i=e?.map(s=>`
            <article class="Card">
                <div class="img-container">
                    <img class="img" src="${s.images[0]}">
                    <img class="img" src="${s.images[1]}">
                    <img class="img" src="${s.images[2]}">
                
                </div>
                <small>$ ${s.price}</small>
                <h2>
                    ${s.title}
                </h2>
            </article>
        `).join(""),c=document.createElement("section");c.className="Items",c.innerHTML=await i,s.appendChild(c)};a();
//# sourceMappingURL=index.ab7d0465.js.map
