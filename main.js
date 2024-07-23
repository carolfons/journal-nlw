const atividade = {
    nome:"Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: false

}

const atividades = [
    atividade,{
        nome:"Academia",
        data: new Date("2024-07-08 12:00"),
        finalizada: true
    },

]

atividades = []

const criarItemDaAtividade = (atividade) => {

    let input = '<input type = "checkbox"'

    if(atividade.finalizada){
        input+= 'checked'
    }

    input += '>'


    return `
    <div>
        ${input}
        <span> ${atividade.nome} </span>
        <time> ${atividade.data} </time>
        </div> 
    `
}

const atualizarListaDeAtividades = () =>{
    const section = document.querySelector('section')

    //verificando se a lista esta vazia
    if(atividades.length == 0){
        section.innerHTML = `<p> Nenhuma Atividade cadastrada </p>`
        return
    }
    
    for (let atividade of atividades) {
        section.innerHTML += criarItemDaAtividade(atividade) 
    }
}


atualizarListaDeAtividades()
