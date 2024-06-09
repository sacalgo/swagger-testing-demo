const express= require('express'); 
const fs = require('fs'); 
const path = require('path'); 
const dbFilePath = path.resolve(__dirname, 'db.json'); 

function readDatabase(){
    const data = fs.readFileSync(dbFilePath); 
    return JSON.parse(data); 
}

function writeDatabase(data){
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2)); 
}

module.exports = {
    readDatabase, writeDatabase
}

