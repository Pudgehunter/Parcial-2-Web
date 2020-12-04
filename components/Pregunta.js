class Pregunta{

    database = firebase.database();

    constructor(preguntaFocusGroup){
        this.preguntaFocusGroup = preguntaFocusGroup;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.className = 'componentId'

        let preguntaMostrar = document.createElement('div');
        preguntaMostrar.innerHTML = this.preguntaFocusGroup.pregunta;
        
        let puntajeMostrar = document.createElement('div');

        //Promedio de puntajes, pues que se vaya actualizando
        let asdf = this.preguntaFocusGroup.listaPromedio;
        var a = [];
        a = asdf.split(":");

        //Hay un undefined molestandome y me hace que no me funcione el codigo.

        let sumador;

        a.forEach( i => { sumador += i});

        let ab = sumador+"/a.length";

        puntajeMostrar.innerHTML = ab;

        component.appendChild(preguntaMostrar);
        component.appendChild(puntajeMostrar);

        return component;
    }

}