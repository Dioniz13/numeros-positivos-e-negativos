let diaDaSemana = prompt('Qual o dia da semana?');
if (diaDaSemana =='domingo' || diaDaSemana == 'sábado') {
    alert(`Hoje é ${diaDaSemana}. Bom fim de semana!`);
}
else if (diaDaSemana == 'segunda' || diaDaSemana == 'terça' || diaDaSemana == 'quarta' || diaDaSemana == 'quinta' || diaDaSemana == 'sexta') {
    alert(`Hoje é ${diaDaSemana}. Boa semana!`);
}
else {
    alert('Dia inválido!');
}