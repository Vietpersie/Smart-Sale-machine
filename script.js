const Price_apple = 20;
const Price_orange = 15;
let total = document.getElementById("total");
let nameProduct = document.getElementById("nameProduct");
let quantity = document.getElementById("quantity");


function ChangeProduct() {
    fruit.setAttribute("src", "/res/27fe2fe4-626e-4312-91de-a8a219be4e61/fruit" + event.target.value + ".png");
}

function Payment() {
    if (nameProduct.value == "1") {
        total.innerHTML = Price_orange*quantity.value + "$";
       
    }
    else if (nameProduct.value == "2") {
        total.innerHTML =Price_apple*quantity.value + "$";
        
    }
}









