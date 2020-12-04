class Historicos{

    constructor(preguntasHistoricosFocusGroup){
        this.preguntasHistoricosFocusGroup = preguntasHistoricosFocusGroup;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.className = 'componentIdHistorico';

        let a = document.createElement('div');
        a.innerHTML = this.preguntasHistoricosFocusGroup.preguntaHistorico;
        

        let b = document.createElement('div');
        b.innerHTML = this.preguntasHistoricosFocusGroup.listaPromedioHistorico;
        b.className = 'bClass';

        //Los botones de X para borrar
        let cerrarBtn = document.createElement('button');
        cerrarBtn.innerHTML = 'X';
        cerrarBtn.className = 'cerrarBtnClass';

        component.appendChild(a);
        component.appendChild(b);
        component.appendChild(cerrarBtn);

        //Metodo de cerrar ese boton
        cerrarBtn.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('Historicos/'+this.preguntasHistoricosFocusGroup.id).set(null);
        });

        return component;
    }

}