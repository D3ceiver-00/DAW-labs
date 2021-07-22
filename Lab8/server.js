var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// reservaciones
var reservaciones=[
    {
        ID: "qwerty",
        Nombre: "Pedro",
        Correo: "bubulubuenosmomentos@gmail.com",
        Telefono: "123456789"
    }
]

// main home
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/home.html"));
})

// table tab
app.get("/tables", (req, res)=>{
    res.sendFile(path.join(__dirname, "/tables.html"));
    
})

// reserve tab
app.get("/reserve", (req, res)=>{
    res.sendFile(path.join(__dirname, "/reserve.html"));
})
app.post("/reserve", (req, res)=>{
    var newReserve = req.body;
    
    console.log("respuesta recivida");
    reservaciones.push(newReserve);
    
    res.json(newReserve);
})

app.listen(PORT, ()=>{
    console.log("App listening on PORT " + PORT);
})
