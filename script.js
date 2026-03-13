function cambiarColorAleatorio(elemento){
    const colores = ["green", "blue", "red"];
    const indice = Math.floor(Math.random() * colores.length);
    elemento.style.color = colores[indice];
}