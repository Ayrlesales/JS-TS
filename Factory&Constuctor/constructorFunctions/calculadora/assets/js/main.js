/* constroi também um objeto porém sempre inicia a função com letra
maiúscula e antes de invocar coloca um new antes.
this é vomo uma variavél global */

function CriaCalculadora() {
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = () => {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        };

        this.realizaConta = () => {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                //eval computa qualquer código javaScript como uma string. Nunca usar eval

                if(!conta){
                    alert('conta inválida');
                    return
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('conta inválida');
                return;
            }
        };

        this.clearDisplay = () => this.display.value = ''

        this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
            //slice: o primeiro n é a posição e o segundo n retirado

        this.cliqueBotoes = () => {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
                if (el.classList.contains('btn-clear')) this.clearDisplay();            
                if (el.classList.contains('btn-del')) this.apagaUm();
                if (el.classList.contains('btn-eq')) this.realizaConta();
            });
        };

        this.btnParaDisplay = (valor) => this.display.value += valor;
}

const calculadora = new CriaCalculadora();
calculadora.inicia();
