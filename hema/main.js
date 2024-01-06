function handleMouseOver(theme) {
    document.body.classList.add(theme + '-theme');
}

function handleMouseOut() {
    document.body.classList.remove('dark-theme', 'light-theme');
}
