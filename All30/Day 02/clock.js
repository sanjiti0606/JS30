const sHand= document.querySelector('.s-hand');
const mHand= document.querySelector('.m-hand');
const hHand= document.querySelector('.h-hand');
function move(){
    const date= new Date();
    const sec= date.getSeconds();
    const min= date.getMinutes();
    const hr= date.getHours();
    const secDeg= 90 + (sec*6);
    const minDeg= 90 + (min*6) + (sec*0.1);
    const hrDeg= 90 + (hr*30) + (min*0.5);
    sHand.style.transform = `rotate(${secDeg}deg)`;
    mHand.style.transform = `rotate(${minDeg}deg)`;
    hHand.style.transform = `rotate(${hrDeg}deg)`;
}
setInterval(move, 1000);

