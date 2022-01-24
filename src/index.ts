/* ejercicio precio con descuento

let precioUnitario: number= 10;
let cantidad: number=5;
let descuento: number= 0.15;
let mes: number = 10;
if (mes == 10) {
  console.log ("compro en octubre, aplicar descuento" ,precioUnitario* cantidad*descuento );

}else{
  console.log("no compro en octubre, no aplica descuento"precioUnitario *cantidad);
}
*/
//aumento de sueldo
let sueldo: number = Number(prompt("ingrese el sueldo"));
let sueldoConAumento: number;
if (sueldo <= 15000) {
  sueldoConAumento = sueldo * 1.2;
  console.log("sueldo actualizado" + sueldoConAumento);
} else if (sueldo > 15000 && sueldo <= 20000) {
  sueldoConAumento = sueldo * 1.1;
  console.log("sueldo actualizado " + sueldoConAumento);
} else if (sueldo > 20000 && sueldo <= 25000) {
  sueldoConAumento = sueldo * 0.5;
  console.log("sueldo actualizado" + sueldoConAumento);
} else {
  console.log("no corresponde aumento");
}
