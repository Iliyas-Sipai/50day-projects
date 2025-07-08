let kgRef = document.getElementById("kg")
let lbRef = document.getElementById("lb")
let o2Ref = document.getElementById("o2")

let covertFormKg = () => {
    let kg = kgRef.value
    lbRef.value = (kg * 2.205).toFixed(2);
    o2Ref.value = (kg *  35.274).toFixed(2); 
};

let convertFromLb = () => {
    let lb = lbRef.value;
    kgRef.value = (lb / 2.205).toFixed(2);
    o2Ref.value = (lb * 16).toFixed(2);
};

let convertFromo2 = () => {
    let o2 = o2Ref.value;
    kgRef.value = (o2 / 35.274).toFixed(2)
    lbRef.value = (o2 /16).toFixed(2)
}

kgRef.addEventListener("input", covertFormKg);
lbRef.addEventListener("input",convertFromLb);
o2Ref.addEventListener("input",convertFromo2);
window.addEventListener("load", () => {
    kgRef.value = "";
    lbRef.value = "";
    o2Ref.value = "";
});