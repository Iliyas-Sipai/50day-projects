const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

button.addEventListener("click",() => {
    const text = inputText.value.trim();

    if(text.length == 0){
        // show an alert if the is empty
        alert("Input cannot be empty")
        return;
    }
    // remove any non-alphnumeric character and covert lovercase

   const cleanText = text.replace(/[^a-zA0-A0-9]/g,"").toLowerCase()
   const isPlaindrom = cleanText === cleanText.split("").reverse("").join("");

   const message = isPlaindrom 
   ? `<span>Yes,</span>It's palindrome!`
   : `<span>Nope,</span>Not a palindrome!`;

   result.innerHTML = message;
   result.classList.remove("error","success");
   setTimeout(() => {
    result.classList.add(isPlaindrom ? "success":"error");
   },10)

});