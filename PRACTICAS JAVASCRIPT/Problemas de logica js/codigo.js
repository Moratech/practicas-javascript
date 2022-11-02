let free= false;

const validarCliente = (time)=>{
    let edad = prompt('¿Cual es tu edad?');
    if (edad > 18){
        if (time>=2 && time<7 && free == false){
            alert('podes pasar gratis');
            free= true;
        } else{
            alert('podes pasar pero tenes que pagar la entrada'); 
        }
    }
    else{
        alert('Sos menor de edad no podes pasar');
    }
}

validarCliente(23);
validarCliente(2);
validarCliente(7);
