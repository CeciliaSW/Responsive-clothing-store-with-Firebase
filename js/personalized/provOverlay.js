const modal = document.getElementById('productModalIndex');
const image = document.getElementById("productImageIndex");
const title = document.getElementById("productTitleIndex");
const price =   document.getElementById("productPriceIndex");
const color = document.getElementById("productColorIndex");
const dot = document.getElementById("productColorDotIndex");
const description = document.getElementById("productDescriptionIndex");

modal.addEventListener('show.bs.modal', event => {
    const card = event.relatedTarget;
    const product = card.getAttribute('data-bs-whatever');
    
    switch(product){
        case "1":
            image.src="../img/index/versaceSlider/versaceBlouse1.jpg";
            title.innerHTML = "BLUSA DE SEDA BARROCO"; 
            price.innerHTML = "Mex$ 37,300"; 
            color.innerHTML = "Dorado"; 
            dot.style="background-color: #FFC016;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break;

        case "2":
            image.src="../img/index/versaceSlider/versaceDress1.jpg";
            title.innerHTML = "MINIVESTIDO CORSÉNEGRO"; 
            price.innerHTML = "Mex$ 79,900"; 
            color.innerHTML = "Negro"; 
            dot.style="background-color: #000000;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break;

        case "3":
            image.src="../img/index/versaceSlider/versaceCoat1.jpg";
            title.innerHTML = "GABARDINA GRECA"; 
            price.innerHTML = "Mex$ 88,500"; 
            color.innerHTML = "Negro"; 
            dot.style="background-color: #000000;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break;

        case "4":
            image.src="../img/index/versaceSlider/versacePants1.jpg";
            title.innerHTML = "PANTALONES PLISADOS"; 
            price.innerHTML = "Mex$ 34,600"; 
            color.innerHTML = "Negro"; 
            dot.style="background-color: #000000;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break;

        case "5":
            image.src="../img/index/versaceSlider/versaceBoots1.jpg";
            title.innerHTML = "BOTINES DE PLATAFORMA"; 
            price.innerHTML = "Mex$ 55,000"; 
            color.innerHTML = "Negro"; 
            dot.style="background-color: #000000;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break;

        case "6":
            image.src="../img/index/versaceSlider/versaceSneakers1.jpg";
            title.innerHTML = "ZAPATILLAS TRIGRECA"; 
            price.innerHTML = "Mex$ 21,600"; 
            color.innerHTML = "Negro"; 
            dot.style="background-color: #000000;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break;

        case "7":
            image.src="../img/index/versaceSlider/versaceBigBag1.jpg";
            title.innerHTML = "BOLSO GRANDE MEDUSA"; 
            price.innerHTML = "Mex$ 79,900"; 
            color.innerHTML = "Negro"; 
            dot.style="background-color: #000000;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break;

        case "8":
            image.src="../img/index/versaceSlider/versaceSmallBag1.jpg";
            title.innerHTML = "MINIBOLSO MEDUSA"; 
            price.innerHTML = "Mex$ 31,800"; 
            color.innerHTML = "Negro"; 
            dot.style="background-color: #000000;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break;
                
        case "9":
            image.src="../img/index/versaceSlider/versaceWatch1.jpg";
            title.innerHTML = "RÉLOJ GRECA REACTION"; 
            price.innerHTML = "Mex$ 29,300"; 
            color.innerHTML = "Negro"; 
            dot.style="background-color: #000000;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break; 

        case "10":
            image.src="../img/index/versaceSlider/versaceNecklace1.jpg";
            title.innerHTML = "COLLAR MEDUSA PICO"; 
            price.innerHTML = "Mex$ 37,300"; 
            color.innerHTML = "Dorado"; 
            dot.style="background-color: #FFC016;";
            description.innerHTML = "Siéntete elegante y cómoda en cualquier lugar."; 
            break; 
    }
})