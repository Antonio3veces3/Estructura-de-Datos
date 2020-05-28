function burbujaMejorado(vector)
{
    var temporal=0;
    var tamaño= vector.length;
    var interruptor=1;
    var ciclos=0;
    for(let i=0;i<tamaño-1 && interruptor==1;i++)
    {
        interruptor=0;
        for(let j=0;j<tamaño;j++)
        {
            if(vector[j]>vector[j+1])
            {
                interruptor=1;
                temporal=vector[j+1];
                vector[j+1]=vector[j];
                vector[j]=temporal;
            }
        }
        ciclos++;
    }
    console.log("Ciclos realizados: "+ciclos);
}
function mostrar(vector)
{
    var espacio='';
    for(i=0;i<total;i++)
    espacio+=vector[i]+" | ";
    return espacio; 
}
var total= 10;
var vector= new Array(total);
for(let i=0;i<total;i++)
vector[i]=Math.floor(Math.random()*90)+10; 
console.log("Lista desordenada: ");
console.log(mostrar(vector)); 
console.log("\nLista ordenada: ");
burbujaMejorado(vector);
console.log(mostrar(vector)); 