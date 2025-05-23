class Contato {
    constructor() {
        this.nome = null
        this.email = null
        this.fone = null
        this.idade = null
        this.tipoContato = null
        this.mensagem = null
    }

    enviarFormulario() {
        this.nome = document.getElementById("nome")
        this.fone = document.getElementById("fone")
        this.email = document.getElementById("email")
        this.idade = document.getElementById("idade")
        this.tipoContato = document.querySelector('input[name="tp_contato"]:checked')
        this.mensagem = document.getElementById("mensagem")
        alert(`Enviado! Nome: ${this.nome.value}, idade: ${this.idade.value}, email: ${this.email.value}, mensagem: ${this.mensagem.value} contato: ${this.tipoContato.value}`)
    }
}

contato = new Contato()

