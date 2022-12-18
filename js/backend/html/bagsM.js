import { getProductCategoria } from "../firebase.js";

document.addEventListener('DOMContentLoaded', async () => {
    let html = '';
    const genero = false;
    const container = document.getElementById('bagsM');
    const querySnapshot = await getProductCategoria(1, genero); 
    querySnapshot.forEach(doc => {
        const product = doc.data();
        html += `
        <div class="col">
            <div class="card" data-bs-toggle="modal" data-bs-target="#productModal" data-bs-whatever="${doc.ref.id}">
                <img src="${product.url}" class="card-img-top" alt="..." width="100%">
                <div class="card-body" style="height: 8rem;">
                    <h5 class="card-title">${product.nombre}</h5>
                    <p class="card-text">Mex${product.precio}</p>
                </div>
            </div>
        </div>`
        container.innerHTML = html
    });
});