import "./styles.css";
let numeroDeTabla = Number(prompt("Ingrese el numero "));
let numeroFin = Number(prompt("Ingrese hasta que numero"));

console.log("Numero de la tabla elegida: " + numeroDeTabla);
console.log("Numero fin de la tabla: " + numeroFin);

for (let x = 1; x <= numeroFin; x++) {
  const tabla = numeroDeTabla * x;
  console.log(x + " x " + numeroDeTabla + " = " + tabla);
}
//
