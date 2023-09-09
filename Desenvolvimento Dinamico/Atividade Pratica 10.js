class Funcionario {
    constructor(nome, idade, cargo) {
         this.nome = nome;
         this.idade = idade;
         this.cargo = cargo;
}

    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
}

    trabalhar() {
      console.log(`${this.nome} está trabalhando.`);
}
}
class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
         super(nome, idade, "gerente");
         this.departamento = departamento;
}
    gerenciar() {
      console.log(`${this.nome} é gerente do departamento de ${this.departamento}!`);
}
}
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
         super(nome, idade, "desenvolvedor");
         this.linguagem = linguagem;
}
    programar() {
      console.log(`${this.nome} está executando um projeto em ${this.linguagem}.`);
}
}
  const gerente = new Gerente("Felipe", 22, "TI");
  const desenvolvedor = new Desenvolvedor("Thiago", 33,"JavaScript");
  
  
  gerente.seApresentar();
  gerente.trabalhar();
  gerente.gerenciar();
  desenvolvedor.seApresentar();
  desenvolvedor.trabalhar();
  desenvolvedor.programar();
