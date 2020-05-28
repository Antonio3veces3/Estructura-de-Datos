console.clear(); 
class nodo{
    constructor(numero, nombre, sexo,calificaciones, edad, materias)
    {
        this.numero= null;
        this.nombre=null;
        this.sexo=null;  
        this.materias=null;
        this.calificaciones=null; 
        this.edad=null; 
        this.siguiente=null;
    }
}
class listaEnlazadaSimple{
    constructor()
    {
        this.inicio= null;
        this.total=0; 
    }
    agregar(num,nom,sex,calif,edad)
    {
        const nuevoNodo= new nodo(num,nom,sex,calif,edad)
        if(this.inicio==null)
        {
            this.inicio= nuevoNodo;
            this.inicio.numero= num;
            this.inicio.nombre=nom;
            this.inicio.sexo=sex;
            this.inicio.materias=["MAT-1","MAT-2","MAT-3","MAT-4","MAT-5"]; 
            this.inicio.calificaciones=calif; 
            this.inicio.edad= edad;
            this.siguiente= null;
        }
        else
        {
            let actual= this.inicio;
            while(actual.siguiente!=null)
            {
                actual= actual.siguiente;    
            }
            actual.siguiente= nuevoNodo;
            actual.siguiente.numero=num;
            actual.siguiente.nombre=nom;
            actual.siguiente.sexo=sex;
            actual.siguiente.materias=["MAT-1","MAT-2","MAT-3","MAT-4","MAT-5"];
            actual.siguiente.calificaciones=calif;
            actual.siguiente.edad=edad;  
        }
        this.total++; 
    }
    mostrar()
    {
        var temporal= this.inicio; 
        var espacio= ''; 
        var cnt=0;
        while(temporal !=null)
        {
            espacio+= "\nNo.control: "+temporal.numero+" Nombre: "+temporal.nombre+" Sexo: "+temporal.sexo+"| "+"Edad: "+temporal.edad+" ";
            for(var a=0;a<5;a++)
            {
                espacio+=temporal.materias[a]+"= "+temporal.calificaciones[a]+" "; 
            }
            espacio+= "  Promedio: "+this.promedios()[cnt]+" => ";
            temporal=temporal.siguiente;
            cnt++;
        }
        espacio+="NULL";
        return espacio; 
    }
    promedios(){
        var estudiante= this.inicio;
        var promedio= new Array(this.total);
        var contador=0;
        while(estudiante!=null)
        {
            var suma=0;
            for(var x=0;x<5;x++)
            suma+= estudiante.calificaciones[x];
            promedio[contador]=suma/5;
            contador++;
            estudiante=estudiante.siguiente; 
        }
        return promedio; 
    }
    promedioMayor(){
        var menor=0, mayor=0, contador=1, index=0;
        var alumno= this.inicio; 
        while(alumno!=null)
        {
            if(contador==1)
            {
                menor=this.promedios()[index];
                mayor= this.promedios()[index];
            }
            else
            {
                if(menor>this.promedios()[index])
                menor= this.promedios()[index];
                if(mayor<this.promedios()[index])
                mayor= this.promedios()[index]; 
            }
            index++; 
            contador++;
            alumno= alumno.siguiente;
        }
        return mayor; 
    }
    AlumnoMayorPromedio(){
        var alum= this.inicio;
        var contador=0; 
        var espacio=''; 
        while(alum)
        {
            if(this.promedios()[contador]==this.promedioMayor())
            espacio+= "Nombre: "+alum.nombre+" ("+this.promedioMayor()+")  ";
            contador++;
            alum=alum.siguiente; 
        }
        return espacio; 
    }
    PromedioMat2PorGenero()
    {
        var alumno= this.inicio;
        var sumamuj=0, sumahom=0, h=0, m=0; 
        var espacio=0; 
        while(alumno)
        {
            if(alumno.sexo=='M')
            {
                sumamuj+=alumno.calificaciones[1]; 
                m++; 
            }
            else
            {
                sumahom+=alumno.calificaciones[1];
                h++; 
            }
            alumno=alumno.siguiente; 
        }
       espacio="Promedio de hombres en MAT-2: "+(sumahom/h).toFixed(2);
       espacio+="   Promedio mujeres en MAT-2: "+(sumamuj/m).toFixed(2); 
       return espacio; 
    }
    calificacionMayorMat2()
    {
        var temporal=this.inicio; 
        var menor=0, mayor=0, contador=1, indice=1; 
        while(temporal!=null)
        {
            if(contador==1)
            {
                menor=temporal.calificaciones[indice];
                mayor=temporal.calificaciones[indice]; 
            }
            else
            {
                if(menor>temporal.calificaciones[indice])
                menor= temporal.calificaciones[indice];
                if(mayor<temporal.calificaciones[indice])
                mayor= temporal.calificaciones[indice]; 

            }
            contador++;
            temporal= temporal.siguiente; 
        }
        return mayor; 
    }
    AlumnoMayorCalifEnMat2(){
        var estudiante= this.inicio;
        var separacion=''
        while(estudiante!=null)
        {
            if(estudiante.calificaciones[1]==this.calificacionMayorMat2())
            separacion+= "Nombre: "+estudiante.nombre+" ("+this.calificacionMayorMat2()+")";
            estudiante= estudiante.siguiente; 
        }
        return separacion; 
    }
}
var mostrar= new listaEnlazadaSimple();
var totalAlumnos= 5;

for(var i=0;i<totalAlumnos;i++)
{
    var num=0,nom='',sex=0,calif=new Array(4),edad=0;
    num= Math.floor(Math.random()*99)+1;
    nom= String.fromCharCode(65+Math.floor(Math.random()*25)) + String.fromCharCode(65+Math.floor(Math.random()*25))+ String.fromCharCode(65+Math.floor(Math.random()*25));
    sex= Math.floor(Math.random()*2);
    if(sex==0)
    sex='M';
    else
    sex='H';
    for(var j=0;j<5;j++)
    {
        calif[j]=Math.floor(Math.random()*11); 
    }
    edad= Math.floor(Math.random()*8)+14; 
    mostrar.agregar(num,nom,sex,calif,edad);
}
console.log(mostrar.mostrar()); 

console.log("\nAlumno con promedio mayor: ");
console.log(mostrar.AlumnoMayorPromedio());
console.log("\nPromedio MAT-2 por genero: ");
console.log(mostrar.PromedioMat2PorGenero());
console.log("\nAlumno con promedio mayor en MAT-2: ");
console.log(mostrar.AlumnoMayorCalifEnMat2());
console.log("Total de alumnos: "+mostrar.total);