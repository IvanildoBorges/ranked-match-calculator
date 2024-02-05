function retornaSaldoDePartidasRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function mostraResultadoDasPartidas() {
    let patente = '';
    let vitorias = 85;
    let derrotas = 5;
    let saldo = retornaSaldoDePartidasRankeadas(vitorias, derrotas);
    const titulo = document.querySelector('.container__content h1');

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

    titulo.innerHTML = `
        O Herói tem de saldo de ${saldo} está no nível de ${patente}
    `;
}