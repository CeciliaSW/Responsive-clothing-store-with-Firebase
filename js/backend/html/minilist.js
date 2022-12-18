import { getFavorites } from "../firebase.js";

document.addEventListener('DOMContentLoaded', async () => {
    const login = document.getElementById('login');
    const token = localStorage.getItem('Token');
    let html = '';
    const miniContainer = document.getElementById('miniWishListContainer');
    if(!token)
    {
        login.href = "register.html";
        html += `
            <p class="item-text">Inicia sesión para guardar tus artículos.</p>
                            <input type="button" class="btn-full3" id="loginRedirection" style="margin-bottom: 2%;"
                                onclick="location.href='login.html'" value="INICIAR SESIÓN">
            `
        miniContainer.innerHTML = html;
    }else {
        login.href = "profile.html";
        const miniContainer = document.getElementById('listMini');
        const querySnapshot = await getFavorites();
        querySnapshot.forEach(doc => {
            const product = doc.data();
            html += `<li class="list-group-item list-group-item-secondary">${product.nombre}   ${product.precio}</li>`;
            miniContainer.innerHTML = html;
        });
    }
});