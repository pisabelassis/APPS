function calcular(){
    let HTML = "";
    let nome = "<br>name: " + document.getElementById("name").value;
    let frequencia =  document.getElementById("frequencia").value;
    frequencia = parseInt (frequencia);
    let avaliaçao1 = document.getElementById("avaliaçao1").value;
    let avaliaçao2 =  document.getElementById("avaliaçao2").value;
    let avaliaçao3 =  document.getElementById("avaliaçao3").value;
    let avaliaçao4 =   document.getElementById("avaliaçao4").value;
    avaliaçao1 = parseInt (avaliaçao1);
    avaliaçao2 = parseInt (avaliaçao2);
    avaliaçao3 = parseInt (avaliaçao3);
    avaliaçao4 = parseInt (avaliaçao4);
    document.getElementById("demo").innerHTML = HTML;
    let notafinal = 0;
    
    notafinal = (avaliaçao1 + avaliaçao2 + avaliaçao3 + avaliaçao4)/4

     if (notafinal>=6 && frequencia>=75 ){
        document.getElementById("demo").innerHTML = "APROVADO " + notafinal ;
     }else if(notafinal<6 && frequencia>=75){
        document.getElementById("demo").innerHTML = "reprovado por nota, sinto muito!" + notafinal; 
    }else if( notafinal>=6 && frequencia <75) {
        document.getElementById("demo").innerHTML = "reprovado por falta, sinto muito!" + notafinal;
    }
        
}