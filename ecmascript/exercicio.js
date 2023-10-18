const filmes = [ superman = {
    titulo : "superman",
    duracao : "90minutos",
    diretor : "Cristiano Ronaldo",
    lancamento : "2024"
    
}, pudim = {
    titulo: "pudim",
    duracao: "100minutos",
    diretor : "Messi",
    lancamento: "2035"
}]

//const {titulo, duracao, diretor, lancamento} = superman;
//const {tituloPudim, duracaoPudim, diretorPudim, lancamentoPudim} = pudim;

filmes.forEach( ({titulo, duracao, diretor, lancamento}) => {
   // const {titulo, duracao, diretor, lancamento} = f;

    console.log(`
|||||||| CARTAZ ||||||||
========================
FILME :${titulo}
Duracao :${duracao}
Diretor :${diretor}
lancamento :${lancamento}
========================
`);

});

