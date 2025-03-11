function buscarEnDuckDuckGo(event) {
    // Verifica si la tecla presionada es Enter (código 13)
    if (event.key === "Enter") {
        // Obtiene el texto del label
        var textoBusqueda = document.getElementById("textoBusqueda").innerText;
        // Codifica el texto para ser usado en una URL
        var url = "https://duckduckgo.com/?q=" + encodeURIComponent(textoBusqueda);
        // Abre la búsqueda en una nueva pestaña
        window.open(url, "_blank");
    }
}

// Asocia el evento al input o al elemento adecuado
document.getElementById("textoBusqueda").addEventListener("keydown", buscarEnDuckDuckGo);
