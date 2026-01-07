// in case you decided to take a look at the script to see what it does, I've also added comments here
// these lines up here create 'constants' that we can use to bring our html tags into javascript so we can use them
const slider = document.getElementById('box_slider');
const movingBox = document.getElementById('box_move');
const positionValue = document.getElementById('pos_label');


// an event listener is something that executes the code inside on a specific behavior, in this case the 'input'
// event occurs every time we move the slider around
slider.addEventListener('input', function() {
    // the current position of the slider is saved
    const position = this.value;
    // and we add the 'transform; translateX(position)' propertly as a style tag
    // what this will do is move the box by offsetting its original position
    movingBox.style.transform = `translateX(${position}px)`;
    // all this does here is set the current value to that numerical label we have below
    positionValue.textContent = position;
});