const numero = [1, 2, 200, 10, 7, 12, 15, 8];

console.log(numero);

const nMenor10 = numero.filter((n) => {
    return n < 10;
})

console.log(nMenor10);

const comentarios = [
    {comentario: "bla bla bla", exibe:true},
    {comentario: "Evento é uma merda", exibe:false},
    {comentario: "Ótimo evento", exibe:true}

];

const comentariosOk = comentarios.filter((c) => {
    return c.exibe === true;
});

console.log(comentariosOk);