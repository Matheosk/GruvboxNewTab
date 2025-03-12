let cuadroBusqueda = document.getElementById("textoBusqueda")

cuadroBusqueda.value = ""

function buscarEnDuckDuckGo(event) {
    if (event.key === "Enter") {
        let texto = cuadroBusqueda.value;
        let url = `https://duckduckgo.com/?q=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
    }
}

// Asocia el evento al input o al elemento adecuado
cuadroBusqueda.addEventListener("keydown", buscarEnDuckDuckGo);
