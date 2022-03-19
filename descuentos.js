const coupons = [
  {
      name: "JuanDC_es_Batman",
      discount: 15,
  },
  {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
  },
  {
      name: "es_un_secreto",
      discount: 25,
  },
];

function calcularPrecioConDescuento(precio, descuento){
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;

  return precioConDescuento;

}

function onClickButtonPriceDiscount() {
         const inputPrice = document.getElementById("InputPrice").value;
         //const priceValue = inputPrice.value;
        
         const inputCoupon = document.getElementById("inputCoupon").value;
         //const couponValue = inputCoupon.value;
    
          

         const isCouponValueValid = function (coupon) {
          return coupon.name === inputCoupon;
      };
      
      const userCoupon = coupons.find(isCouponValueValid);
      
      if (!userCoupon) {
          alert("El cupón " + inputCoupon + " no es válido");
      } else {
          const descuento = userCoupon.discount;
          const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
      
          const resultP = document.getElementById("ResultP");
          resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
      }

  }   



 


