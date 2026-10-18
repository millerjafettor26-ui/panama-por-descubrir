const destinations = [
 {name:"Archipiélago de Bocas del Toro",region:"Bocas del Toro",category:"Playa",tag:"Paraíso caribeño",image:"https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=85",description:"Islas tropicales, aguas claras y un ambiente caribeño perfecto para explorar con calma.",meta:"Caribe panameño",duration:"2–4 días"},
 {name:"Casco Antiguo",region:"Panamá",category:"Cultura",tag:"Historia viva",image:"https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1000&q=85",description:"Calles históricas, plazas, arquitectura, cafés y rincones llenos de personalidad.",meta:"Ciudad de Panamá",duration:"Medio día"},
 {name:"Boquete",region:"Chiriquí",category:"Naturaleza",tag:"Montaña y café",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",description:"Clima fresco, fincas de café, senderos y vistas de las tierras altas chiricanas.",meta:"Tierras altas",duration:"2–3 días"},
 {name:"Guna Yala",region:"Guna Yala",category:"Playa",tag:"Islas inolvidables",image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",description:"Un territorio de islas y cultura Guna. Organiza la visita respetando las normas locales.",meta:"Caribe",duration:"1–3 días"},
 {name:"Valle de Antón",region:"Coclé",category:"Aventura",tag:"Naturaleza activa",image:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",description:"Un pueblo de montaña rodeado de naturaleza, caminatas, miradores y mercados.",meta:"Provincia de Coclé",duration:"1–2 días"},
 {name:"Santa Catalina",region:"Veraguas",category:"Aventura",tag:"Mar y aventura",image:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=85",description:"Un destino costero conocido por el surf y como punto de partida hacia Coiba.",meta:"Costa del Pacífico",duration:"2–3 días"},
 {name:"Canal de Panamá",region:"Panamá",category:"Cultura",tag:"Ingeniería mundial",image:"https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1000&q=85",description:"Conoce una de las obras de ingeniería más emblemáticas y su importancia global.",meta:"Ciudad de Panamá",duration:"2–4 horas"},
 {name:"Parque Nacional Coiba",region:"Veraguas",category:"Naturaleza",tag:"Biodiversidad",image:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",description:"Un área natural extraordinaria para conocer ecosistemas marinos con operadores autorizados.",meta:"Pacífico panameño",duration:"Excursión de día"},
 {name:"Pedasí y Playa Venao",region:"Los Santos",category:"Playa",tag:"Escapada costera",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",description:"Playas, pequeños pueblos y actividades al aire libre en la península de Azuero.",meta:"Península de Azuero",duration:"2–3 días"}
];
const posts = [
 {category:"GUÍA PRÁCTICA",title:"Cómo planificar tu primera aventura por Panamá",excerpt:"Clima, transporte, tiempos y consejos útiles para diseñar una ruta que se adapte a tu viaje.",image:"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=85",read:"5 min de lectura",body:"Empieza definiendo cuántos días tienes y qué tipo de experiencia buscas. Panamá reúne ciudad, playas, montañas y comunidades con culturas propias, pero los traslados entre regiones pueden tomar tiempo. Agrupa destinos cercanos, confirma el estado de las carreteras y consulta horarios actualizados. Reserva actividades con proveedores confiables y lleva efectivo cuando sea necesario. Antes de visitar territorios indígenas o áreas protegidas, revisa las reglas locales y las condiciones de acceso."},
 {category:"CULTURA Y SABORES",title:"Sabores panameños que vale la pena conocer",excerpt:"Una invitación a descubrir la diversidad culinaria del país, desde mercados hasta cocinas regionales.",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",read:"4 min de lectura",body:"La gastronomía panameña refleja una mezcla de tradiciones regionales y culturales. Prueba platos conocidos como el sancocho, las carimañolas, el arroz con pollo y los patacones, y pregunta por especialidades de cada región. Los mercados y pequeños negocios locales pueden ser una forma excelente de acercarte a los sabores del lugar. Consulta ingredientes y alérgenos con el establecimiento si tienes restricciones alimentarias."},
 {category:"NATURALEZA",title:"Viajar de forma responsable también es descubrir",excerpt:"Pequeños hábitos para disfrutar los paisajes y apoyar a las comunidades que los protegen.",image:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",read:"3 min de lectura",body:"Respeta los senderos, evita dejar residuos, no alimentes a la fauna silvestre y sigue las indicaciones de guías y autoridades. En comunidades locales, pide permiso antes de fotografiar a personas y respeta sus normas culturales. Elegir operadores responsables y comprar productos locales puede ayudar a que los beneficios del turismo lleguen a las comunidades anfitrionas."}
];
const grid = document.getElementById("destinationGrid");
const search = document.getElementById("destinationSearch");
const regionFilter = document.getElementById("regionFilter");
let activeCategory = "all";

function renderDestinations(){
 const term = search.value.trim().toLocaleLowerCase("es");
 const region = regionFilter.value;
 const filtered = destinations.filter(d => (activeCategory==="all" || d.category===activeCategory) && (region==="all" || d.region===region) && (d.name+" "+d.region+" "+d.category+" "+d.description).toLocaleLowerCase("es").includes(term));
 grid.innerHTML = filtered.map(d => `<article class="destination-card"><div class="destination-image"><img src="${d.image}" alt="${d.name}" loading="lazy"><span class="tag">${d.tag}</span></div><div class="destination-body"><div class="destination-meta"><span>⌖ ${d.region}</span><span>${d.duration}</span></div><h3>${d.name}</h3><p>${d.description}</p><a class="text-link" href="#contacto" data-destination="${d.name}">Planificar visita ↗</a></div></article>`).join("");
 document.getElementById("emptyDestinations").hidden = filtered.length !== 0;
}
renderDestinations();
search.addEventListener("input",renderDestinations);
regionFilter.addEventListener("change",renderDestinations);
document.getElementById("categoryFilters").addEventListener("click",e=>{
 const btn=e.target.closest("button[data-category]"); if(!btn)return;
 activeCategory=btn.dataset.category;
 document.querySelectorAll(".pill").forEach(p=>p.classList.toggle("active",p===btn));
 renderDestinations();
});

document.getElementById("blogGrid").innerHTML = posts.map((p,i)=>`<article class="blog-card"><img src="${p.image}" alt="" loading="lazy"><span class="blog-category">${p.category} · ${p.read}</span><h3>${p.title}</h3><p>${p.excerpt}</p><button type="button" data-post="${i}">Leer artículo completo ↗</button></article>`).join("");
document.getElementById("blogGrid").addEventListener("click",e=>{
 const btn=e.target.closest("[data-post]");if(!btn)return;
 const post=posts[Number(btn.dataset.post)];
 const dialog=document.createElement("dialog");dialog.className="article-dialog";
 dialog.innerHTML=`<button class="dialog-close" aria-label="Cerrar">×</button><span class="eyebrow">${post.category}</span><h2>${post.title}</h2><p class="article-body">${post.body}</p><small>${post.read} · Panamá por Descubrir</small>`;
 document.body.appendChild(dialog);dialog.showModal();dialog.querySelector("button").addEventListener("click",()=>dialog.close());dialog.addEventListener("close",()=>dialog.remove());
});

const commentKey="ppd-comments-v1";
const initialComments=[
 {name:"María",place:"Casco Antiguo",rating:5,text:"Me encantó caminar por sus calles y descubrir pequeños cafés. Recomiendo ir con tiempo para explorar."},
 {name:"Andrés",place:"Boquete",rating:5,text:"El paisaje de montaña es precioso. Llevaría ropa ligera para el día y algo abrigado para la tarde."}
];
function loadComments(){try{return JSON.parse(localStorage.getItem(commentKey)) ?? initialComments}catch{return initialComments}}
function renderComments(){
 const comments=loadComments();const list=document.getElementById("commentList");
 document.getElementById("commentCount").textContent=`${comments.length} ${comments.length===1?"comentario":"comentarios"}`;
 if(!comments.length){list.innerHTML='<div class="no-comments">Todavía no hay comentarios. ¡Sé la primera persona en compartir una experiencia!</div>';return}
 list.innerHTML=comments.slice().reverse().map(c=>`<article class="comment-item"><div class="comment-top"><strong>${escapeHTML(c.name)}</strong><span class="comment-stars" aria-label="${c.rating} de 5 estrellas">${"★".repeat(c.rating)}${"☆".repeat(5-c.rating)}</span></div><div class="comment-place">⌖ ${escapeHTML(c.place)}</div><p>${escapeHTML(c.text)}</p></article>`).join("");
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]))}
document.getElementById("commentForm").addEventListener("submit",e=>{
 e.preventDefault();const data=new FormData(e.currentTarget);
 const comment={name:String(data.get("name")).trim(),place:String(data.get("place")).trim(),rating:Number(data.get("rating")),text:String(data.get("text")).trim()};
 if(!comment.name||!comment.place||!comment.text)return;
 try{const comments=loadComments();comments.push(comment);localStorage.setItem(commentKey,JSON.stringify(comments));renderComments();e.currentTarget.reset();document.getElementById("commentStatus").textContent="¡Gracias! Tu comentario se guardó en este navegador."}
 catch{document.getElementById("commentStatus").textContent="No se pudo guardar el comentario en este navegador."}
});
renderComments();

document.querySelectorAll("[data-service]").forEach(a=>a.addEventListener("click",()=>{const sel=document.getElementById("contactInterest");const match=[...sel.options].find(o=>o.textContent===a.dataset.service);if(match)sel.value=match.value;}));
document.addEventListener("click",e=>{const a=e.target.closest("[data-destination]");if(a){document.getElementById("contactMessage").value=`Me interesa organizar una visita a ${a.dataset.destination}. ¿Podrían orientarme sobre opciones, duración y presupuesto?`;document.getElementById("contactInterest").value="Quiero organizar un viaje";}});
document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=document.getElementById("contactName").value.trim(),email=document.getElementById("contactEmail").value.trim(),interest=document.getElementById("contactInterest").value,message=document.getElementById("contactMessage").value.trim();
 // Cambia este correo por el correo real del proyecto antes de publicar.
 const recipient="TU_CORREO@EJEMPLO.COM";
 if(recipient==="TU_CORREO@EJEMPLO.COM"){document.getElementById("contactStatus").textContent="Antes de usar este formulario, abre script.js y reemplaza TU_CORREO@EJEMPLO.COM por tu correo real.";return}
 const subject=encodeURIComponent(`Consulta web: ${interest}`);
 const body=encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nInterés: ${interest}\n\nMensaje:\n${message}`);
 window.location.href=`mailto:${recipient}?subject=${subject}&body=${body}`;
 document.getElementById("contactStatus").textContent="Se está preparando un correo en tu aplicación de email.";
});
document.getElementById("year").textContent=new Date().getFullYear();
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰"}));
