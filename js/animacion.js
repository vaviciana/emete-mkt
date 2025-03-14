document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.querySelector(".manifiesto");
    const duplicateText = textContainer.innerHTML; // Duplicamos el contenido
    textContainer.innerHTML += duplicateText;
});