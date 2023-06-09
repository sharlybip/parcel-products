const e=document.getElementById("app");document.getElementById("mas"),document.getElementsByClassName("img-container");const t=async t=>{let a=`https://api.escuelajs.co/api/v1/products?offset=${t}&limit=10`,n=await fetch(a),s=await n.json();console.log(s);let l=document.createElement("p");if(l.className="noMore",l.textContent="No hay mas productos que mostrar...",0===s.length){if(document.querySelector(".noMore"))return;document.body.append(l)}else{let t=s?.map(e=>{let t=e.images.map(e=>`<img class="img" src="${e}">`).join();return`
            <article class="Card">
            <div class="img-container">
            ${t}
            </div>
            <small>$ ${e.price}  <span>${Math.floor(10*Math.random())}% Emvio gratis</span></small>
            <h2>
            ${e.title}
            </h2>
            <p class="visible">${e.description}</p>
            </article>
            `}).join(""),a=document.createElement("section");a.className="Items",a.innerHTML=await t,a.addEventListener("click",e=>{}),e.appendChild(a)}};t(0),t(10),document.onscrollend=e=>{let a=document.querySelectorAll("article"),n=a.length;t(n)};
//# sourceMappingURL=index.b30ef91d.js.map
