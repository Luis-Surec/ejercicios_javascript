function ver(){
let recibeDato = parseInt(document.getElementById('valorselect').value);

console.log(`mostrando dato capturado ${recibeDato}`);

if(recibeDato==1){
    resultado =recibeDato+10;
    window.location.assign('prueba5.html'); 
    console.log(`REsultado de  la operacion ${resultado}`)

}else{if(recibeDato==2){
    resultado =recibeDato+20;
    window.location.assign('prueba2.html'); 
    console.log(`REsultado de  la operacion ${resultado}`)

}else{if(recibeDato==3){
    resultado =recibeDato+20;
    window.location.assign('prueba3.html'); 
    console.log(`REsultado de  la operacion ${resultado}`)
}
}
}
}


