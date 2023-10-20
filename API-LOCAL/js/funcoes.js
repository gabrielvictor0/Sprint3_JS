const ulrViaCep = "https://viacep.com.br/ws";

function cadastrar(e) {
    e.preventDefault();
    alert("Cadastrar...");
}

async function buscarEndereco(cep) {
    //complemento do endereco da api
    const resource = `/${cep}/json/`

    
    try {
        const promise = await fetch(ulrViaCep + resource);

        //transformou o json em um objeto ou array
        const endereco = await promise.json();

        
        //resetar o span do cep invalido
        document.getElementById("not-found").innerText = "";

        console.log(endereco);
    } catch (error) {
        console.log(error);

        document.getElementById("not-found").innerText = "cep invalido";
    }
}


function preencherCampos(endereco) {
    document.getElementById("endereco").value = `${endereco.logradouro}`;
    document.getElementById("cidade").value = `${endereco.localidade}`;
    document.getElementById("estado").value = `${endereco.uf}`;

}