// Carrossel

// Obtendo todas imagens do carrossel
const imgs = document.querySelector(".container-image");
const img = document.querySelectorAll(".img-carrossel")

let idx = 0;

function carrossel() {
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 3000);


// Quiz
const divQuiz = document.getElementById("quiz-game")
const respostaCorreta = document.getElementById("respostaB");


let pontos = 0;

function responderQuiz(){

    if(respostaCorreta.checked){
        pontos++
    }

    divQuiz.innerHTML = `
        <div class='container-fim'>
            <h3>Parabéns você finalizou o quiz!<h3>

            <img src='/public/assets/images/svg/ganhou.svg'>

            ${pontos} pontos.
        </div>
    `

    alert("Parabéns!")
}





