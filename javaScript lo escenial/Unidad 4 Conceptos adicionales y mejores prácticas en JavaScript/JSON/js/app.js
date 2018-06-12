var miJSON = [
    {
        "codigo" : "001",
        "nombre" : "calculo"
    },{
        "codigo" : "002",
        "nombre" : "fisica"
    },{
        "codigo" : "003",
        "nombre" : "algoritmo"
    }
];

function leerJSON(json) {
    var out="";
    var i;
    for(i=0;i<json.length;i++){
        alert("Codigo: " + json[i].codigo + '-' +"Nombre: "+ json[i].nombre)
    }
}

leerJSON(miJSON);