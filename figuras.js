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