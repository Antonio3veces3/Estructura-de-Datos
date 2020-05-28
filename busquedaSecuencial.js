var vector= new Array();
const totalAlumnos=20;
for(var i=0;i<totalAlumnos;i++)
{
    vector[i]= Math.floor(Math.random()*8)+14;
    console.log("Alumno "+(i+1)+": "+vector[i]+" años");
}
const buscarEdad=18;
var alumnos='';
console.log("\nAlumnos que tienen "+buscarEdad+" años:");

var comprobador= 0;
for(i=0;i<totalAlumnos;i++)
{
    if(vector[i]==buscarEdad)
    {
        alumnos+= "alumno "+(i+1)+" | "; 
        comprobador=1;
    }
}
if(comprobador==0)
console.log("NO EXISTE");
else
console.log(alumnos);
