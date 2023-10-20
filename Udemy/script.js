function atualizarDataHora() {
    const dataHoraAtual = new Date();
    const elementoDataHora = document.getElementById('data-hora-atual');

    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    };

    elementoDataHora.textContent = dataHoraAtual.toLocaleString('pt-BR', options);
}

atualizarDataHora(); // Atualiza a data e hora imediatamente

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);

var fsex = document.getElementsByName('nade')
var img = document.createElement('img')
img.setAttribute('id', 'foto')

function carregar() {
if (fsex[0].checked) {
    // Naruto normal
    img.setAttribute('src', 'normal-naruto.png');
} else if (fsex[1].checked) {
    // Demonio Naruto
    img.setAttribute('src', 'demonio-naruto.png');
}
document.body.appendChild(img) //para pararecer a imagem com o img.setAttribute

for (var i = 0; i < fsex.length; i++) {
    fsex[i].addEventListener('change', exibirImagem);
}
exibirImagem();
}