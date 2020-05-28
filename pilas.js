class pila{
    constructor(){
        this.elemento={};
        this.ultimo=0;
    }

    push(dato){
        this.ultimo++;
        this.elemento[this.ultimo]=dato; 
    }

    pop(){
        let borrar;
        if(this.ultimo)
        {
            borrar=this.elemento[this.ultimo]; 
            delete this.elemento[this.ultimo]; 
            this.ultimo--; 
            return borrar; 
        }
        else{
           return  console.log("¡LA PILA ESTA VACIA!");
        }
    }

    tamañoPila()
    {
        return this.ultimo;
    }

    pilaVacia(){
        if(this.tamañoPila)
        return false;
        else
        return true; 
    }

    peek(){
        if(this.pilaVacia()==true)
        return console.log("¡LA PILA ESTA VACIA!")
        else
        return this.elemento[this.ultimo]; 
    }

    mostrar(){
        let espacio='';
        if(this.tamañoPila())
        {
            for (let i=this.ultimo;i>0;i--)
            {
               espacio+= i+"."+this.elemento[i]+"\n";
            }
            return espacio;
        }
         
    }
}

const animales= new pila();
animales.push("pez");
animales.push("Gato");
animales.push("Perro");
animales.push("Delfin");
animales.push("Lechuza");
animales.push("Serpiente");
console.log("Muestra elementos agregados con funcion Push: ");
console.log(animales.mostrar());
console.log("Muestra el ultimo elemento y lo elimina: "); 
console.log("elemento eliminado: "+animales.pop());
console.log(animales.mostrar());
console.log("Tamaño de la pila: "+animales.tamañoPila()+"\n");
console.log("La pila esta vacia?: "+animales.pilaVacia()+"\n");
console.log("Muestra el ultimo elemento sin eliminarlo:");
console.log("Ultimo elemento: "+animales.peek());
console.log(animales.mostrar());