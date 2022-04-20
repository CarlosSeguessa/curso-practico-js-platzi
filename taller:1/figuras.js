//Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado +" cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("Perimetro del cuadrado: " + perimetroCuadrado +" cm");

function areaCuadrado(lado) {
return lado * lado;
} 
// console.log("Area del cuadrado: " + areaCuadrado +" cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del Triangulo miden: "
// + ladoTriangulo1 
// +" cm, " 
// + ladoTriangulo2 
// +" cm, " 
// +baseTriangulo 
// +" cm"
// );
// const alturaTriangulo = 5.5;
// console.log("Altura del Triangulo: " + alturaTriangulo +" cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo;
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("Perimetro del Triangulo: " + perimetroTriangulo +" cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("Area del Triangulo: " + areaTriangulo +" cm^2");
console.groupEnd();


//Codigo del circulo
console.group("Circulos");


    // Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo +" cm");
    // Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo: " + diametroCirculo +" cm");
function diametroCirculo(radio){
    return radio * 2;
}
    // PI
const PI = Math.PI;
console.log("PI es: " + PI);
    // Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo: " + perimetroCirculo +" cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
    // Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El perimetro del circulo: " + areaCirculo +" cm^2");
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

// cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// triangulo

function calcularPerimetroTriangulo(){
    const input_LadoA = document.getElementById("ladoA_Triangulo");
    const  value_LadoA = parseInt(input_LadoA.value);
    
    const input_LadoB = document.getElementById("ladoB_Triangulo");
    const value_LadoB = parseInt(input_LadoB.value);

    const input_Base = document.getElementById("Base_Triangulo");
    const value_Base = parseInt(input_Base.value);

    const perimetro = perimetroTriangulo(value_LadoA, value_LadoB, value_Base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input_Base = document.getElementById("Base_Triangulo");
    const value_Base = parseInt(input_Base.value);

    const input_Altura = document.getElementById("altura_Triangulo");
    const value_Altura = parseInt(input_Altura.value);

    const area = areaTriangulo(value_Base, value_Altura);
    alert (area);
}

// circulo

function calcularPerimetroCirculo(){
    const input_Radio = document.getElementById("radio_Circulo");
    const value_Radio = parseInt(input_Radio.value);

    const perimetro = perimetroCirculo(value_Radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input_Radio = document.getElementById("radio_Circulo");
    const value_Radio = Number(input_Radio.value);

    const area = areaCirculo(value_Radio);
    alert(area);
}

// calcular altura de triangulo isoseles

function calcularAlturaIsoseles(lado1,lado2,base){
    if(lado1 === lado2 && lado1 != base){
      alert("isoseles");
      const altura = Math.sqrt(lado1**2 - base**2/ 4)
          alert(altura);
    }else{
          alert('no es isoseles');
      }
  }
  