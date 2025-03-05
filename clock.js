const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function formatNumber(num) {
    return num.toString().padStart(2, '0');
}

function updateClock() {
    const dateToday = new Date();
    const hr = formatNumber(dateToday.getHours());
    const min = formatNumber(dateToday.getMinutes());
    const s = formatNumber(dateToday.getSeconds());

    // Atualiza o conteúdo dos elementos HTML
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    // Atualiza o título da página
    document.title = `Relógio Digital - ${hr}:${min}:${s}`;
}

setInterval(updateClock, 1000);