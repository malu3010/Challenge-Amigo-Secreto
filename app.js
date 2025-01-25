let nombreAmigosUsuario = [];

function agregarAmigo() {
    //trim(): asegura que cualquier espacio extra al inicio o final del texto sea eliminado antes de validar.
    //De esta forma, si el usuario ingresa solo espacios le saldrá el alert().
    let nombreDeAmigo = document.getElementById('amigo').value.trim();
    console.log(nombreDeAmigo);
    //Valida que el campo no este vacío.
    if (nombreDeAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else if (nombreAmigosUsuario.includes(nombreDeAmigo)) {
        alert("Este nombre ya está en la lista.");
    } else {
        //Si el valor ingresado es válido, se agrega a la lista de nombres.
        nombreAmigosUsuario.push(nombreDeAmigo);
        agregarAmigosListaHTML();
        //Se restablece el campo de texto a una cadena vacía.
        limpiarCaja();
        console.log(nombreAmigosUsuario);
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function agregarAmigosListaHTML() {
    const lista = document.getElementById('listaAmigos');
    console.log(lista);
    //Limpiar la lista existente.
    lista.innerHTML = "";

    //Iterar sobre los elementos de la lista de amigos que ingresa el usuario.
    for (let cantidadNombres = 0; cantidadNombres < nombreAmigosUsuario.length; cantidadNombres++) {
        console.log(cantidadNombres);
        //Crear un nuevo elemento <li> por cada amigo.
        const elemento = document.createElement('li');
        //Asignar el nombre del amigo como contenido de texto.
        elemento.textContent = nombreAmigosUsuario[cantidadNombres];
        //Agregar el elemento <li> a la lista.
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    //Validar que el array contenga al menos 1 elemento.
    if (nombreAmigosUsuario.length > 0) {
        //Seleccionar un índice aleatorio dentro del rango del array.
        let indiceAleatorio = Math.floor(Math.random()*(nombreAmigosUsuario.length))
        //Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
        let nombreAleatorio = nombreAmigosUsuario[indiceAleatorio];
        //Mostrar el amigo sorteado.
        asignarTextoElemento('resultado', nombreAleatorio);
    } else {
        alert("No hay amigos en la lista para sortear.");
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}