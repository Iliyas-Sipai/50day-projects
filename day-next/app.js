var myText = document.getElementById("my-text");
var result = document.getElementById("result")
var limit = 60;

result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function() {
    var textlimit = myText.value.length;
    result.textContent = textlimit + "/" + limit;

    if(textlimit > limit){
        myText.style.borderColor = "#ff2851" ;
        result.style.color = "#ff2851"
    }
});