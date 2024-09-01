/*
document.addEventListener('DOMContentLoaded', function() {   
    let list = document.querySelectorAll(".list");
    let items =document.querySelectorAll(".item");
    let dots = document.querySelectorAll(".dots");
    let prev = document.querySelectorAll("#prev");
    let next= document.querySelectorAll("#next"); 
    next.addEventListener("click",nextonclick);

let active= 0;
let lengthItems = items.length - 1;

function nextonclick(){
    if(active + 1>lengthItems){
        active=0;
    }else{
        active++ ;
    }
    reloadSlider();
}
function reloadSlider (){
    let checkLeft= items[active].offsetLeft;
    list.style.left = -checkLeft + "px";  
}
});
*/ 
/*
(function (){
let currentPage=1 
const nextBtn= document.querySelector(".form .footer .next");
function movePage(){
    nextBtn.disabled= false;
    if(currentPage===4){
        nextBtn.disabled= true;
    }
    document.querySelector(".form .pagination .active").classList.remove("active");
    document.querySelectorAll(".form .pagination .number")[currentPage-1].classList.remove("active");
    const stepNode1= document.querySelector(".form .steps .step1");
    const width1=((currentPage-1)*stepNode1.offsetWidth*-1)+"px";
    stepNode1.parentNode.style.marginLeft= width;

    const stepNode2= document.querySelector(".form .steps .step2");
    const width2=((currentPage-1)*stepNode2.offsetWidth*-1)+"px";
    stepNode2.parentNode.style.marginLeft= width;

    const stepNode3= document.querySelector(".form .steps .step3");
    const width3=((currentPage-1)*stepNode3.offsetWidth*-1)+"px";
    stepNode3.parentNode.style.marginLeft= width;

    const stepNode4= document.querySelector(".form .steps .step4");
    const width4=((currentPage-1)*stepNode4.offsetWidth*-1)+"px";
    stepNode4.parentNode.style.marginLeft= width;
}




})
*/ 

