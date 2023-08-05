let sem1 = document.querySelector('.chicken');
let sem2 = document.querySelector('.Beef');
let sem3 = document.querySelector('.Sushi');
let sem4 = document.querySelector('.menu');
let sem5 = document.querySelector('.navbar');
let sem6 = document.querySelector('.box1');
let sem7 = document.querySelector('.box2');
let sem8 = document.querySelector('.box3');
let myfunction = (e)=>{
    if (sem5.style.visibility == "visible"){
        console.log(7)
        sem5.style.visibility = "hidden";
        sem1.style.visibility = "hidden";
        sem2.style.visibility = "hidden";
        sem3.style.visibility = "hidden";
    }
    else{
        console.log(9)
        sem5.style.visibility = "visible";
        sem1.style.visibility = "hidden";
        sem2.style.visibility = "hidden";
        sem3.style.visibility = "hidden";
    }
}
let myfunction1 = (e)=>{
    sem1.style.visibility = "visible";
}
let chicken =()=>{
    if (sem1.style.visibility = "hidden") {
        sem1.style.visibility = "visible";
        sem2.style.visibility = "hidden";
        sem3.style.visibility = "hidden";
    }
    else if (sem1.style.visibility = "visible") {
        sem1.style.visibility = "hidden";
        sem2.style.visibility = "hidden";
        sem3.style.visibility = "hidden";
    }
}
let Beef =()=>{
    if (sem2.style.visibility = "hidden") {
        sem2.style.visibility = "visible";
        sem1.style.visibility = "hidden";
        sem3.style.visibility = "hidden";
    }
    else if (sem2.style.visibility = "visible") {
        sem1.style.visibility = "hidden";
        sem2.style.visibility = "hidden";
        sem3.style.visibility = "hidden";
    }
}
let Sushi =()=>{
    if (sem3.style.visibility = "hidden") {
        sem1.style.visibility = "hidden";
        sem2.style.visibility = "hidden";
        sem3.style.visibility = "visible";
    }
    else if (sem3.style.visibility = "visible") {
        sem1.style.visibility = "hidden";
        sem2.style.visibility = "hidden";
        sem3.style.visibility = "hidden";
    }
}

sem4.addEventListener("click", myfunction);
sem1.addEventListener("click", myfunction1)
sem6.addEventListener("click",chicken);
sem7.addEventListener("click",Beef);
sem8.addEventListener("click",Sushi);
