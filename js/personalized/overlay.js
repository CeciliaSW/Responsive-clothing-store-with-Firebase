import { getProduct } from "../backend/firebase.js";

const size = document.getElementById('size');
const modal = document.getElementById('productModal');
const image = document.getElementById("productImage");
const title = document.getElementById("productTitle");
const price =   document.getElementById("productPrice");
const color = document.getElementById("productColor");
const dot = document.getElementById("productColorDot");
const description = document.getElementById("productDescription");

modal.addEventListener('show.bs.modal', async (event) => {
    const card = event.relatedTarget;
    let html = '';
    const product = card.getAttribute('data-bs-whatever');
    var colorTxt, hex;

    const productDB = await getProduct(product);

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
            colorTxt = "Plateado";
            hex = "#B8B8B8";
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
        case 10:
            colorTxt = "Morado";
            hex = "#B472DD";
            break;
        case 11:
            colorTxt = "Beige";
            hex = "F8F6CC";
            break;

    }

    if(productDB.data().categoria == 2)
    {
        html += `
            <h6 class="descriptionText3" style="padding-bottom: 2%;">SIZE:</h6>
                        <div class="mb-3" style="padding-bottom: 2%;">
                            <div class="btn-group" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="size36"
                                    autocomplete="off" checked>
                                <label class="btn btn-outline-secondary" for="size36">36</label>
    
                                <input type="radio" class="btn-check" name="btnradio" id="size38"
                                    autocomplete="off">
                                <label class="btn btn-outline-secondary" for="size38">38</label>
    
                                <input type="radio" class="btn-check" name="btnradio" id="size40"
                                    autocomplete="off">
                                <label class="btn btn-outline-secondary" for="size40">40</label>
    
                                <input type="radio" class="btn-check" name="btnradio" id="size42"
                                    autocomplete="off">
                                <label class="btn btn-outline-secondary" for="size42">42</label>
    
                                <input type="radio" class="btn-check" name="btnradio" id="size44"
                                    autocomplete="off">
                                <label class="btn btn-outline-secondary" for="size44">44</label>
    
                                <input type="radio" class="btn-check" name="btnradio" id="size46"
                                    autocomplete="off">
                                <label class="btn btn-outline-secondary" for="size46">46</label>
    
                                <input type="radio" class="btn-check" name="btnradio" id="size48"
                                    autocomplete="off">
                                <label class="btn btn-outline-secondary" for="size48">48</label>
                            </div>
                        </div>`;
        size.innerHTML = html;
    }

    modal.title = productDB.ref.id;
    image.src = productDB.data().url;
    title.innerHTML = productDB.data().nombre; 
    price.innerHTML = `MEX ${productDB.data().precio}`; 
    color.innerHTML = colorTxt; 
    dot.style=`background-color: ${hex};`;
    description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar.";
})



