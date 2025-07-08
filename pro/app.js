let draggableElem = document.getElementById("draggable-elem");
let initialX = 0,
initialY = 0;
let moveElemnt = false;

//Event Object

let events = {
    mouse : {
        down:"mousedown",
        move : "mousedown",
        up:"mouseup",
    },
    touch:{
        down:"touchstrat",
        move:"touchmove",
        up:"touchend",
    },
};

let deviceType = "";
// Detec touch device

const isTouchDevice = () => {
    try{
        //we try to craete TouchEvent (it would fail des)
        // destops and throw error/

        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;  
    }
    catch(e){
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();
// console.log(isTouchDevice());

// startr (mouse)
draggableElem.addEventListener(events[deviceType].down,(e) => {
  e.preventDefault();
  //initial x and  y point
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX
  initialY = !isTouchDevice() ? e.clientY :  e.touches[0].clientY

  moveElemnt = true;
});
// move

draggableElem.addEventListener(events[deviceType].move,(e) => {
    if(moveElemnt){
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

        draggableElem.style.top = draggableElem.offsetTop - (initialY - newY) + "px"
        draggableElem.style.left = draggableElem.offsetLeft - (initialX - newX) +"px"
        initialX = newX;
        initialY = newY
    }
});

// mouse up touch end
draggableElem.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElemnt = false;
    })
)
draggableElem.addEventListener("mouseleave",stopMovement);
draggableElem.addEventListener(events[deviceType].up,(e) =>
{
    moveElemnt = false
})