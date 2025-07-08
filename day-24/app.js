let celsius =  document.getElementById("celsius");
let fahrenheit =  document.getElementById("fahreheits");
console.log(celsius,fahrenheit);


function CelToFar(){
    let output = (parseFloat(celsius.value) * 9/5) + 32 ;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel  () {
    let output = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
    
}

celsius.addEventListener("input", CelToFar);
fahrenheit.addEventListener("input", farToCel);