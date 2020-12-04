const database = firebase.database();

//Id
const preguntaText = document.getElementById('preguntaText');
const okBtn = document.getElementById('okBtn');
const focusGroupId = document.getElementById('focusGroupId');
const focusGroupHistorico = document.getElementById('focusGroupHistorico');


const register = ()=>{
    //para que no salga vacio
    if (preguntaText.value == '') {
        alert("No has escrito la pregunta");
        return;
    }


    //Referencia historico. Lo pongo antes para que no se actualice o me ponga el 0 del predeterminado.

    /*database.ref('PreguntasActualizado').once('value', function (data) {
        data.forEach(
            preguntaFocusGroup => {
                let preguntaLectura = preguntaFocusGroup.val().pregunta;
                let listaPromedioLectura = preguntaFocusGroup.val().promedio;
                let referenciaHistorico = database.ref('StandBy').push();
                let infoHistorico = {
                    id: referenciaHistorico.key,
                    preguntaHistorico: preguntaLectura,
                    listaPromedioHistorico: listaPromedioLectura,
                };
                referenciaHistorico.set(infoHistorico);
                console.log(preguntaLectura);

                //database.ref('PreguntasActualizado/'+preguntaFocusGroup.val().id).set(null);
                database.ref('PreguntasActualizado').set(null);
            }
        )
    });*/
    
    //Un localStorage arriba para que no se me pinte de una vez... (Ojala funcione) y no funciono.
    //database.ref('StandBy').once('value', function (data) {// toca borrar estos y cambiarlos de nuevo...
    database.ref('PreguntasActualizado').once('value', function (data) {
        data.forEach(
            preguntaFocusGroup => {
                let preguntaLectura = preguntaFocusGroup.val().pregunta;
                let listaPromedioLectura = preguntaFocusGroup.val().promedio;
                let referenciaHistorico = database.ref('Historicos/'+preguntaFocusGroup.val().id);
                let infoHistorico = {
                    id: preguntaFocusGroup.val().id,
                    preguntaHistorico: preguntaLectura,
                    listaPromedioHistorico: listaPromedioLectura,
                };
                referenciaHistorico.set(infoHistorico);
                console.log(preguntaLectura);

                database.ref('PreguntasActualizado/'+preguntaFocusGroup.val().id).set(null);
            }
        )
    });


     //El primer pregunta que sale inicialmente.
    let referencia = database.ref('Preguntas/id');
    let info = {
        pregunta: preguntaText.value,
        listaPromedio: "10",
        puntaje: "10",
        promedio: "10",
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
            console.log(valor);
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

