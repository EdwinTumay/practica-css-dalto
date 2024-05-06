let free = false;

const validarCliente = (time) =>{
    let edad = prompt("Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && !free){
            alert("puedes pasar Gratis porque eres la primera persona despues de las 2 AM");
            free = true;
        } else {
            alert(`Son las  ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`)
        }
    } else{
        alert("mi niño eres menor de edad, No puedes pasar");
    }
}

validarCliente(23)
validarCliente(0.6)
validarCliente(1)
validarCliente(2)
validarCliente(2.1)
