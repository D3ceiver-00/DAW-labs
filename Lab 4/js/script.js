//hello

//alerta ("hola")

var post = document.getElementById("ButtonPost");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");

function TodoPost(e){
    e.preventDefault();

    var to_do= document.getElementById("todoText").value;
    //alert(to_do)  //test
    var list = document.getElementById("TodoList")
    
    /*
    //funciona pero no es muy práctico
    var currentListHTML = list.innerHTML;
    //console.log(currentListHTML); //test
    list.innerHTML = currentListHTML + `<input type="checkbox" name="todo"/> ${to_do} <br>`
    document.getElementById("todoText").value=""
    */

    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";

    label.textContent = to_do;

    div.appendChild(checkbox);
    div.appendChild(label);

    list.appendChild(div);

    to_do = "";
}

function TodoClear(){
    var todos = document.getElementsByName("todo");
    //console.log(todos); //test

    todos.forEach(function(elemento) {
        elemento.checked = false;
    });
    /*
    for(var i = 0; i<todos.length; i++){
        todos[i].checked = true;
    }
    */
}

function TodoMark(){
    var todos = document.getElementsByName("todo");
    //console.log(todos); //test

    todos.forEach(elemento => { // arrow function
        elemento.checked = true;
    });
    /*
    for(var i = 0; i<todos.length; i++){
        todos[i].checked = true;
    }
    */
}

function TodoDel(){
    var list = document.getElementById("TodoList");
    //console.log(list.innerHTML) // test

    //list.innerHTML = "";

    var todos = document.getElementsByName("todo");
    todos.forEach(elemento => { // arrow function
        if(elemento.checked){
            //elemento.remove(); // solo borra checkbox
            elemento.parentElement.remove();
        }
    });
}

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);
