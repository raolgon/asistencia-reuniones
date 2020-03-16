moment().locale('es')

//Clases para las asistencias
class Assistence {
    constructor(date, assistence){
        this.date = date,
        this.assistence = assistence
    }
}

class UI {
    createCard(card){
        const wrapperCard = document.querySelector('.wrapper_card_assistence')
        const element = document.createElement('div')
        element.innerHTML = `
        <div class="card_asistencia">
            <div class="fecha_reunion">${card.date}</div>
            <div class="wrapper_asistencia">${card.assistence}</div>
        </div>
        `
        wrapperCard.appendChild(element)
    }

    resetForm(){
        document.querySelector('.submit_form').reset()
    }
}

//Variables y funciones para la fecha usando moment.js
let inputDate;
let dateEntered;

document.querySelector('#fecha').addEventListener('change', function() {
    inputDate = this.value;
    dateEntered = moment(inputDate).format('dddd LL');
    console.log(inputDate); //e.g. 2015-11-13
    console.log(dateEntered); //e.g. 09 March 2020
    return dateEntered;
})

//Funciones para mostras la asistencia y enviarla al servidor(TODO)
// document.querySelector('#btn_send').addEventListener('click', function(){
//     if(totalAssistence.value === 0){
//         Swal.fire({
//             title: '!Error¡',
//             text: 'Necesitas poner la asistencia',
//             icon: 'error',
//             confirmButtonText: 'Cool'
//           })
//     } else {
//     document.querySelector('.card_asistencia').style.visibility = 'visible';
//     fechaReunion();
//     document.querySelector('.wrapper_asistencia').textContent = totalAssistence.value;
//     console.log(totalAssistence.value);
//     }
// });

//Funciones para mostrar la fecha en card_asistencia usando moment.js

// function fechaReunion(){
//     let actualizarFecha = function(){
//             fechaInput = dateEntered,
//             console.log(fechaInput),
//             diaSemana = moment(fechaInput).day(),
//             dia = moment(fechaInput).date(),
//             mes = moment(fechaInput).month(),
//             year = moment(fechaInput).year()

//             pDiaSemana = document.querySelector('#diaSemana'),
//             pDia = document.querySelector('#dia'),
//             pMes = document.querySelector('#mes'),
//             pYear = document.querySelector('#year');

//         var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
//         pDiaSemana.textContent = semana[diaSemana];

//         pDia.textContent = dia;

//         var meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
//         pMes.textContent = meses[mes];

//         pYear.textContent = year;
//     }
//     actualizarFecha();
// }

document.querySelector('.submit_form').addEventListener('submit', function(e){
    const date = dateEntered
    const assistence = document.querySelector('#asistencia').value;

    //Crear nueva tarjeta
    const card = new Assistence(date, assistence)

    //Crear nueva UI
    const ui = new UI()

    //Salvar la asistencia
    ui.createCard(card)
    ui.resetForm()

    //Prevenir comportamiento por defecto del formuario
    e.preventDefault();
})

document.querySelector('.wrapper_card_assistence').addEventListener('click', function(e){
    const ui = new UI()
    e.preventDefault()
})

