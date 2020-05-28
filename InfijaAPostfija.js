function conversion(operacion)
{
    var total=operacion.length;
    var resultado= new Array();
    var operadores= new Array();
    var caracter;
    for(i=0;i<total;i++)
    {
        caracter=operacion[i];
        if(caracter>=0)
        resultado.push(caracter);
        switch(caracter)
        {
            case '(':
                operadores.push(caracter);
                break;
                case ')':
                    for(let j=operadores.length-1;operadores[j]!='(';j--)
                    {
                    var agregar=operadores[j];
                    resultado.push(agregar);
                    operadores.pop();
                    }
                    operadores.pop();
                    break;
                    case '^':
                        var ultimo=operadores.pop();
                        if(ultimo=='^')
                        {
                            resultado-push(ultimo);
                        }
                        else
                        {
                            operadores.push(ultimo);
                            operadores.push(caracter);
                        } 
                        break;
                        case '*':
                            case '/': 
                            if(operadores.length==0)
                            {
                                operadores.push(caracter);
                            }
                            else
                            {
                                var ultimo= operadores.pop(); 
                                if(ultimo=='^')
                                {
                                    resultado.push(ultimo); 
                                    var contador= operadores.length-1;
                                    for(let c=contador;c>=0;c--)
                                    {
                                        if(operadores[c]=='(')
                                        break;
                                        else
                                        { 
                                            resultado.push(operadores[c]);
                                            operadores.pop();
                                        }
                                    }
                                    operadores.push(caracter); 
                                }
                                else
                                {
                                    if(ultimo=='*' || ultimo=='/')
                                    {
                                        resultado.push(ultimo);
                                        operadores.push(caracter); 
                                    }
                                    else
                                    {
                                        operadores.push(ultimo);
                                        operadores.push(caracter);
                                    }
                                }
                            }
                            break;
                            case '+':
                                case '-': 
                                if(operadores.length==0)
                                {
                                    operadores.push(caracter);
                                }
                                else
                                {
                                    var ultimo= operadores.pop(); 
                                    if(ultimo=='/' || ultimo=='^' || ultimo=='*')
                                    {
                                        resultado.push(ultimo); 
                                        var contador= operadores.length-1;
                                        for(let c=contador;c>=0;c--)
                                        {
                                            if(operadores[c]=='(')
                                            break;
                                            else
                                            { 
                                                resultado.push(operadores[c]);
                                                operadores.pop();
                                            }
                                        }
                                        operadores.push(caracter); 
                                    }
                                    else
                                    {
                                        if(ultimo=='+' || ultimo=='-')
                                        {
                                            resultado.push(ultimo);
                                            operadores.push(caracter);
                                        }
                                        else
                                        {
                                            operadores.push(ultimo);
                                            operadores.push(caracter);
                                        }
                                    }
                                }
                            break;
        }
    }
    if(operadores.length>0)
    {
        for(let x=operadores.length-1;x>=0;x--)
        {
            var add=operadores[x];
            resultado.push(add);
        }
    }
    return mostrar(resultado);
}

function mostrar(arreglo)

{
    var total=arreglo.length;
    var espacio='';
    for(let i=0;i<total;i++)
    espacio+=arreglo[i]+" ";
    return espacio; 
}
var operacion= [1,'*',3,'*',4,'/',6,'+',4,'-',2,'+',6,'+',3,'/',9];
//'(',6,'+',2,')','*',3,'/',2,'^',2,'-',4
//'(',1,'*','(',2,'-',3,')',')','+','(',4,'+',5,')'
console.log("Notacion infija: ");
console.log(mostrar(operacion));
console.log("\nNotacion Postfija:");
console.log(conversion(operacion)); 