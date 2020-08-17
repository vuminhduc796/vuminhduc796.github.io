function switchConcept() {
    document.getElementById("tech01").innerHTML = "OOP Design";
    document.getElementById("tech02").innerHTML = "Data Structure and Algorithm";
    document.getElementById("tech03").innerHTML = "Web Development";
    document.getElementById("button-language").style.backgroundColor = "#cfcfcf";
    document.getElementById("button-concept").style.backgroundColor = "#e3e3e3";
    document.getElementById("tech11").style.width = "60%";
    document.getElementById("tech12").style.width = "70%";
    document.getElementById("tech13").style.width = "45%";
}
function switchLanguage() {
    document.getElementById("tech01").innerHTML = "Java";
    document.getElementById("tech02").innerHTML = "Python";
    document.getElementById("tech03").innerHTML = "HTML + JS + CSS";
    document.getElementById("button-concept").style.backgroundColor = "#cfcfcf";
    document.getElementById("button-language").style.backgroundColor = "#e3e3e3";
    document.getElementById("tech11").style.width = "70%";
    document.getElementById("tech12").style.width = "80%";
    document.getElementById("tech13").style.width = "55%";
}