const buttons = document.querySelectorAll('.color-btn');

function changeColor(){
    this.style.backgroundColor = 'yellow';
}
//forEach loop through buttons
buttons.forEach(b => b.addEventListener('click', changeColor));