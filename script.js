const container = document.querySelector('.wrapper');
// let scrollLine = document.querySelector('.scroll');

container.addEventListener('wheel', (e)=> {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    // scrollLine.style.width = container.scrollLeft / 2 + 'px';
})