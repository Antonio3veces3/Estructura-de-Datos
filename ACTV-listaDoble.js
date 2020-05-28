class nodo{
    constructor(numero,siguiente,anterior)
    {
        this.numero=numero;
        this.anterior=anterior;
        this.siguiente=siguiente; 
    }
}
class ListaDobleEnlace{
    constructor(){
        this.inicio=null;
        this.ultimo=null; 
        this.total=0; 
    }

    agregar(numero){
        var nuevoNodo= new nodo(numero,null,this.ultimo)
        if(this.ultimo)
        {
            nuevoNodo.anterior=this.ultimo;
            this.ultimo.siguiente= nuevoNodo;
            this.ultimo=nuevoNodo; 
        }
        else
        {
            this.inicio= nuevoNodo;
            this.ultimo=nuevoNodo;
        }
        this.total++; 
    }
    agregarAlInicio(numero){
        var nuevoNodo= new nodo(numero,this.inicio,null)
        if(this.inicio)
        {
            nuevoNodo.siguiente= this.inicio;
            this.inicio.anterior= nuevoNodo;
            this.inicio=nuevoNodo;
        }
        else
        {
            this.inicio=nuevoNodo;
            this.ultimo=nuevoNodo; 
        }
        this.total++; 
    }
    agregaConIndice(numero,indice)
    {
        if(indice <0 || indice > (this.total-1))
        {
           return null;
        }

        var nuevoNodo= new nodo(numero, null, null)
        var actual=this.inicio; 
        var previo;
        if(indice==0)
        {
            nuevoNodo.siguiente= actual;
            actual.anterior=nuevoNodo;
            this.inicio=nuevoNodo;
        }
        else
        {
            for(var i=0;i<indice;i++)
            {
                previo= actual;
                actual= actual.siguiente; 
            }
            nuevoNodo.siguiente= actual;
            nuevoNodo.anterior=previo;
            previo.siguiente=nuevoNodo;
            actual.anterior=nuevoNodo; 
        }
        this.total++;

    }
    mostrar(){
        var actual= this.inicio; 
        var espacio="NULL <- ";
        while(actual!=null)
        {
            espacio+=actual.numero+" <-> "; 
            actual=actual.siguiente; 
        } 
        return espacio+=" NULL"
    }
    mostrarInvertido(){
        var actual= this.ultimo;
        var espacio="NULL <- ";
        while(actual!= null)
        {
            espacio+=actual.numero+" <-> ";
            actual=actual.anterior;
        }
        espacio+= " NULL"; 
        return espacio; 
    }
}
var lista1= new ListaDobleEnlace();
var totalnum=5; 
for(var z=0;z<totalnum;z++)
{
    var numero=0;
    numero= Math.floor(Math.random()*9)+1;
    lista1.agregar(numero);
}
console.log("Inserta nodos al final de la lista: ")
console.log(lista1.mostrar()); 
console.log("Total de nodos: "+lista1.total);
var lista2= new ListaDobleEnlace();
console.log("\nInserta nodos al inicio de la lista: "); 
lista2.agregarAlInicio(3);
lista2.agregarAlInicio(6);
lista2.agregarAlInicio(7);
console.log(lista2.mostrar());
console.log("Total de nodos: "+lista2.total);
console.log("\nInvierte el orden de la lista: "); 
console.log(lista2.mostrarInvertido());
console.log("\nInserta nodo (10) en el indice 2: ");
lista2.agregaConIndice(10,2);
console.log(lista2.mostrar());
console.log("Total de nodos: "+lista2.total);