
// Declarando os inputs que são sempre usados nas funções
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Declarando os elementos HTML que são sempre usados nas funções
const alertElement = document.getElementById("alert");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita a atualização da página

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === "webdev@fiap.com" && password === "123") {
        window.location.href = "./pages/home"; // Redireciona para a página home
    } else {
        alertElement.innerHTML = "Email ou senha incorretos! Tente novamente.";
    }
});
