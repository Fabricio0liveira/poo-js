//Classe
class Conta {
    //Atributos
    
    //_numero;
    //_saldo;
    //_usuario;
    //_limite;
    //_agencia;

    //Método
    constructor (numero, saldo, usuario, limite) {
        
        this._numero = numero;
        this._saldo = saldo;
        this._usuario = usuario;
        this._limite = limite;
        this._agencia = 1602;

    }

    depositar (valor) {
        this._saldo += valor; 
    }
    mostrarConta(){
        console.log(`Esta é a conta ${this._numero}, com saldo ${this._saldo}, do usuário: ${this._usuario}, e o limite é ${this._limite}, agencia: ${this._agencia}.`);
    }
}

//Criando ou instanciando um objeto da classe "Conta"
var conta1 = new Conta(123456, 500.00, "Lucas", 2000.00);
conta1.depositar(200.00);
conta1.mostrarConta();
conta1.saldo = 1000.00;
console.log(conta1.saldo);



//conta1.mostrarConta();
//console.log(conta1.agencia);
//var conta2 = new Conta(234567, 400.00, "Lucas", 1500.00);
//conta2.mostrarConta();
