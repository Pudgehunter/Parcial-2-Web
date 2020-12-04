class Historicos{

    constructor(preguntasHistoricosFocusGroup){
        this.preguntasHistoricosFocusGroup = preguntasHistoricosFocusGroup;
    }

    render = ()=>{
        let component = document.createElement('div');

        let a = document.createElement('div');
        a.innerHTML = this.preguntasHistoricosFocusGroup.preguntaHistorico;

        let b = document.createElement('div');
        b.innerHTML = this.preguntasHistoricosFocusGroup.listaPromedio;

        component.appendChild(a);
        component.appendChild(b);

        return component;
    }

}