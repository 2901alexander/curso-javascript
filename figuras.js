console.group("Circulo");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es:" + radioCirculo + "cm");
// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es:" + diametroCirculo + "cm");
// PI
  //const PI = 3.1415;
const PI = Math.PI; 
console.log("PI es:" + PI);
// Circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es:" + perimetroCirculo + "cm");
// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es:" + areaCirculo + "cm^2");
console.groupEnd();

const numeroPI = Math.PI;
function diametro (radio){
    return radio * 2;
};


function perimetroCirculof (radio){
   const diamet = diametro (radio);
   return diamet * numeroPI;

};

//Aqui interactuamos con el HTML
       //cuadrado
            function perimetroCuadrado(lado){
            return lado * 4;
            }
            function areaCuadrado(lado) {
            return lado * lado;
            }
       //triangulo    

            function perimetroTriangulo(lado1, lado2, base) {
            return lado1 + lado2 + base;
            }
  
            function areaTriangulo(base, altura) {
            return (base * altura) / 2;
            }
//cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert (perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);    
}

//triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value; 

    const perimetroTrian = perimetroTriangulo( lado1,lado2,base);
    alert(perimetroTrian);
}
function calcularAreaTriangulo(){
    
    const altura = document.getElementById("altura").value;
    const base = document.getElementById("base").value; 

    const areaTrian = (base * altura) / 2;
    alert(areaTrian);
}

// RETO TRIANGULO ISOSCELES 

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura);
        alert(altura);
    }
    else{
        alert('no lo se')
    }
}
altura(6, 6, 4)

