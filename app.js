// function inicio() {
//     let start = prompt("¿Ya tenés cuenta?").toUpperCase();
//     if (start == "SI") {
//         login()
//     } else {
//         register()
//     }
// }
// inicio()

// function login() {
//     console.log('Va a inicio');
//     let emailLogin = prompt("Ingresá tu email")
//     let passwordLogin = prompt("Ingresá tu contraseña")
//     alert(emailLogin + " " + "ha ingresado con éxito")
// }

// function register() {
//     console.log('Va a registro');
//     let name = prompt("Ingrese su nombre")
//     let surname = prompt("Ingrese su apellido")
//     let emailRegister = prompt("Ingreso su email de registro")
//     let passwordRegister = prompt("Ingrese su contraseña")
//     let confirm = prompt(`Sus datos ingresados son: \nNombre: ${name} \nApellido: ${surname} \nEmail: ${emailRegister} \nPassword: ${passwordRegister} \nSi los datos son correctos indique SI`).toUpperCase();

//     if (confirm == "SI") {
//         alert("Usuario registrado con éxito")
//     } else {
//         alert("Algo ha salido mal. Intente nuevamente")
//         register()
//     }
// }


// const disponibles = [
//     { id: 1, titulo: "1. Animales fantásticos: Los secretos de Dumbledore", duracion: "2h 23m", precio: 5800 },
//     { id: 2, titulo: "2. La ira de Dios", duracion: "1h 38m", precio: 2800 },
//     { id: 3, titulo: "3. Crimes of the Future", duracion: "1h 47m", precio: 1700 },
//     { id: 4, titulo: "4. Competencia oficial", duracion: "1h 54m", precio: 3200 },
//     { id: 5, titulo: "5. El abismo ", duracion: "1h 26m", precio: 2650 },
//     { id: 6, titulo: "6. Dog: Un viaje salvaje", duracion: "1h 42m", precio: 1450 },
//     { id: 7, titulo: "7. La memoria de un asesino", duracion: "1h 54m", precio: 2270 }];


// function peliculas() {

//     const temporalarray = []

//     for (let index = 0; index < disponibles.length; index++) {
//         temporalarray.push(disponibles[index].titulo)
//     }
//     return temporalarray
// }


// function consulta() {
//     let consulta = prompt("¿Desea ver la lista de películas disponibles?").toUpperCase();
//     if (consulta == "SI") {
//         let pelis = peliculas()
//         let numIdPeli = prompt(pelis + " " + "\n\n Indique el número de la pelicula que desea comprar");


//         const peliElegida = disponibles.filter((peli) => {
//             return peli.id == numIdPeli
//         })
//         alert(`Gracias por comprar ${peliElegida[0].titulo}. Precio a pagar: ${peliElegida[0].precio}`)
//         console.log(peliElegida);
//     } else {
//         alert("Gracias por su visita")
//     }
// }
// consulta()



// const peliculas = document.querySelector(".peliculas");


document.addEventListener("DOMContentLoaded", () =>{
    console.log("Documento");
    getData()
});


const getData = async () => {
    const response = await fetch("./peliculas.json")
    const data = await response.json()
    imprimirPeliculas(data);
}

const imprimirPeliculas = (data)=> {
    data.forEach(pelicula => {
                        const ulPelis = document.getElementById('pelis')
                        const li = document.createElement('li')
                        li.innerHTML = `
                        <section class="peliculas">
                            <img id="img" src="${pelicula.img}" alt="">
                            <div>
                                <h5 id="title">${pelicula.titulo}</h5>
                                <p id="category">${pelicula.categoria}</p>
                                <p id="time">${pelicula.duracion}</p>
                                <p id="description">${pelicula.descripcion}</p>
                                <h6>Creador</h6>
                                <p id="directorName">${pelicula.director}</p>
                                <div class="buy">
                                    <p id="price"> Precio: $${pelicula.precio}</p>
                                    <button class="btn" id=${pelicula.id}>Comprar</button>
                                </div>
                            </div>
                        </section>`
                        ulPelis.appendChild(li)
                    });
}

const confirmarCompra = document.querySelector("#confirm");
confirmarCompra.addEventListener("click", () => {
    alert("Su compra se ha registrado con éxito")
})



