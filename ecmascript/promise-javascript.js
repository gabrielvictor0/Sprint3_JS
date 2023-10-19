const api = new Promise((resolve, reject) => {

    setTimeout(()=>{
        console.log("Acessando o bancos e retornando os dados");
    }, 1000)

    
    const sucesso = false;

    if(sucesso)
    return resolve("Deu certo, toma aqui od dados");
    else return reject("Deu ruim")

});

const  retorno = api;
console.log(api);