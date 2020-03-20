moment().locale('es')

//Clases para las asistencias
class Assistence {
    constructor(date, assistence){
        this.date = date,
        this.assistence = assistence
    }
}

//Clases para la interfaz del las "card"
class UI {
    createCard(card){
        const wrapperCard = document.querySelector('.wrapper_card_assistence')
        const element = document.createElement('div')
        element.innerHTML = `
        <div class="card_asistencia">
            <div class="fecha_reunion">${card.date}</div>
            <div class="wrapper_asistencia">${card.assistence}</div>

            <a href="#"><img src="./img/delete.png" alt="delete" name="delete" class="delete_icon"></a>
        </div>
        `
        wrapperCard.appendChild(element)
    }

    resetForm(){
        document.querySelector('.submit_form').reset()
    }

    deleteCard(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.remove()
            Toast.fire({
                icon: 'warning',
                title: 'Asistencia eliminada correctamente'
            })
        }
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

//Funciones para los mensajes de alerta esquina superior derecha
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

//Funciones para el envio y validacion de las cards
document.querySelector('.submit_form').addEventListener('submit', function(e){
    const date = dateEntered
    const assistence = document.querySelector('#asistencia').value;

    //Crear nueva tarjeta
    const card = new Assistence(date, assistence)

    //Crear nueva UI
    const ui = new UI()

    //Alertas
    if(date === '' || assistence === ''){
        alert('Si funciona esta madre!')
    }

    //Salvar la asistencia
    ui.createCard(card)
    Toast.fire({
        icon: 'success',
        title: 'Datos enviados correctamente'
      })
    ui.resetForm()

    e.preventDefault();
})

document.querySelector('.wrapper_card_assistence').addEventListener('click', function(e){
    const ui = new UI()

    ui.deleteCard(e.target)
    e.preventDefault()
})