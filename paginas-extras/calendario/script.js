const dia = new Date();
const primeiroDia = new Date();
const data_atual = new Date();

const recarregarCalendario = () => {
    primeiroDia.setDate(1);

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    const semana = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sab"
    ];

    const ano_atual = data_atual.getFullYear();
    const mes_atual = meses[data_atual.getMonth()];
    const mes = meses[dia.getMonth()];
    const dia_atual = data_atual.getDate();
    const dia_semana = semana[data_atual.getDay()];
    const diasDoMes = document.querySelector(".dias");
    const ultimoDiaDoMes = new Date(dia.getFullYear(), dia.getMonth() + 1, 0).getDate();

    const ultimoDiaDoMesSemana = new Date(dia.getFullYear(), dia.getMonth() + 1, 0).getDay();
    const primeiroDiadoMes = primeiroDia.getDay();
    const proximosDias = 7 - ultimoDiaDoMesSemana - 1;

    document.querySelector(".data h1").innerHTML = `${mes}`;

    /*Método Fácil, mas pra gringo ---> document.querySelector(".data p").innerHTML = dia.toDateString(); */

    document.querySelector(".data p").innerHTML = `${dia_semana}. ${dia_atual} de ${mes_atual} de ${ano_atual}`;

    let dias = "";


    /* Definindo quantos dias do mês anterior serão exibidos no calendário */

    for(let i = 0; i <= primeiroDiadoMes - 1; i++) {
        let ultimoDiaDoMesAnt = new Date(dia.getFullYear(), dia.getMonth(), 0).getDate();
        ultimoDiaDoMesAnt = ultimoDiaDoMesAnt - (primeiroDiadoMes - 1) + i;
        dias += `<div class = "dia-ant">${ultimoDiaDoMesAnt}</div>`;
        diasDoMes.innerHTML = dias;
    }

    /* Definindo quantos dias têm no mês e qual deles é o dia atual */

    for(let i = 1; i <= ultimoDiaDoMes; i++) {
        if ((i == data_atual.getDate() && mes_atual == data_atual.getMonth()) || dia.getMonth() == data_atual.getMonth()) {
            console.log(true)
         if (i == data_atual.getDate() && dia.getMonth() == data_atual.getMonth()) {
            console.log('true + 1')
            dias += `<div class = "hoje">${i}</div>`;
         } else {
            console.log(false)
            dias += `<div>${i}</div>`;
         }
        } else {
            console.log('false + 1')
            dias += `<div class="mes-ant-prox">${i}</div>`;
        }
 
    }

    /* Definindo quantos dias do próximo mês serão exibidos no calendário */

    for (let i = 1; i <= proximosDias; i++) {
        dias += `<div class = "prox-dia">${i}</div>`;
        diasDoMes.innerHTML = dias;
    }

    console.log(dia)
    console.log(data_atual)
};

recarregarCalendario();

function mesAnt() {
    dia.setMonth(dia.getMonth() - 1);
    primeiroDia.setMonth(primeiroDia.getMonth() - 1);
    recarregarCalendario();
}

function proxMes() {
    dia.setMonth(dia.getMonth() + 1);
    primeiroDia.setMonth(primeiroDia.getMonth() + 1);
    recarregarCalendario();
}