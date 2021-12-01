const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log(adressbtn)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex";
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none";
})
//slider----------------------------------------
const rightbtn = document.querySelector('.fa-chevron-right')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0
const leftbtn = document.querySelector('.fa-chevron-left')
let imgactive = document.querySelector('.active')
const imgNumberli = document.querySelectorAll('.slider-content-left-bottom li')
rightbtn.addEventListener("click", function(){
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgNumberli[index].classList.add("active")
})
leftbtn.addEventListener("click", function(){
    index = index - 1
    if(index<0){
        index=imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})
//slider1----------------------------------------------------------------
imgNumberli.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//slide2---------------------------------------------------
function imgAuto () {
    index +=1
    if (index>imgNumber.length-1){
        index=0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgNumberli[index].classList.add("active")
}
setInterval(imgAuto, 5000)
// slideerproduct-------------------------------------------------------------
const rightbtn2 = document.querySelector('.fa-chevron-right-2')
const leftbtn2 = document.querySelector('.fa-chevron-left-2')
const imgNumber2 = document.querySelectorAll('.slider-product-one-content-items')
rightbtn2.addEventListener("click", function(){
    index = index + 1
    if(index>imgNumber2.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-items-content").style.right = index * 100 + "%"
})
leftbtn2.addEventListener("click", function(){
    index = index - 1
    if(index<0){
        index=imgNumber2.length-1
    }
    document.querySelector(".slider-product-one-items-content").style.right = index * 100 + "%"
})
