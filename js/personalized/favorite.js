import { addFavorite, getProduct } from "../backend/firebase.js";

const button = document.querySelector("#heart1");
const modal = document.getElementById('productModal');
const title = document.getElementById("productTitle");

button.addEventListener("click", async () => {
    if (button.classList.contains("liked")) {
        button.classList.remove("liked");
    } else {
        const token = localStorage.getItem('Token');
        button.classList.add("liked");
        if(token) {
            var ref = modal.getAttribute('title');
            const product = await getProduct(ref);
            var estatus = true;
            console.log(ref, title.value);
            await addFavorite(product.data().nombre, product.data().url, product.data().precio, ref, estatus, new Date());
        }
    }
});