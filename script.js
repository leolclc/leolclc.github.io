var c = 0
function onload(){
    document.querySelector("input#pw").focus()}
function check(){
    var password = document.querySelector("input#pw").value
    
    if (password == "izabellampminusculo"){
        console.log(password)
        console.log("certo")
        window.location.href = "home.html";
    } else if (c >= 2){
        window.alert("DICA: primeiro nome + outras iniciais + minusculo")
        
    }
    else{
        window.alert("Senha inválida, tente novamente")
        c++
    }
}