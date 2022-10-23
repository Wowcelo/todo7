const express = require ("express")
const calculadora = require ( "./Controler/calculadora.js")


const app = express ()
app.listen ("3000",()=>{
    console.log ( "Time to run")
})

calculadora.router(app)