// il programmatore deve lanciare lo script con il comando:
/**
*node create-project.js nome-cartella
*
*lo script:
* 1. crea la cartella con il nome nome-cartella
* 2. crea nella cartella il file app.js e ne inserisce console.log
* 3.creare il file package.json con seguente contenuto:
*{
  "name": "node-npm-intro",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "David",
  "type": "module",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "node --watch app.js"
  },
  "dependencies": {
    "chalk": "^5.6.2"
  }
}
*4. creare .gitignore con node_modules all'interno
*5. scrivere in console il messaggio per l'utente : "il progetto è stato creato con successo, ora fai cd nome-cartella, npm i e npm run dev"
*
*
*/