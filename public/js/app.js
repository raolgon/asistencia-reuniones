let asistenciaTotal = document.querySelector('#asistencia');
//Para que el date picker muestre la fecha actual por defecto

//let date = new Date()
let currentDate = document.querySelector('#fecha').valueAsDate = new Date()
document.querySelector('#btn_enviar').addEventListener("click", botonEnviar);
console.log(currentDate)

//Funciones para mostras la asistencia y enviarla al servidor(TODO)
function botonEnviar(){
    console.log(asistenciaTotal.value);

    document.querySelector('.card_asistencia').style.visibility = 'visible';
    fechaReunion();
    document.querySelector(".wrapper_asistencia").textContent = asistenciaTotal.value;
}

//Funciones para mostrar la fecha en card_asistencia

function fechaReunion(){
    let actualizarFecha = function(){
            fechaInput = currentDate,
            fechaActual = new Date(fechaInput),
            console.log(fechaActual),
            diaSemana = fechaActual.getDay(),
            dia = fechaActual.getDate(),
            mes = fechaActual.getMonth(),
            year = fechaActual.getFullYear();

        var pDiaSemana = document.querySelector('#diaSemana'),
            pDia = document.querySelector('#dia'),
            pMes = document.querySelector('#mes'),
            pYear = document.querySelector('#year');

        var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        var meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        pMes.textContent = meses[mes];

        pYear.textContent = year;
    }
    actualizarFecha();
}




