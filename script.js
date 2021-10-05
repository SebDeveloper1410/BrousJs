function validar() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario == "admin" && contraseña == "admin") {
        location.href = "usuarioAdmin.html";
    }
    else {
        alert("Ingrese correctamente sus datos");
    }
    
}