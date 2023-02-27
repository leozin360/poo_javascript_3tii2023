//CRIANDO A CLASSE/OBJETO PESSOA COM
//SEUS ATRIBUTOS NOME E SOBRENOME
//OBS: O OBJETO PODE TER UM OU MILHARES DE
//ATRIBUTOS DEPENDENDO DA NECESSIDADE DA APLICAÇÃO.
function Pesssoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    object.freeze(this);

}

//INSTANCIANDO O OBJETO CRIADO
const p1 = new Pessoa('Thiago', 'Fortenski');
const p2 = new Pessoa('Lingui', 'Ceta');
const p3 = new Pessoa('Sujiro', 'Kimimame');

console.log(p1);
console.log(p2);
console.log(p3);
