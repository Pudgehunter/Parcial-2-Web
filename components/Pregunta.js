class Pregunta{

    constructor(preguntaFocusGroup){
        this.preguntaFocusGroup = preguntaFocusGroup;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.className = 'componentId';
        component.id = 'promedioId';

        let preguntaMostrar = document.createElement('div');
        preguntaMostrar.innerHTML = this.preguntaFocusGroup.pregunta;
        preguntaMostrar.className = 'letrasPregunta';
        
        let puntajeMostrar = document.createElement('div');
        puntajeMostrar.className = 'letrasPuntajes';

        //Promedio de puntajes, pues que se vaya actualizando
        
        let puntajesPromedio = this.preguntaFocusGroup.listaPromedio;
        var sum = 0;
        var promedioNumbers = [];
        promedioNumbers = puntajesPromedio.split(":");

        //Carreta nivel Dios y funciono xd
        var ojalaFuncione = [];
        for (let i = 0; i < promedioNumbers.length; i++) {
            ojalaFuncione[i] = parseInt(promedioNumbers[i]); 
        }
        let asdfab = 0;


        ojalaFuncione.forEach(myFunction);

        function myFunction(item) {
            sum += item;
            //Les resto los primeros 0 de predeterminada para que no salga raro el promedio
            let ab = sum/(ojalaFuncione.length);
            puntajeMostrar.innerHTML = "promedio: " + ab;
            asdfab = ab;
        }

        component.appendChild(preguntaMostrar);
        component.appendChild(puntajeMostrar);

        //No se si funcione, que se actualice los nuevos números cada vez.
        let referencia = database.ref('PreguntasActualizado').push();

        let info = {
            id: referencia.key,
            pregunta: this.preguntaFocusGroup.pregunta,
            listaPromedio: this.preguntaFocusGroup.listaPromedio,
            puntaje: this.preguntaFocusGroup.puntaje,
            promedio: asdfab,
        };
        referencia.set(info);

        

        return component;
    }

    

}