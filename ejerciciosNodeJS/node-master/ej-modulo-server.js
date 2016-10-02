var miModulo=require("./ejemplo-module.js");

console.log("Hola "+miModulo.hola());

//ejemplo 2
console.log("Hola "+miModulo.holaMundo());

//ejemplo 3: funciones privadas
console.log("Número: "+miModulo.incremento(10));

try {
    console.log("Funcion incrementa en uno" + miModulo.funcionPrivada(0));
} catch (err) {
    console.log("Has intentado llamar a funcion privada sin exportar");
}
// Hecho