let toggle = false;
const menu = document.body.querySelector(".menu")

function toggler(){
    toggle=!toggle;
    if(toggle){
       menu.style.top="60px"
    }else{
        menu.style.top="-300px"
    }
}

document.body.querySelector(".drop").addEventListener("click", function (){
    toggler();
})