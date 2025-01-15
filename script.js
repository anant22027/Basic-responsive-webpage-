// Handle collapsible menu
const leftMenu = document.querySelector('.left-menu');
leftMenu.addEventListener('click', () => {
    leftMenu.classList.toggle('collapsed');
});

// Handle screen resizing logic
function adjustWidth() {
    const width = window.innerWidth;
    if (width >= 992 && width <= 1600) {
        document.body.style.transform = 'scale(0.9)';
    } else if (width >= 700 && width <= 767) {
        document.body.style.transform = 'scale(0.8)';
    } else if (width >= 600 && width < 700) {
        document.body.style.transform = 'scale(0.75)';
    } else if (width <= 600) {
        document.body.style.transform = 'scale(0.5)';
    } else {
        document.body.style.transform = 'scale(1)';
    }
}

// Call adjustWidth on load and on resize
window.addEventListener('resize', adjustWidth);
adjustWidth();
