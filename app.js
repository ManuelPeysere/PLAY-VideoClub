function inicio() {
    let start = prompt("¿Ya tenés cuenta?").toUpperCase();
if (start == "SI") {
   login()
}else{
    register()
}
}
inicio()

function login() {
    console.log('Va a inicio');
    let emailLogin =prompt ("Ingresá tu email")
    let passwordLogin =prompt ("Ingresá tu contraseña")
    alert(emailLogin + " " + "ha ingresado con éxito")
}

function register() {
    console.log('Va a registro');
    let name =prompt("Ingrese su nombre")
    let surname =prompt("Ingrese su apellido")
    let emailRegister =prompt("Ingreso su email de registro")
    let passwordRegister =prompt("Ingrese su contraseña")
    let confirm = prompt (`Sus datos ingresados son: \nNombre: ${name} \nApellido: ${surname} \nEmail: ${emailRegister} \nPassword: ${passwordRegister}`).toUpperCase();

    if (confirm == "SI"){
        alert("Usuario registrado con éxito")
    }else{
        alert("Algo ha salido mal. Intente nuevamente")
        register ()
    }
}