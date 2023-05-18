function calcular(){

    let c = document.getElementById('c').value;
    c = parseFloat(c);

    let i = document.getElementById('i').value;
    i = parseFloat(i);

    let t = document.getElementById('t').value;
    t = parseFloat(t);

    let m =  c * Math.pow(1 + i, t);
    let lucro = m - c;

    document.getElementById('demo').innerHTML = "montante = " + m.toFixed(2) + ", LUCRO = " + lucro.toFixed(2);
}