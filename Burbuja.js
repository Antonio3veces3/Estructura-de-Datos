function burbuja(vector)
{
    var temporal=0;
    var tamaño= vector.length;
    var ciclos=0;
    for(let i=0;i<tamaño;i++)
    {
        ciclos++; 
        for(let j=0;j<tamaño;j++)
        {
            if(vector[j]>vector[j+1])
            {
                temporal=vector[j+1];
                vector[j+1]=vector[j];
                vector[j]=temporal;
            }
        }
    }
    console.log("Ciclos realizados: "+ciclos);
    return mostrar(vector);
}
function mostrar(vector)
{
    var espacio='';
    for(i=0;i<total;i++)
    espacio+=vector[i]+" | ";
    return espacio;
}
var total=10;
var vector= new Array(total);
for(let i=0;i<total;i++)
vector[i]=Math.floor(Math.random()*90)+10; 
console.log("lista desordenada: ");
console.log(mostrar(vector));
console.log("\nLista ordenada: ");
console.log(burbuja(vector));
