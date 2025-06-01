// function to generate and display number 
// create for math function for random nuber 

function generateRandomNumber () {
    let min = 1;
    let max = 100; // You can change the range as needed

    let randomNumber = Math.floor(Math.random () * (max - min + 1)) + min;
      document.getElementById("result").textContent = `Random Number: ${randomNumber}`

}

document.getElementById("generatebtn").addEventListener("click",generateRandomNumber)