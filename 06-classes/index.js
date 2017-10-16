class Disciplina {
    constructor(ano, nome){
        if (ano < 1 || ano > 4) throw `ano ${ano} inválido`;
        this.ano = ano;
        this.nome = nome;
    }
}

//objetos do tipo Aluno devem ter matrícula e nome com pelo menos 5 caracteres
class Aluno { 
    //construtor
    constructor(matricula, nome) {
        if (nome.length < 5) throw 'nome inválido';
        //atributo ou propriedade
        this.matricula = matricula;
        this.nome = nome;
        //aluno AGREGA disciplinas
        this.disciplinas = [];
    }

    matricular(d) {
        this.disciplinas.push(d);
    }
    //método (função que age sobre um objeto)
    toHTML() {
        return `<b>${this.matricula}</b>&nbsp;&nbsp<i>${this.nome}</i>`;
    }
}

let a = new Aluno('11223344', 'Guido van Rossum');
console.log(a.matricula);
document.querySelector('div').innerHTML = a.toHTML();

let mat2 = new Disciplina(2, 'Matemática II');
let log = new Disciplina(1, 'Lógica de Programação');

a.matricular(mat2);
a.matricular(log);

console.log(a.disciplinas);