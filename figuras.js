
//Codigo del Cuadrado
console.group("Triangulos");

    // const ladoCuadrado = 5;
    // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
    function ladoCuadrado (ladoCuadrado) {
        return ladoCuadrado * 4;
    }
    
    
    
    // const perimetroCuadrado = ladoCuadrado * 4;
    // console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
    function perimetroCuadrado (ladoCuadrado) {
        return ladoCuadrado * 4;
    }



    // const areaCuadrado = ladoCuadrado * ladoCuadrado;
    // console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
    function areaCuadrado (ladoCuadrado) {
        return ladoCuadrado * ladoCuadrado;
    }    
    
    
    console.log("hola");

console.groupEnd("");





//Codigo del Triangulo
console.group("Triangulos");

    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;
    
    
    
    // console.log(
    // "Los lados del triangulo miden: " 
    // + ladoTriangulo1 
    // + "cm, " 
    // + ladoTriangulo2 
    // + "cm, " 
    // + baseTriangulo 
    // + "cm"
    // );

    console.log("El altura del triangulo es: " + alturaTriangulo + "cm");
    
    // const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    // console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
    function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
        return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    }
    
    
    
    
    // const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    // console.log("El area del triangulo es: " + areaTriangulo + " cm^2");
    function areaTriangulo (baseTriangulo, alturaTriangulo ) {
        return (baseTriangulo * alturaTriangulo) / 2;
    }
    
    
    
    
console.groupEnd("");



//Codigo del Circulos
console.group("Circulos");

    //Radio
    // const radioCirculo = 4;
    // console.log("El radio del cuadrado es: " + radioCirculo + " cm");
    
    
    //Diametro
    // const diametroCirculo = radioCirculo *2;
    // console.log("El diametro del cuadrado es: " + diametroCirculo + " cm");
    function diametroCirculo (radio) {
        return radio * 2;
    }
    
    
    //PI
    const PI = Math.PI;
    console.log("PI es: " + PI);
    
    
    //Circunferencia
    // const perimetroCirculo = diametroCirculo * PI;
    // console.log("El perimetro del cuadrado es: " + perimetroCirculo + " cm");
    function perimetroCirculo (radio) {
        const diametro = diametroCirculo (radio);
        return diametro * PI;
    }
    
    
    
    //Area
    // const areaCirculo = (radioCirculo * radioCirculo) * PI;
    // console.log("El diametro del cuadrado es: " + areaCirculo + " cm^2");
    function areaCirculo (radio) {
        return (radio * radio) * PI;
    }


console.groupEnd("");


//Aqui Interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
   const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}







function encontrandoLadoBase(){
    
    var ladobase =0;
    
    var lado1 = document.getElementById("lado1").value;
    console.log(lado1);
    var lado2 = document.getElementById("lado2").value;
    console.log(lado2);
    var lado3 = document.getElementById("lado3").value;
    console.log(lado3);
    

    if ( (lado1 != lado2 && lado1 != lado3) && (lado2 === lado3) ) {
    let base = lado1;
    
        return [base, lado2, lado3];
      
    }else if ( (lado2 != lado1 && lado2 != lado3) && (lado1 === lado3) ) {
    let base = lado2;
        return [base, lado1, lado3];
        
    }else if ( (lado3 != lado2 && lado3 != lado1) && (lado2 === lado1) ) {
    let base = lado3;
        return [base, lado1, lado2];
        
    }else{
        console.log("ERRORRRR, para ser isoseles tiene que tener dos lados iguales y el tersero desigual, por favor entre medidad correctas");
        return [0, 0, 0];
    }
    
          
}

function calcularAlturaTrianguloIsoseles(){


console.log(encontrandoLadoBase());

let lados = encontrandoLadoBase();
let base = lados[0];
let side1 = lados[1];
let side2 = lados[2];

console.log(base);
console.log(side1);
console.log(side2);

if (base === side1 === side2) {
    console.log("ERROR, Isoseles tiene dos lados iguales y uno desigual, escriba medidas correctas");
    
    document.getElementById("lado1").value = ' ';
    document.getElementById("lado2").value = ' ';
    document.getElementById("lado3").value = ' ';
    


}



    let ladoBase = base/2;
    let altura =0;
    let alturaCuadrada =0;
             
        alturaCuadrada = ( Math.pow(side1, 2) - Math.pow(ladoBase, 2) );
        
        console.log("alturaCuadrada== " + alturaCuadrada);
        
        altura =Math.sqrt(alturaCuadrada);
        console.log("altura+++" + altura);
    

}