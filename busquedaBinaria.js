function busquedaBinaria(numero,vector)
{
    var min=0;
    var max= vector.length-1; 
    var index=0;
    var falla= "NO EXISTE";
    while(min <=max)
    {
        var medio= Math.floor((min+max)/2);
        var corte= vector[medio];
        if(corte<numero)
        min= medio+1;
        else
        max= medio-1;
        if(corte==numero)
        return medio;
    }
    if(vector[medio]!=numero)
    return falla;
}
var vector= new Array(20);
var espacio='';
for(let i=0;i<20;i++)
vector[i]=i+1;
for(i=0;i<20;i++)
espacio+=vector[i]+" | ";
console.log(espacio);
const buscar=13;
console.log("\nNumero a buscar: "+buscar);
console.log("Encontrado en la posicion: "+busquedaBinaria(buscar,vector));