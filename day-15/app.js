let imageEl = document.getElementById("image");
let numerEl = document.getElementById("number");
let count = 0;
let maxCount = 100;

const incrementLoader = () => {
    // Check if count is less than maxCount
    if(count < maxCount ){
        count++;
        //Update the text content of numberEl with the counter count
        numerEl.textContent = count + "%";

    //   calculate the opasity as ratio of maxCount
      const opasity = count / maxCount
      imageEl.style.opacity = opasity

      // set a blur filter on imageEl an amount that decrese as opacity icreases
      imageEl.style.filter = `blue($(10 - 10 * opacity)px)`;
    }else if (count === maxCount){
    numerEl.textContent = "";
    }
}
const loaderInterval = setInterval
(incrementLoader, 60)

