const arrPessoas = [];

function calcular(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
        alert("É necessário preencher os números ou nome corretamente");
        return;
    }

    //calcular imc
    const imc = calcularImc(altura, peso);
    const situacao = retornaSituacao(imc);

    //Modo padrão de lista de objeto

    // const pessoa = {
    //     nome : `${nome}`,
    //     altura :`${altura}`,
    //     peso : `${peso}`,
    //     imc : `${imc}`,
    //     situacao : `${situacao}`
    // };

    //SHORTHAND - funciona quando a propriedade e valor contém o mesmo nome de variável
    const pessoa = {
        nome,
        altura,
        peso,
        imc,
        situacao
    };

    arrPessoas.push(pessoa);

    listarPessoas();
}

function calcularImc(altura, peso) {
    return peso / Math.pow(altura, 2);
    return peso / altura ^ 2;
    return peso / (altura * altura);

}

function retornaSituacao(imc) {
    //validar o imc
    if (imc < 18.5) {
        return "Magreza Severa";
    } else if (imc > 18.5 && imc < 24.99) {
        return "Peso Normal";
    } else if (imc > 2 && imc < 29.99) {
        return "Acima do peso";
    } else if (imc > 30 && imc < 34.99) {
        return "Obesidade I";
    } else if (imc > 35 && imc < 39.99) {
        return "Obesidade II (severa)";
    } else {
        return "Cuidadoooooooo!!!";
    }
}

function listarPessoas() {

//     let template = `<tr>
//     <td>Rubens</td>
//     <td>1,60</td>
//     <td>68</td>
//     <td>10</td>
//     <td>Peso pena</td>
// </tr>`;

//      arrPessoas.forEach(pessoa => {
//          console.log(pessoa.nome, pessoa.altura, pessoa.peso, pessoa.imc.toFixed(2), pessoa.situacao)
//     });

let template = ""

arrPessoas.forEach((p) => {
    template += `<tr>
    <td>${p.nome}</td>
    <td>${p.altura}</td>
    <td>${p.peso}</td>
    <td>${p.imc.toFixed(2)}</td>
    <td>${p.situacao}</td>
</tr>`
});

document.getElementById('cadastro').innerHTML = template;

};
