const slider = document.getElementById('box_slider');
const movingBox = document.getElementById('box_move');
const positionValue = document.getElementById('pos_label');

slider.addEventListener('input', function() {
    const position = this.value;
    movingBox.style.transform = `translateX(${position}px)`;
    positionValue.textContent = position;
});