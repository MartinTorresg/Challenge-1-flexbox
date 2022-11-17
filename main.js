const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensagem")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length > 5){
        warnings += `El nombre es muy largo <br>`
    }
    console.log(regexEmail.test(email.value))
    if(regexEmail.test(email.value)){

    }
})