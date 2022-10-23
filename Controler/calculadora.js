//iniciando controller
const Service_calculadora = require ("../Service/Service_calculadora.js")
class calculadora {
    static router(app){
        app.get("/somar",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = Service_calculadora.somar(...numeros)
            res.send(`<h1>${response}</h1>`)
        })


        app.get("/subtrair",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = Service_calculadora.subtrair(...numeros)
            res.send(`<h1>${response}</h1>`)
        })


        app.get("/multiplicar",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = Service_calculadora.multiplicar(...numeros)
            res.send(`<h1>${response}</h1>`)
        })

        
        app.get("/dividir",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = Service_calculadora.dividir(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
    }
}

module.exports=calculadora