
// ------------ Logo design

const text = document.querySelector('.text p');

text.innerHTML = text.innerText.split("").map(
    (char , i )=>
        `<span style="transform:rotate(${i * 8.4}deg)">${char}</span>`
    
).join("");


// ------------------Social media
let togle  = document.querySelector('.toggle');
let menu  = document.querySelector('.menu');

togle.onclick = function(){
    menu.classList.toggle('active');
}

let menulia = document.querySelectorAll('.menu li a');
let menuliaionicon = document.querySelectorAll('.menu li a ion-icon');

// console.log(menulia);

menulia.forEach((value,index)=>{
    value.onmouseover=function(){
        menuliaionicon.forEach((value1,index1)=>{
                value1.style.color ="#333";
        })
    }
})



// Media query
// ----Burger

let burger = document.querySelector('.burger');
let navbar = document.getElementById("navbar");
let cross = document.querySelector('.cross');

// as we click on burger waali class ke items me do run this func 
// this function add class & remove it from that box alternatively
burger.addEventListener('click',()=>{
    navbar.classList.toggle('add-resp');

 });

 // as we click on cross waali class ke items me do run this func 
// this function add class & remove it from that box alternatively

cross.addEventListener('click',()=>{
    navbar.classList.toggle('add-resp');
});




// --------custom cursor
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{
    let x = e.pageX;
    let y = e.pageY;
    // console.log(x+" "+y);
    cursor.style.top = `${y-15}px`;
    cursor.style.left = `${x-15}px`;    

})


// Extraa

// Form submission

const Cmsg = document.querySelector(".successMsg");



const scriptURL = 'https://script.google.com/macros/s/AKfycbxVCt66Cy4OE9d5HFDBp3wwsOUHUoOlcoJN8a_PHfxDyPEIHi-bqpXNrbwttRtJYFhWjw/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        {
            setTimeout(()=>{
                Cmsg.innerText = `Sending ...`;
            },0);

            setTimeout(()=>{
                Cmsg.innerText = `Your message has sent !`;
            },1000);
            
            setInterval(() => {
                Cmsg.innerText="";
            }, 7000);
            
        }
        )
      .catch(error => 
        {
            console.log("error");
        }
        )
  });


// onselect
function x(){
    console.log("Hello");
    this.style.backgroundColor="green";
}


// On cliking on each nav menu in small devices

let home= document.getElementById("hm");
let about = document.getElementById("ab");
let education = document.getElementById("ed");
let skill = document.getElementById("skl");
let project = document.getElementById("pr");
let contact = document.getElementById("cont");

let navMenus = [
    home,
    about,
    education,
    skill,
    project,
    contact
]

navMenus.forEach((value,index)=>{
    value.addEventListener('click',()=>{
        navbar.classList.toggle('add-resp');
    })
})