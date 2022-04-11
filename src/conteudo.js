document.querySelectorAll("[link]").forEach((link) => {
    const conteudo = document.getElementById("content");
    link.onclick = function (e) {
        e.preventDefault();
        fetch(link.getAttribute("link"))
            .then((resp) => resp.text())
            .then((html) => (conteudo.innerHTML = html));
    };
});
