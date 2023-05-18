function multiplicar(){

    let n1 = document.getElementById('num1').value;
    n1 = parseInt(n1);



    let novos = n1 * 3; 
    let naçucar = n1* 2;
    let nfuba = n1 * 2;
    let nfarinha = n1 * 3;
    let noleo = n1 * 1/2;
    let nleite = n1 * n1;
    document.getElementById('demo').innerHTML =
     novos + " ovos" +
      "<br>"+ naçucar + " açucar"+
      "<br>" + nfuba + " fuba"+
      "<br>" + nfarinha + " farinha" +
      "<br>" + noleo + " oleo" +
      "<br>" + nleite + " leite";
}