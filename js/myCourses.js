
const botonCerrar = document.querySelector("#cerrarsesionBtn")
botonCerrar.onclick = (event)=>{ 
    localStorage.removeItem("isLoggedIn");
    window.location.href = "signIn.html"; 
}