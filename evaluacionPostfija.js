var postfija=[4,5,6,'+',8,2,3,'^','/','-',7,'-','*',1,'-'];
//2,1,3,'*',4,'*',6,'/','+',4,'+',2,'-',9,3,'/','+'
function evaluacion(notacion)
{
    var numeros= new Array();
    var total=notacion.length;
    var res=0;
    for(let i=0;i<total;i++)
    {
        caracter=notacion[i];
        if(caracter>=0)
        numeros.push(caracter);
        else
        {
            var num2= numeros.pop();
            var num1= numeros.pop();
            var resultado=0; 
            switch(caracter)
            {
                case '^':
                    resultado= num1**num2;
                    numeros.push(resultado); 
                    break;
                    case '*':
                        resultado= num1*num2;
                        numeros.push(resultado);
                        break;
                        case '/':
                            resultado= num1/num2;
                            numeros.push(resultado);
                            break;
                            case '+':
                                resultado= num1+num2;
                                numeros.push(resultado);
                                break;
                                case '-':
                                    resultado= num1-num2;
                                    numeros.push(resultado);
                                    break; 
            }
        }
    }
    return res= numeros.pop();
}
function mostrar(notacion)
{
    var total=notacion.length;
    var espacio='';
    for(let i=0;i<total;i++)
    espacio+=notacion[i]+" ";

    return espacio; 
}
console.log("Notacion Postfija: ");
console.log(mostrar(postfija));
console.log("\nResultado: "+evaluacion(postfija)); 
