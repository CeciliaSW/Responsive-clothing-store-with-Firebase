import { addFavorite, getProduct } from "../backend/firebase.js";

const button = document.querySelector("#heartIndex");
const modal = document.getElementById('productModalIndex');
const title = document.getElementById("productTitleIndex");

button.addEventListener("click", async () => {
    if (button.classList.contains("liked")) {
        button.classList.remove("liked");
    } else {
        button.classList.add("liked");
        var ref = modal.getAttribute('title');
        const product = await getProduct(ref);
        var estatus = true;
        console.log(ref, title.value);
        await addFavorite(product.data().nombre, product.data().url, ref, estatus);
    }
});