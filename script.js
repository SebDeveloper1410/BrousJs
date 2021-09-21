function validar(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if(usuario=="sebastian" && contraseña=="123"){
        location.href="usuarioAdmin.html"
    }
    else
    {
        alert("Ingrese correctamente sus datos");
    }
}

function expirar(){
setTimeout(function() {
    location.href="index.html"
}, 1000 * 2 )
}