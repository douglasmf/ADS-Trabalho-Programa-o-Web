//carousel projetos
let currentIndex = 0;
const itemWidth = 900;
const totalItems = 3;

function showSlide(index) {
const carousel = document.getElementById('carousel');

if (index >= totalItems) {
    currentIndex = 0;
} else if (index < 0) {
    currentIndex = totalItems - 1;
} else {
    currentIndex = index;
}

carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
carousel.style.transition = 'transform 0.5s ease-in-out';
}

function nextSlide() {
showSlide(currentIndex + 1);
}

function prevSlide() {
showSlide(currentIndex - 1);
}

// form de contato
const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio real
    let erros = [];
    const nome = form.elements["nome"].value.trim();
    const email = form.elements["email"].value.trim();
    const mensagem = form.elements["mensagem"].value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome) {
      erros.push("Preencha o campo nome.");
    }
    if (!email || !emailValido.test(email)) {
      erros.push("Insira um e-mail válido.");
    }
    if (!mensagem) {
      erros.push("Digite sua mensagem.");
    }

    if (erros.length > 0) {
        alert(erros.join("\n"));    
        return;
        
    }

    alert("Mensagem enviada com sucesso!");
    form.reset(); // limpa o formulário
  });
