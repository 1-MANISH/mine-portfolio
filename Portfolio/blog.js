// --------custom cursor
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{
    let x = e.pageX;
    let y = e.pageY;
    // console.log(x+" "+y);
    cursor.style.top = `${y-15}px`;
    cursor.style.left = `${x-15}px`;    

})