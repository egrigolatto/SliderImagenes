const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".sliderSection");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(".sliderSection")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout( ()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
};

function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length-1];    
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout( ()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
};

btnRight.addEventListener("click", ()=> {
    moverDerecha();
});

btnLeft.addEventListener("click", ()=> {
    moverIzquierda();
});


// para que se mueva automaticamente
// setInterval(function(){
//     moverDerecha();
// },5000)