const box = document.querySelector('.box');

box.addEventListener('click', (event) => {

    // BUG:
    // Arrow functions dont have a 'this'. Instead, they inherit 'this' from the scope. 'this' is NOT
    // the .box element, so this.classList is undefined and causes an error.

    event.currentTarget.classList.add('active');

    // FIX:
    // event.currentTarget returns the element the event listener. This behaves the same way 'this' 
    // would inside a normal function handler
});
