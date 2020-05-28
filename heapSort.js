function ordenarHeapSort(arreglo)
{
    var total=arreglo.length; 
    for(let i= Math.floor(total/2)-1; i>=0;i--) //ciclo que inicia en el ultimo elemento con hijos
    buscarRaiz(arreglo,total,i);
    
    for(let j=total-1;j>=0;j--)
    {
        var temporal=arreglo[0];
        arreglo[0]=arreglo[j];
        arreglo[j]=temporal; 
        buscarRaiz(arreglo,j,0);
    }
    return mostrar(arreglo);
}
function buscarRaiz(arreglo,total,i)
{
    var mayor=i; 
    var izq= 2*i+1;
    var der= 2*i+2; 
    if(izq<total && arreglo[izq]>arreglo[mayor])
    mayor=izq; 
    if(der<total && arreglo[der]>arreglo[mayor])
    mayor=der;  

    if(mayor!=i)
    {
        var cambiar= arreglo[i];
        arreglo[i]=arreglo[mayor];
        arreglo[mayor]=cambiar; 

        buscarRaiz(arreglo,total,mayor); 
    }
}
function mostrar(arreglo)
{
    var n=arreglo.length;
    var espacio='';
    for(let i=0;i<n;i++)
    espacio+=arreglo[i]+" | ";

    return espacio; 
}
var vector= [3,5,7,1,2,9,6,];
console.log("Arreglo desordenado: ")
console.log(mostrar(vector));
console.log("\nArreglo ordenado con Heap Sort: ");
console.log(ordenarHeapSort(vector)); 