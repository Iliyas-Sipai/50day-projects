
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");


box1.addEventListener("click" , () => {
  document.body.style.backgroundColor="orange";
})
box2.addEventListener("click" , () => {
  document.body.style.backgroundColor="grey";
})
box3.addEventListener("click" , () => {
  document.body.style.backgroundColor="yellow";
})
box4.addEventListener("click",() =>{
    document.body.style.backgroundColor="#f76b8a"
})
