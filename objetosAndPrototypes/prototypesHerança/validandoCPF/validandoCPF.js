function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCpf.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo 
}

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1
    const digito = cpfArray.reduce((ac, val) => {
        ac += (Number(val) * regressivo)
        regressivo--
        return ac
    }, 0)

    const conta = 11 - (digito % 11) 
    
    return conta > 9 ? '0' : String(conta)
}

ValidaCpf.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCpf('705.484.450-52')
if(cpf.valida()) {
    console.log("CPF Válido")
} else {
    console.log("CPF Inválido")
}
