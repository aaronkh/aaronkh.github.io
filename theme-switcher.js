document.querySelectorAll(".themable")
    .forEach(el => el.classList.add('themable-transition'))
document.getElementById('theme-switcher').addEventListener('click', () => {
    if (window.localStorage.getItem('dark-mode')) {
        window.localStorage.removeItem('dark-mode')
    } else {
        window.localStorage.setItem('dark-mode', 'true')
    }
    document.querySelectorAll(".themable").forEach(el => el.classList.toggle('dark-mode'))
})