const canvas = document.querySelector('#draw');
const cnv = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

cnv.strokeStyle = '#BADA55';
cnv.lineJoin = 'round';
cnv.lineCap = 'round';
cnv.lineWidth = 100;

let isDrawing = false;
let xCoord = 0;
let yCoord = 0;
let hue = 0;
let inc = true;

function toDraw(e){
    if(!isDrawing) return;
    cnv.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    cnv.beginPath();
    // start from
    cnv.moveTo(xCoord, yCoord);
    // go to
    cnv.lineTo(e.offsetX, e.offsetY);
    cnv.stroke();
    [xCoord, yCoord] = [e.offsetX, e.offsetY];
    hue++;
    if(hue>=360)
        hue=0;
    if(cnv.lineWidth>=100 || cnv.lineWidth<=1)
        inc = !inc;
    if(inc)
        cnv.lineWidth++;
    else
        cnv.lineWidth--;
}

canvas.addEventListener('mousedown', (e)=>{
    isDrawing = true;
    [xCoord, yCoord] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', toDraw);
canvas.addEventListener('mouseup', () => isDrawing=false);
canvas.addEventListener('mouseout', () => isDrawing=false);