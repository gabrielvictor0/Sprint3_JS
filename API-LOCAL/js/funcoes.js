const ulrViaCep = "https://viacep.com.br/ws";
const urlCepProfessor = "http://172.16.35.155:3000/myceps";


function cadastrar(e) {
    e.preventDefault();
    alert("Cadastrar...");
}

async function buscarEndereco(cep) {
    //complemento do endereco da api
    const resource = `/${cep}/json/`

    
    try {
        //const promise = await fetch(ulrViaCep + resource);
        const promise = await fetch(`${urlCepProfessor}/${cep}`)

        //transformou o json em um objeto ou array
        const endereco = await promise.json();

        document.getElementById("endereco").value = `${endereco.logradouro}`;
        document.getElementById("cidade").value = `${endereco.localidade}`;
        document.getElementById("estado").value = `${endereco.uf}`;
        //resetar o span do cep invalido
        document.getElementById("not-found").innerText = "";

 
    } catch (error) {
        console.log(error);

        document.getElementById("not-found").innerText = "cep invalido";
    }
}


// function preencherCampos() {


// }