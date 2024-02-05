let patente = '';
let vitorias = 0;
let derrotas = 0;
let saldo = 0;
let titulo = '';

function retornaSaldoDePartidasRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function mostraResultadoDasPartidas(checaTitulo = true) {
    vitorias = document.querySelector('#victories').value.trim();
    derrotas = document.querySelector('#defeats').value.trim();
    saldo = retornaSaldoDePartidasRankeadas(vitorias, derrotas);
    titulo = document.querySelector('.container__content h1');

    if (vitorias <= 10) {
        patente = 'Ferro';
    } else if (vitorias > 10 && vitorias < 21) {
        patente = 'Bronze';
    } else if (vitorias >= 21 && vitorias < 51) {
        patente = 'Prata';
    } else if (vitorias >= 51 && vitorias < 81) {
        patente = 'Ouro';
    } else if (vitorias >= 81 && vitorias < 91) {
        patente = 'Diamante';
    } else if (vitorias >= 91 && vitorias < 101) {
        patente = 'Lendário';
    } else if (vitorias >= 101) {
        patente = 'Imortal';
    }

    titulo.innerHTML = checaTitulo ? `
        O Herói tem de saldo de ${saldo} está no nível de ${patente}
    ` : 'Saldo de partidas Rankeadas';
}

function resetResultados() {
    vitorias = 0;
    derrotas = 0;
    mostraResultadoDasPartidas(false);
}