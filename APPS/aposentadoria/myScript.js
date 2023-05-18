function calcular(){
    
   let idade = document.getElementById("idade").value;
   idade = parseInt (idade);
   let anos =  document.getElementById("anos").value;
   anos = parseInt (anos);
     var sel = document.getElementById("gen");
   let gen = sel.options[sel.selectedIndex].value;
   if (
    (gen == "masculino" && idade >= 62 && anos >= 35)||
    (gen == "feminino" && idade >= 57 && anos >= 30)
   ){
    document.getElementById("demo").innerHTML = "PODE APOSENTAR!";
   }else{
    document.getElementById("demo").innerHTML = " NÃO PODE APOSENTAR!"; 
   }
    
  
}