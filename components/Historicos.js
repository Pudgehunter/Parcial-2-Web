class Historicos{

    constructor(preguntasHistoricosFocusGroup){
        this.preguntasHistoricosFocusGroup = preguntasHistoricosFocusGroup;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.innerHTML = this.preguntasHistoricosFocusGroup.preguntaHistorico;
        return component;
    }

}