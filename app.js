let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let caro = document.querySelector('.carousel'); 
let listItem = document.querySelector('.carousel .list');
let thumb = document.querySelector('.carousel .thumbnail');



nextDom.onclick = function(){
    
    showSlider("next");
   
}
prevDom.onclick = function(){
    
    showSlider("prev");
   
}
let timeRunning = 3000;
let timeAN = 7000;
let runtimeout;
let runAR =setTimeout(() => {
    nextDom.click();
   }, timeAN);

function showSlider(type){
 
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
       
       listItem.appendChild(itemSlider[0]);
       thumb.appendChild(itemThumbnail[0]);
       caro.classList.add('next');
    }
    else{
        let positioli = itemSlider.length -1;
        listItem.prepend(itemSlider[positioli]);
        thumb.prepend(itemThumbnail[positioli]);
        caro.classList.add('prev');
    }
    clearTimeout(runtimeout);
    runtimeout = setTimeout(() => {
       caro.classList.remove('next');
       caro.classList.remove('prev');
   }, timeRunning);

   clearTimeout(runAR);
}