
//1-Usar métodos síncronos y asíncronos para 
//leer archivos
/*
var fs=require("fs");
console.log("Comienza la ejecución");

//método asíncrono readFile
fs.readFile("sample.txt",function(error,data){
	console.log("lectura asíncrona-contenidos del archivo: "+data);
});
console.log("estamos en ello");

//fs.readFileSync
console.log("lectura síncrona");
var contenido=fs.readFileSync("sample.txt");//,function(error,data){
console.log("contenidos del archivo: "+contenido);
console.log("archivo leído");
*/

//leer fichero de configuracion

var fs=require("fs");
console.log("Inicio");
var contenido=fs.readFileSync("config.json");
console.log("Contenidos "+contenido);

var config=JSON.parse(contenido);
console.log("config -> "+config);
console.log("username = "+config.username);
// config.username devuelve undefined porque no hay ninguna pareja key-value que sea 
// key = "username"

//2-escribir archivos
//hay dos métodos, síncrono y asíncrono

var fs=require("fs");
console.log("Inicio escritura sincrona");

//escritura síncrona
fs.writeFileSync("nuevo1116.txt","Hola mundo sinc");
console.log("Fin escritura sincrona");


//el método asíncrono se suele usar para escribir logs

fs.writeFile("nuevoAsinc.txt","Hola mundo asinc el 2 de octubre de 2016",function(error){
	console.log("terminé de escribir el archivo asinc");
});
console.log("escribiendo el archivo");


//watch archivos
var fs=require("fs");
console.log("Inicio de vigilancia de archivos");
var config=JSON.parse(fs.readFileSync("config.json"));
console.log("Configuración inicial: ",config);
fs.watchFile("config.json",function(current,previous){
	console.log("Configuracion modificada");
	config=JSON.parse(fs.readFileSync("config.json"));
	console.log("nuevo archivo",config);
})
