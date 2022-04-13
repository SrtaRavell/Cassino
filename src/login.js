function abrir_login () {
    const container_login = document.querySelector('.container_login')
    const button_login = document.querySelector('.login')

    button_login.addEventListener('click', () => {
        container_login.classList.add('abrir_login')
    });
}
abrir_login()

function fechar_login () {
    const container_login = document.querySelector('.container_login')
    const button_cancelar = document.querySelector('.cancelar_login')

    button_cancelar.addEventListener('click', () => {
        container_login.classList.remove('abrir_login')
    });
}
fechar_login()

