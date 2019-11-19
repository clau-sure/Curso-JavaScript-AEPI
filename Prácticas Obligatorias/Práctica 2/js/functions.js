//Filtro simple buscar por dolencia

var contenido = document.querySelector('#content');
var filtrarDiagnostico = document.getElementById('Enfermedad');

filtrarDiagnostico.addEventListener('change', selectEnfermedad);

function selectEnfermedad(event) {
enfermedad = event.target.value
filtrarPorEnfermedad(pacientes, enfermedad);
}

function filtrarPorEnfermedad(pLista, pEnfermedad) {
var pacientesDolencias = pacientes.filter(paciente => paciente.diagnostico === enfermedad)
pintarLista(pacientesDolencias);
}

function pintarLista(pLista) {
contenido.innerHTML = "";
for (paciente of pLista) {
    contenido.innerHTML += `<div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${paciente.nombre} ${paciente.apellido}</h5>
                                <h6 class="card-text">Diagnóstico: ${paciente.diagnostico}</h6>
                                <h6 class="card-text">Edad: ${paciente.edad}</h6>
                                <h6 class="card-text">Número de la Seguridad Social: ${paciente.numero}</h6>
                            </div>
                        </div>`
}
}

//Filtro simple buscar por edad

var edad1 = document.getElementById('edad1');
var edad2 = document.getElementById('edad2');

function filtrar(){
    let min = edad1.value;
    let max = edad2.value;
    filtrarPorEdad(pacientes, min, max);
}

function filtrarPorEdad(pListaPacientes, pEdadMinima, pEdadMaxima) {
    var pacientesEdad = pacientes.filter(paciente => paciente.edad >= pEdadMinima && paciente.edad <= pEdadMaxima)

    return pintarPacientesEdad(pacientesEdad);
}

function pintarPacientesEdad (pListaPacientes) {
        contenido.innerHTML = "";
        for (paciente of pListaPacientes) {
            contenido.innerHTML += `<div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">${paciente.nombre} ${paciente.apellido}</h5>
                                            <h6 class="card-text">Diagnóstico: ${paciente.diagnostico}</h6>
                                            <h6 class="card-text">Edad: ${paciente.edad}</h6>
                                            <h6 class="card-text">Número de la Seguridad Social: ${paciente.numero}</h6>
                                        </div>
                                    </div>`
}
}

function clearData(){
    this.edad1.value = "";
    this.edad2.value = "";
    this.contenido.innerHTML = ""
}


//Filtro combinado

var edad1 = document.getElementById('edadCom1');
var edad2 = document.getElementById('edadCom2');
var EnfermedadCom = document.getElementById('EnfermedadCom');

if (EnfermedadCom != "") {
    var listaFiltroCom = filtrarPorEdad (filtrarDiagnostico)
}
