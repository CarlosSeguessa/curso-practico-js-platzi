function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: " + precioConDescuento + "$";
}   

// const precioOriginal = 120;
// const descuento = 18;



// console.log({
// precioOriginal,
// descuento,
// porcentajePrecioConDescuento,
// precioConDescuento,
// });