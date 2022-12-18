import { getFavorites } from "../firebase.js";

document.addEventListener('DOMContentLoaded', async () => {
    const login = document.getElementById('login');
    const token = localStorage.getItem('Token');
    const total = document.getElementById('sumaTotal');
    const redireccion = document.getElementById('validaSesion');
    if(!token)
    {
        login.href = "register.html";
        redireccion.innerHTML = `
        <p class="item-text">Inicia sesión para guardar tus artículos.</p>
        <input type="button" class="btn-full3" id="loginRedirection" style="margin-bottom: 2%;" onclick= "location.href='login.html'" value="INICIAR SESIÓN">
        `
    }else {
        login.href = "profile.html";
        var sumaTotal = 0;
        let html = '';
        const container = document.getElementById('listaDeseo');
        const querySnapshot = await getFavorites();
        if(querySnapshot.docs == 0)
        {
            container.innerHTML = `
                <p class="item-text">Tus favoritos se encuentra vacio. </p>
                <input type="button" class="btn-full2" id="CatalogRedirection" style="margin-bottom: 2%;" onclick= "location.href='index.html'" value="SEGUIR COMPRANDO">
            `
        }
        querySnapshot.forEach(doc => {
            const product = doc.data();
            const ref = `'${doc.ref.id}'`;
            html += `
            <li class="list-group-item" id="${doc.ref.id}">
            <div style="display: flex">
                <img  class="img-wishlist" src="${product.img}" style="width: 30%;">
                <h3 class="felizNavidad" style="margin: auto 80px;">${product.nombre}<br>${product.precio}</h3>
            </div>
            </li>
            `
            let cad = product.precio;
            let num = cad.replace("$", "");
            let precioFinal = num.replace(",", "");
            sumaTotal += parseInt(precioFinal);
            container.innerHTML = html;
        });
        total.innerHTML = `<h2 class="bodyText">Total: $${sumaTotal}</h2>`;
    }
});