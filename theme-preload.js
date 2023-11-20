let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
if (window.localStorage) {
    isDark = window.localStorage.getItem('dark-mode')
}
if (isDark) {
    document.querySelector("body").classList.add('dark-mode')
}
