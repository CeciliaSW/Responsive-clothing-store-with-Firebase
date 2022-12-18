import { getIndexRef } from "../firebase.js";

const modal = document.getElementById('productModal');
const image = document.getElementById("productImage");
const title = document.getElementById("productTitle");
const price =   document.getElementById("productPrice");
const color = document.getElementById("productColor");
const dot = document.getElementById("productColorDot");
const description = document.getElementById("productDescription");

modal.addEventListener('show.bs.modal', async (event) => {
    const card = event.relatedTarget;
    const product = card.getAttribute('data-bs-whatever');
    var colorTxt, hex;

    const productDB = await getIndexRef(product);
    console.log(productDB.data());
    switch(productDB.data().color)
    {
        case 0: 
            colorTxt = "Blanco";
            hex = "#FFFFFF";
            break;
        case 1: 
            colorTxt = "Café";
            hex = "#894E14";
            break;
        case 2: 
            colorTxt = "Dorado";
            hex = "#FFC016";
            break;
        case 3: 
            colorTxt = "Gris";
            hex = "#B0B0B0";
            break;
        case 4: 
            colorTxt = "Negro";
            hex = "#000000";
            break;
        case 5: 
            colorTxt = "Azul";
            hex = "#2E4FAA";
            break;
        case 6: 
            colorTxt = "Rojo";
            hex = "#CE0000";
            break;
        case 7: 
            colorTxt = "Rosa";
            hex = "#F960BE";
            break;
        case 8: 
            colorTxt = "Verde";
            hex = "#26730F";
            break;
        case 9: 
            colorTxt = "Multicolor";
            hex = "";
            break;
        case 10:
            colorTxt = "Morado";
            hex = "#B472DD";
            break;
        case 11:
            colorTxt = "Beige";
            hex = "F8F6CC";
            break;
    }

    modal.title = productDB.ref.id;
    image.src = productDB.data().url;
    title.innerHTML = productDB.data().nombre; 
    price.innerHTML = `MEX ${productDB.data().precio}`; 
    color.innerHTML = colorTxt; 
    dot.style=`background-color: ${hex};`;
    description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar.";
})



