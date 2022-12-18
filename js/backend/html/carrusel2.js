import { getProductsIndex } from "../firebase.js";

document.addEventListener('DOMContentLoaded', async () => {
    let html = '';
    const carrusel = 1;
    const container = document.getElementById('carr2');
    const querySnapshot = await getProductsIndex(carrusel);
    querySnapshot.forEach(doc => {
        const product = doc.data();
        html += `
        <div class="carousel-item active" data-bs-interval="2000" data-bs-toggle="modal" data-bs-target="#productModal" data-bs-whatever="${doc.ref.id}">
            <img src="${product.url}" class="d-block w-100">
            <div class="carousel-caption d-none d-md-block">
                <h5 style="color: black; font-size: 20px; margin-bottom: -80px;">${product.nombre}</h5>
            </div>
        </div>`
        container.innerHTML = html
    });
});