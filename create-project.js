const { log } = require("console");
const fs = require("fs")

const progetto = process.argv[2]
console.log(`inizializzo la creazione di ${progetto}`);

// console.log(`Creo la cartella del progetto ${progetto}`);

fs.mkdirSync(progetto)

// console.log(`Creo il file app.js`);
const contenuto = `console.log('Ciao dal ${progetto}')`
fs.writeFileSync(`${progetto}/app.js`, contenuto)

// console.log(`Creo package.json`)
const contenutoJson = {
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

fs.writeFileSync(`${progetto}/package.json`, JSON.stringify(contenutoJson))

const gitignoreContent = "node_modules \n.env";
fs.writeFileSync(`${progetto}/.gitignore`, gitignoreContent)

console.log(`${progetto} è stato creato con successo`)
console.log("ora fai:");
console.log(`cd ${progetto}`);
console.log("npm install");
console.log("npm run dev");


;
