const e=document.getElementById("img-otra"),t=document.getElementById("post"),o=document.getElementById("btn");let n=document.getElementById("title"),a=document.getElementById("price"),r=document.getElementById("description"),s=document.getElementById("category");const l=e=>{let t;let o=document.createElement("figure"),n=document.createElement("img");return console.log(t=e?`${e}`:`https://picsum.photos/640/640?r=${Math.floor(1e4*Math.random())}`),n.src=t,o.append(n),o};e.append(l(),l(),l()),o.addEventListener("click",()=>{e.append(l()),o.innerText="⇣",o.classList.toggle("btn-click"),setTimeout(()=>{o.innerText="+",o.classList.remove("btn-click")},2e3)});const c={title:`${n.value}`,price:`${Number(a.value)}`,description:`${r.value}`,categoryId:`${Number(s.value)}`,images:[`https://picsum.photos/1080/768?r=${Math.floor(1e4*Math.random())}`,`https://picsum.photos/1080/768?r=${Math.floor(1e4*Math.random())}`,`https://picsum.photos/1080/768?r=${Math.floor(1e4*Math.random())}`]},i=(e,t)=>{console.log([n.innerText,a.innerText,r.innerText,s.innerText]);let o=fetch(e,{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:`${n.value}`,price:`${Number(a.value)}`,description:`${r.value}`,categoryId:`${Number(s.value)}`,images:[`https://picsum.photos/1080/768?r=${Math.floor(1e4*Math.random())}`,`https://picsum.photos/1080/768?r=${Math.floor(1e4*Math.random())}`,`https://picsum.photos/1080/768?r=${Math.floor(1e4*Math.random())}`]})});return o};t.addEventListener("click",t=>{t.preventDefault(),""===n.value||""===a.value||""===r.value||""===s.value?window.alert("llena todos los campos"):i("https://api.escuelajs.co/api/v1/products/",c).then(e=>e.json()).then(t=>{console.log(t),e.append(l(t.images[0]))})});
//# sourceMappingURL=otra.a716af3f.js.map
