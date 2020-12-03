class Pregunta{

    constructor(preguntaFocusGroup){
        this.preguntaFocusGroup = preguntaFocusGroup;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.innerHTML = this.preguntaFocusGroup.pregunta;
        return component;
    }

}