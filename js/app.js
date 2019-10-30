let asistenciaTotal = document.querySelector('#asistencia');

document.querySelector('#btn_enviar').addEventListener("click", botonEnviar);

function botonEnviar(){
    console.log(asistenciaTotal.value);
    console.log(fecha.value);

    document.querySelector(".card_asistencia").innerHTML = "La asistencia es de: " + asistenciaTotal.value + " en " + fecha.value;
}

//Para que salga la fecha actual en el input date en el documento (lo copie de StackOverflow no me maten ;-;)

let fecha = document.querySelector('#fecha');

window.onload = function(){
    var fechaActual = new Date(); //Fecha actual
    var mes = fechaActual.getMonth()+1; //obteniendo mes
    var dia = fechaActual.getDate(); //obteniendo dia
    var ano = fechaActual.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('fecha').value=ano+"-"+mes+"-"+dia;
}

//Funciones para mostrar la fecha en card_asistencia

function fechaReunion() {
    var actualizarFecha = function(){
        var fechaReunion = new Date(),
            diaSemana = fechaReunion.getDay(),
            dia = fechaReunion.getDate(),
            mes = fechaReunion.getMonth(),
            year = fechaReunion.getFullYear();

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
    };
    actualizarFecha();
}

fechaReunion();


