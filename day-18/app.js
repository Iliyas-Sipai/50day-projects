let inputText = document.getElementById("input-text");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");

inputText.addEventListener("input",() => {
    // count number of characters
    charCount.textContent = inputText.value.length;
    // Remove whitespace from both side of the string
    let text = inputText.value.trim();
  // console.log(text);
  // Split text at sapces into array of substring
  // filter empty string 
  // coiunt lenght of this array
  wordCount.textContent = text.split(/\s+/).filter((item) => item).length;    
})
