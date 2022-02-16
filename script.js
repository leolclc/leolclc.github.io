var c = 0
function onload(){
    document.querySelector("input#pw").focus()}
function check(){
    var password = document.querySelector("input#pw").value
    
    if (password == "izabellampminusculo"){
        window.location.href = "home.html";
    } else if (c >= 2){
        window.alert("exemplo: leandroclcminusculo")
        
    }
    else{
        window.alert("Código inválido, tente novamente")
        c++
    }
}