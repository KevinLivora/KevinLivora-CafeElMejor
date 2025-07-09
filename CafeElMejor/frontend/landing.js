const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grande
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICKMore actions
        punto[i].classList.add('activo')

    })
})

async function loadLandingProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();
  const container = document.getElementById('landing-products');
  container.innerHTML = '';
  products.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.url || 'assets/product-default.jpg'}" alt="Producto">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
      </div>
    `;
  });
}
window.addEventListener('DOMContentLoaded', () => {
  loadLandingProducts();
  const contact = document.getElementById('contact-form');
  if (contact) {
    contact.addEventListener('submit', e => {
      e.preventDefault();
      alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
      contact.reset();
    });
  }
});
