
        function calcular() {
            event.preventDefault();

            let n1 = parseFloat(document.getElementById('n1').value);
            let n2 = parseFloat(document.getElementById('n2').value);
            let op = document.getElementById('operacao').value;
            let resultado;//undefined

            if( isNaN(n1) || isNaN(n2)) {
                alert("É necessário digitar apenas números!")
                return;
            }

            if(op == '+') {
                resultado = somar(n1, n2);
            } else if(op == '-') {
                resultado = subtrair(n1,n2);
            } else if(op == '*') {
                resultado = multiplicar(n1,n2);
            }else if(op == '/'){
                resultado = dividir(n1,n2);
            }

            document.getElementById('result').innerText = resultado;
        
        }



        function subtrair(n1, n2) {
            return n1 - n2;
        }

        function somar(n1, n2) {

            return n1 + n2;
        }
        
        function multiplicar(n1,n2) {
            return n1 * n2;
        }

        function dividir(n1,n2) {
            if( n2 == 0) {
                return "Não é um número!";
            }
            return n1 / n2;
        }

