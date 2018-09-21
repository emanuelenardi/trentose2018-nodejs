/*
* cmd.js
* In this example we see how to access commmand
* line arguments.
*/
for (var i = 0; i < process.argv.length; i++) {
    console.log(i + ' -> ' + (process.argv[i]));
}
// Posso fare uno slice dell'array per accedere solo ai parametri che mi interessano
// dal 2 in poi
