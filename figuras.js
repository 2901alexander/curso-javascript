
// console.group sirve para agrupar codigo en la consola.
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





//Aqui interactuamos con el HTML
     
      
//CUADRADO

function calcularPerimetroCuadrado(){
  const value = document.getElementById("inputCuadrado").value;

    const perimetro = value * 4;
  const resultadoCuadr = document.getElementById("resultadoCuadrado");
        resultadoCuadr.innerHTML = `El primetro del cuadro es ${perimetro} cm`;

}
function calcularAreaCuadrado(){
    const value = document.getElementById("inputCuadrado").value;

    const area = value * value;
    const resultadoCuadr = document.getElementById("resultadoAreaCuadrado");
        resultadoCuadr.innerHTML = `El area del cuadro es ${area} cm2`;
        
}

// FIN DEL CUADRADO

// TRIANGULO
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value; 

    const perimetroTrian =  Number(lado1) + Number(lado2) + Number(base);
    const resultadoTriangulo = document.getElementById("resultadoTriangulo");
    resultadoTriangulo.innerHTML = `El perimetro del triangulo es ${perimetroTrian} cm`;
}
function calcularAreaTriangulo(){
    
    const altura = document.getElementById("altura").value;
    const base = document.getElementById("base").value; 

    const areaTrian = (base * altura) / 2;
    const resultadoAreaTriangulo = document.getElementById("resultadoAreaTriangulo");
    resultadoAreaTriangulo.innerHTML = `El area del triangulo es ${areaTrian} cm3`;
    
}
// FIN DEL TRIANGULO

// CIRCULO 
const numeroPI = Math.PI;


function perimetroCirculo2 (){
    var radio = document.getElementById("radio").value;
    const perimetro = parseInt((radio * 2) * numeroPI);
            
    const resultadoCirculo = document.getElementById("resultadoCirculo");
          resultadoCirculo.innerHTML = `El perimetro del circulo es ${perimetro} cm`;
}
function areaCirculo2 (){
    var radio = document.getElementById("radio").value;
    const area = parseInt((radio * radio) * numeroPI);

    const resultadoAreaCirculo = document.getElementById("resultadoAreaCirculo");
    resultadoAreaCirculo.innerHTML = `El perimetro del circulo es ${area} cm3`;
}
   const eventoclick = document.getElementById("eventoclick").addEventListener("click", perimetroCirculo2);

   const evento2 = document.getElementById("evento2").addEventListener("click", areaCirculo2);

// FIN CIRCULO


// RETO TRIANGULO ISOSCELES 

function alturaIsoceles(ilado1, ilado2, ibase){
    if(ilado1 === ilado2 && ilado1 != ibase){
         
        const altura = parseInt(Math.sqrt(ilado1**2 - ibase**2/ 4));
       return altura;
    }
    else{
        //console.log('No es un triangulo isoceles') ;
        const error = "No es un triangulo isoceles";
        return error;
    }
}
function trianguloIsoceles(){

       const   l1 = document.getElementById("lad1").value;
       const   l2 = document.getElementById("lad2").value;
       const    ba = document.getElementById("base1").value;

       const altura = alturaIsoceles(l1, l2, ba);

       const resultadoAltura = document.getElementById("resultadoIsoceles");
             resultadoAltura.innerHTML = `La altura del triangulo es ${altura}`;
}
   
const llamada = document.getElementById("isosceles");
    llamada.addEventListener("click", trianguloIsoceles);

