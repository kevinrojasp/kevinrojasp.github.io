/* FUNCION QUE PERMITE ELEMENTOS DE SECCION QUIENES SOMOS HACER CLICK. ESCONDER PARRAFOS Y HACER APARECER
TEXTOS CON UNA PEQUEÑA TRANSICIÓN */

document.addEventListener("DOMContentLoaded", function () {
  const iconContainers = document.querySelectorAll(".icon-container");
  iconContainers.forEach((container) => {
    container.addEventListener("click", function () {
      const paragraph = this.parentElement.querySelector("p");
      paragraph.classList.toggle("hidden");
    });
  });
});

/* FUNCION QUE PERMITE CAMBIAR COLOR DEL NAV Y "a" CUANDO SE HACE SCROLL,
ESTA FUNCION PERMITE PODER TENER UNA MEJOR VISUALIZACION DEL NAVEGADOR Y SEPARAR
EL CONTENIDO DE LA PAGINA WEB CON EL MISMO NAVEGADOR */

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var navLinks = navbar.getElementsByTagName("a");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#9BC1BC";
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#000000";
    }
  } else {
    navbar.style.backgroundColor = "transparent";
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#ffffff";
    }
  }
});
