const database = firebase.database();

//Id
const preguntaText = document.getElementById('preguntaText');
const okBtn = document.getElementById('okBtn');
const focusGroupId = document.getElementById('focusGroupId');
const focusGroupHistorico = document.getElementById('focusGroupHistorico');


const register = ()=>{
    //El primer pregunta que sale inicialmente.
    let referencia = database.ref('Preguntas/id');

    //Referencia historico.
    let refHistorico = database.ref('Historicos').push();
    let historicoInfo = {
        preguntaHistorico: info.pregunta,
        listaPromedioHistorico: info.listaPromedio
    }
    refHistorico.set(historicoInfo);

    let info = {
        pregunta: preguntaText.value,
        listaPromedio: "0",
        puntaje: "0",
    };
    referencia.set(info);

    preguntaText.value=''; //Sirve para limpiar el input TextView


    
}

okBtn.addEventListener('click', register);


//Lectura
//Lectura de Preguntas
database.ref('Preguntas').on('value',function(data){
    //Vaciar una vez para que no salga tantas repetidas en el historico.
    focusGroupId.innerHTML = '';

    data.forEach(
        preguntaFocusGroup => {
            let valor = preguntaFocusGroup.val();
            let preguntasNuevo = new Pregunta(valor);
            focusGroupId.appendChild(preguntasNuevo.render());
        }
    );

});


//Lectura de Historicos
database.ref('Historicos').on('value',function(data){
    //Vaciar una vez para que no salga tantas repetidas en el historico.
    focusGroupHistorico.innerHTML = '';

    data.forEach(
        preguntasHistoricosFocusGroup => {
            let valor = preguntasHistoricosFocusGroup.val();
            let preguntasHistoricas = new Historicos(valor);
            focusGroupHistorico.appendChild(preguntasHistoricas.render());
        }
    );
});

