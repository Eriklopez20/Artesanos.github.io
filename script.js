// Selecciona el ícono y el footer
const whatsappFloat = document.querySelector(".whatsapp-float");
const footer = document.querySelector(".footer");

// Función para ajustar la posición del ícono flotante
function adjustIconPosition() {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    // Si el footer está en la vista, mueve el ícono hacia arriba
    whatsappFloat.style.bottom = `${windowHeight - footerTop + 20}px`;
  } else {
    // Restaura la posición original del ícono
    whatsappFloat.style.bottom = "20px";
  }
}

// Llama a la función al hacer scroll y al cargar la página
window.addEventListener("scroll", adjustIconPosition);
window.addEventListener("resize", adjustIconPosition);
adjustIconPosition(); // Llama la función al cargar