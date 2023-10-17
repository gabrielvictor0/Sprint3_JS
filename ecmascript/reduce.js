// const numeros = [10, 12, 20];

// const somatorio = numeros.reduce((total,n) => {
//     return total + n
// }, 0);

// console.log(somatorio);

const produtos = [
    {produto: "Camiseta", preco: 500},
    {produto: "Tenis", preco: 350.97},
    {produto: "Jaqueta de couro", preco: 700.01},
];

let totProduto = produtos.reduce((vlInicial, Op) => {
    return vlInicial + Op.preco;
}, 0);

console.log(`Gerente, o total de vendas é: R$${totProduto}`);