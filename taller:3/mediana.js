function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado +nuevoElemento
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }


// const lista1 = [
//     100,
//     200,
//     500,
//     4000000,
// ];
// lista1.sort();
function esPar(num){
    if (num % 2 === 0){
        return true;
    }else{
        return false;
    }
}


function calcularMediana(lista){
    lista.sort((a,b) => a - b);

    const mitadLista = parseInt(lista.length / 2);



    let mediana;
        if (esPar(lista.length)){
            const elemento1 = lista[mitadLista -1 ];
            const elemento2 = lista[mitadLista]; 

            const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

    mediana = promedioElemento1y2;    
}else{
   mediana = lista[mitadLista];
}
    return mediana;
}

