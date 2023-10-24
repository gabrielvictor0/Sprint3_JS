let arrFruta = [];//array global
function cadastrar() {
    event.preventDefault();//captura o submit do formulário

    
    document.getElementById('lista').innerHTML = "";


    let fruta = document.getElementById('fruta').value;
    fruta.trim();//limpa os espaços das estremidades
    fruta.toLowerCase();// transforma tudo pra minusculo

    arrFruta.push(fruta);

    arrFruta.sort();


    arrFruta.forEach(f => {
        let opcao = `<li>${f}</li>`
        document.getElementById('lista').innerHTML += opcao;
    });
}
