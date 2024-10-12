

const botonIngresar = document.querySelector("#iniciarSesionBtn")
if (botonIngresar) {
    botonIngresar.onclick = (event)=>{ 
        event.preventDefault()
        const email = document.querySelector("#email").value
        const contrasena = document.querySelector("#password").value

        if (email === "prueba@gmail.com" && contrasena === "1234"){
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "../pages/main.html"
        }else{
            let spanError = document.querySelector("#mensajeError");
            if (!spanError) {
                const spanError = document.createElement("span")
                spanError.textContent = "Contraseña incorrecta"
                spanError.style.color = "red";
                spanError.id = "mensajeError"
                const errorContainer = document.querySelector("#errorContainer");
                errorContainer.appendChild(spanError); 
            }
        }
    }
}

const botonRegistrarse = document.querySelector("#registrarseBtn")
botonRegistrarse.onclick = (event) => { 
    event.preventDefault();

    const nombre = document.querySelector("#nombreRegistro").value;
    const email = document.querySelector("#emailRegistro").value;
    const contrasena = document.querySelector("#contrasenaRegistro").value;
    const contrasenaRepetida = document.querySelector("#contrasenaRepetidaRegistro").value;

    if (contrasena !== contrasenaRepetida) {
        alert("Las contraseñas no coinciden");
        return;
    }

    localStorage.setItem("isLoggedIn", "true");
    alert("Registro exitoso. Bienvenido!");
    window.location.href = "../pages/main.html";
    
}
