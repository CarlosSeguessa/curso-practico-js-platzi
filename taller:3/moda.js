// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1,
// ]




function calcularModa(lista){
    const listaCount = {}
    
    lista.map(
        function (elemento) {
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
            
        }
    );
    
    const lista1rray = Object.entries(listaCount).sort((a,b) => a[1] - b[1]);
    
    const moda = lista1rray[lista1rray.length - 1];
    return moda;
}