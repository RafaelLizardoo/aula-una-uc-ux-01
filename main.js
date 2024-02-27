console.log("Teste");

var x = 1;
var y = 2.1;
var dia = "Segunda-Feira";

console.log('O valor de x: é: ' + x);
console.log('O valor de y: é: ' + y);
console.log('Hoje é dia: ' + dia);

var z = x * y;

console.log('O valor de x * y é: ' + z);

var z = x * y + dia;

console.log('O valor de x * y + dia é: ' + z);

console.log(typeof z);
console.log(typeof x);
console.log(typeof y);
console.log(typeof dia);

//json
const pessoa = {
    nome: 'Rafael',
    profissao: "VG",
    idade: "22",
};

console.log('O nome é: ' + pessoa.nome + ' A profissão é: ' + pessoa.profissao + ' A idade é: ' + pessoa.idade);

var aviao = {
    Empresa: 'Latam',
    Assentos: 120,
    Banheiros: 2
};

console.log('Empresa: '+ aviao.Empresa);
console.log('Assentos: ' + aviao.Assentos);
console.log('Banheiros: ' + aviao.Banheiros);
console.log(aviao);

function Ola() {
  console.log('Function');  
};

const fun = () => {
    console.log(Ola);
};

function concatenarnome(nome,sobrenome){
    console.log('O seu nome é: '+ nome +' '+ sobrenome);
}

concatenarnome();