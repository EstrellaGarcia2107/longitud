var cadena = prompt("Ingresa una cadena:");

// Elimina espacios en blanco y convierte a minúsculas
cadena = cadena.replace(/\s/g, "").toLowerCase();

// Invierte la cadena
var cadenaInvertida = "";
for (var i = cadena.length - 1; i >= 0; i--) {
  cadenaInvertida += cadena.charAt(i);
}

// Verifica si la cadena original es igual a la cadena invertida
if (cadena === cadenaInvertida) {
  console.log("Es un palíndromo.");
} else {
  console.log("No es un palíndromo.");
}
