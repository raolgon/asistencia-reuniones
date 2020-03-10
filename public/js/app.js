//Variables para la asistencia
let totalAssistence = document.querySelector('#asistencia');

console.log(moment().format('DD MM YYYY'))
//Variables y funciones para la fecha usando moment.js
let inputDate;
let dateEntered;
document.querySelector('#fecha').addEventListener('change', function() {
    inputDate = this.value;
    dateEntered = moment(inputDate).format();
    console.log(inputDate); //e.g. 2015-11-13
    console.log(dateEntered); //e.g. 09 March 2020
    return dateEntered;
});

//Mostrar la fecha actual por defecto
document.querySelector('#fecha').value = moment().format('YYYYY-MM-DD')

//Funciones para mostras la asistencia y enviarla al servidor(TODO)
document.querySelector('#btn_enviar').addEventListener('click', function(){
    document.querySelector('.card_asistencia').style.visibility = 'visible';
    fechaReunion();
    document.querySelector('.wrapper_asistencia').textContent = totalAssistence.value;
    console.log(totalAssistence.value);
});

//Funciones para mostrar la fecha en card_asistencia usando moment.js

function fechaReunion(){
    let actualizarFecha = function(){
            fechaInput = dateEntered,
            console.log(fechaInput),
            diaSemana = moment(fechaInput).day(),
            dia = moment(fechaInput).date(),
            mes = moment(fechaInput).month(),
            year = moment(fechaInput).year()

            pDiaSemana = document.querySelector('#diaSemana'),
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




