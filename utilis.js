function generarAleatorio(min,max){
    let random=Math.random()//8-1
    //ejemplo:max es 600, ninimo es 5
    let numero=random*(max-min);//0-max 0-595
    let numeroEntero= Math.ceil(numero);
    //Ejemplo:0
    numeroEntero = numeroEntero+min;//5-600
    return numeroEntero
}