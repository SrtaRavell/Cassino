function click_modo(){
    const manual = document.querySelector('.manual')
    const auto = document.querySelector('.auto')
    
    manual.addEventListener('click', () => {
        manual.classList.add('modo_active')
        auto.classList.remove('modo_active')
        document.querySelectorAll('[modo]').forEach(link =>{
            const conteudo = document.querySelector('.conteudo_modo')

            link.onclick = function(e) {
                e.preventDefault()
                fetch(link.getAttribute('modo'))
                    .then(resp => resp.text())
                    .then(html => conteudo.innerHTML = html)
            }
        })
    })

    auto.addEventListener('click', () => {
        auto.classList.add('modo_active')
        manual.classList.remove('modo_active')
        document.querySelectorAll('[modo]').forEach(link =>{
            const conteudo = document.querySelector('.conteudo_modo')

            link.onclick = function(e) {
                e.preventDefault()
                fetch(link.getAttribute('modo'))
                    .then(resp => resp.text())
                    .then(html => conteudo.innerHTML = html)
            }
        })
    })
}
click_modo()