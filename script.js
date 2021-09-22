const btnLogin = document.querySelector("#btnverificar")

const users = {
  "admin": ["sebastian", "123"],
  "guest": ["guest001", "guest"],
  "sudo": ["sudo", "678"]
}

function validar() {
  const usuario = document.querySelector("#usuario").value;
  const contraseña = document.querySelector("#pwd").value;
  let login = false
  for (let user in users) {
    const [name, passwd] = users[user]
    if (name === usuario && passwd === contraseña) {
      // usuario ingresa
      console.log("success")
      login = true
      break
    }
  }
  if (!login) {
    alert("Ingrese los datos correctamente")
  }
}

btnLogin.addEventListener('click', validar)