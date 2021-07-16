//se declaran las referencias de los elementos que se van a interactuar

var post = document.getElementById("ButtonPost");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");

//se prepara todo para agregar la lógica


post.addEventListener("click", TodoPost);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);


//se crean las funciones


function TodoPost(e){
    e.preventDefault();

    var to_do= document.getElementById("NewText").value;
    //alert(to_do)  //test

    var list = document.getElementById("TodoList")
    

    //para agregar varios elementos 
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label"); //etiqueta que te permite agregar texto
   

    label.textContent = to_do;//obtiene la cajita de texto


    div.appendChild(label);
    list.appendChild(div);

    var botonEliminar = document.createElement("button"); //boton para eliminar
    var botonDone = document.createElement("button"); //boton para marcar 
    botonEliminar.innerHTML = "Delete";
    botonDone.innerHTML = "Mark";
    document.body.appendChild(botonEliminar);
    document.body.appendChild(botonDone);
    
    botonDone.onclick = function(event) {
        //alert("Has hecho click");
        $(label).addClass('strike-through');

    };

    botonEliminar.onclick = function(event) {
        $(label).remove();
        $(botonEliminar).remove(); 
        $(botonMark).remove(); 
        
    };

     
    




   

}



    