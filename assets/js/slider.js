const sliderMen = document.querySelector('#sliderMen');
const progressBarMen = document.querySelector('#progressBarMen');

let sliderMenGrabbed = false;

sliderMen.parentElement.addEventListener('scroll', (e) => {
    progressBarMen.style.width  = `${getScrollMenPercentage()}%`
})

sliderMen.addEventListener('mousedown', (e) => {
    sliderMenGrabbed = true;
    sliderMen.style.cursor = 'grabbing';
})

sliderMen.addEventListener('mouseup', (e) => {
    sliderMenGrabbed = false;
    sliderMen.style.cursor = 'grab';
})

sliderMen.addEventListener('mouseleave', (e) => {
    sliderMenGrabbed = false;
})

sliderMen.addEventListener('mousemove', (e) => {
    if(sliderMenGrabbed){
        sliderMen.parentElement.scrollLeft -= e.movementX;
    }
})

sliderMen.addEventListener('wheel', (e) =>{
    e.preventDefault()
    sliderMen.parentElement.scrollLeft += e.deltaY;
})

function getScrollMenPercentage(){
   return ((sliderMen.parentElement.scrollLeft / (sliderMen.parentElement.scrollWidth - sliderMen.parentElement.clientWidth) ) * 100);
}

const sliderWomen = document.querySelector('#sliderWomen');
const progressBarWomen = document.querySelector('#progressBarWomen');

let sliderWomenGrabbed = false;

sliderWomen.parentElement.addEventListener('scroll', (e) => {
    progressBarWomen.style.width  = `${getScrollWomenPercentage()}%`
})

sliderWomen.addEventListener('mousedown', (e) => {
    sliderWomenGrabbed = true;
    sliderWomen.style.cursor = 'grabbing';
})

sliderWomen.addEventListener('mouseup', (e) => {
    sliderWomenGrabbed = false;
    sliderWomen.style.cursor = 'grab';
})

sliderWomen.addEventListener('mouseleave', (e) => {
    sliderWomenGrabbed = false;
})

sliderWomen.addEventListener('mousemove', (e) => {
    if(sliderWomenGrabbed){
        sliderWomen.parentElement.scrollLeft -= e.movementX;
    }
})

sliderWomen.addEventListener('wheel', (e) =>{
    e.preventDefault()
    sliderWomen.parentElement.scrollLeft += e.deltaY;
})

function getScrollWomenPercentage(){
   return ((sliderWomen.parentElement.scrollLeft / (sliderWomen.parentElement.scrollWidth - sliderWomen.parentElement.clientWidth) ) * 100);
}