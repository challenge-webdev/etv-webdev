const btnHamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

// Adiciona e retira a classe active do menu
btnHamburguer.addEventListener('click', () => {
    menu.classList.toggle('active');
});
