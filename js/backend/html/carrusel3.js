import { getProductsIndex } from "../firebase.js";

document.addEventListener('DOMContentLoaded', async () => {
    let html = '';
    const carrusel = 2;
    const container = document.getElementById('carr3');
    const querySnapshot = await getProductsIndex(carrusel);
    querySnapshot.forEach(doc => {
        const product = doc.data();
        html += `
        <div class="col-sm-4 splide__slide m-2" data-bs-toggle="modal" data-bs-target="#productModal" data-bs-whatever="${doc.ref.id}">
            <div class="card">
                <div class="containerFor">
                    <img src="${product.url}" class="card-img-top"/>
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center" style="font-size: 20px;">${product.nombre}</h5>
                    <p class="card-text text-center">Mex${product.precio}</p>
                </div>
            </div>
        </div>`
        container.innerHTML = html
    });
});