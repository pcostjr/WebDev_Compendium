button_move = document.getElementById("button_move");
button_rotate = document.getElementById("button_rotate");
button_scale = document.getElementById("button_scale");
button_color = document.getElementById("button_color");
square = document.getElementById("square");


button_move.addEventListener('click', ()=> move_around())
button_rotate.addEventListener('click', () => rotate_around())
button_scale.addEventListener('click', () => change_scale())
button_color.addEventListener('click',()=> change_color())

function move_around() {
    square.classList.toggle('move_around');
    button_move.classList.toggle('pressed');
}

function rotate_around() {
    square.classList.toggle('rotate_around')
    button_rotate.classList.toggle('pressed')
}

function change_scale() {
    square.classList.toggle('change_scale')
    button_scale.classList.toggle('pressed')
}

function change_color() {
    square.classList.toggle('change_color')
    button_color.classList.toggle('pressed')
}
