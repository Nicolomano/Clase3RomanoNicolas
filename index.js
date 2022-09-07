let numero = parseInt(prompt("Ingrese un numero"));

while(numero != "ESC"){
    if(numero % 2 === 0){
        alert(`${numero} es par`);
    }else if(numero % 2 != 0){
        alert(`${numero} es impar`);
    }else{
        alert("ERROR");
    }
    numero = prompt("Ingrese un numero");
}