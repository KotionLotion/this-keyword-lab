const swatches = document.querySelectorAll('.swatch');

function giveColor() {
    const color = this.dataset.color;
    this.style.backgroundColor = color;
}

swatches.forEach(s => s.addEventListener('click', giveColor));