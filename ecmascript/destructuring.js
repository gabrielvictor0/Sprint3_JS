// const camisaLacoste = {
//     descricao: "Camisa Lacoste",
//     preco: 589.97,
//     tamanho: "m",
//     cor: "Amarela",
//     presente: false
// }

// const {descricao, preco} = camisaLacoste;
// const {presente} = camisaLacoste;


// console.log("PRODUTO:");
// console.log();
// console.log(`
//     =======================
//     Descrição: ${descricao}
//     Preço: ${preco} 
//     Presente: ${presente ? "Sim" : "Não"}
//     =======================
// `);

const evento = {
    dataEvento : new Date(),
    descricao : "evento de JavaScript",
    titulo : "programação web",
    presenca : true,
    comentario : "evento top com o edu"
}

let {dataEvento, descricao, titulo, presenca, comentario} = evento;

console.log(`
Data do Evento :${dataEvento}
Descrição :${descricao}
Titulo do Evento :${titulo}
Presenca :${presenca ? "Confirmada" : "Cancelada"}
Comentário do Evento: ${comentario}`);