var listaContactos = new Array (); 

//var registro = {nombre: 'Juan', telefono: 609932607}

var boton = document.querySelector('#btn')

boton.addEventListener('click', capturarDatos)

function capturarDatos (event) {
    event.preventDefault()

    var nombre = document.querySelector ('#nombre').value
    var telefono = document.getElementById ('tel').value

    guardarDatos (nombre, telefono)
    var nombre = document.querySelector ('#nombre').value = ''
    var telefono = document.getElementById ('tel').value = ''
}

function guardarDatos (pNombre, pTelefono) {
    var registro  = {
        nombre: pNombre,
        telefono: pTelefono
    }
    listaContactos.push (registro);

    pintarRegistro(registro)
}

function pintarRegistro (pRegistro) {
    var li = document.createElement('li')
    li.innerHTML = `<strong>${pRegistro.nombre}:</strong> ${pRegistro.telefono}`;

    document.getElementById('agenda').appendChild(li);
}