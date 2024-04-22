


function calcular(){
    let valor_a =  document.getElementById("valor1").value;
    let valor_b =  document.getElementById("valor2").value;
    let resultado = (valor_a * valor_b).toFixed(2);
    let base = (resultado / 1.12).toFixed(2);
    let iva = (base * .12).toFixed(2);

    console.log(resultado);
 let envia_valor = document.querySelector("#respuesta");
 envia_valor.innerHTML=resultado;

 let envia_base = document.querySelector("#base");
 envia_base.innerHTML=base;

 let envia_iva = document.querySelector("#iva");
 envia_iva.innerHTML=iva;

let recibe= Math.trunc(resultado)
// 5.24 * 7.45
console.log(recibe + " "+"probando decimales");

}


