
// Limitar número de carácteres de textarea
/*function limite_caracteres() {
   if (textoTarea.length >= 6 && textoTarea.lenght <= 100){
      
      //si es true, buttom tiene que crear un li para enviar la info (con su checkbox y delete) al ul al dar onclick

   } else {
      alert("La longitud del texto no es correcta. Por favor, ingrese un texto entre 5 y 100 carácteres.")
   	}

} */

/*
function agregarTarea () {
	while (textoTarea.length >= 0 && textoTarea.lenght <= 100) {
		var newli = document.createElement ("li");
		var tarea = document.createTextNode (textoTarea);
		li.appendChild(tarea);
		document.ul.appendChild(li);
	}
} */


/*
function agregarTarea () {
  var textoTarea = document.getElementById("text_task").value;
  if(textoTarea.length >= 0 && textoTarea.lenght <= 100) {
    if(textoTarea != "") {
      var li = document.createElement("li");
      li.id = nuevoLi;
      li.innerHTML = textoTarea + "<button onclick ='eliminar(this)'>X</button>" ;
      document.getElementById("listaDesordenada").appendChild(li);
      }
    }
  }
 */

//debugger;
/*
var textoTarea = document.getElementById("text_task").value; // Obtener el valor del textarea
var nuevoDiv = document.createElement ("div"); //Crea el div contenedor de la tarea
var checkbox = document.createElement ("input"); // Crea el checkbox para tachar
var borrar = document.createElement ("i"); // Crea el icono para borrar
var texto = document.createElement ("p"); //Crea un párrafo para ingresar valor del textarea

var individualContenedor = document.getElementById("nuevoDiv") 
var maximoContenedor = document.getElementById("contenedor-tareas"); */


function agregarTarea() {
  var textoTarea = document.getElementById("text_task").value; // Obtener el valor del textarea
  var nuevoDiv = document.createElement ("div"); //Crea el div contenedor de la tarea
  var checkbox = document.createElement ("input"); // Crea el checkbox para tachar
  var borrar = document.createElement ("i"); // Crea el icono para borrar
  var texto = document.createElement ("p"); //Crea un párrafo para ingresar valor del textarea

  if(textoTarea.length >= 4 && textoTarea.length <= 100) {
    
    var tarea = document.createTextNode(textoTarea);


    hijo.appendChild(checkbox);
    hijo.appendChild(borrar);
    padre.appendChild(nuevoDiv);

  } else {
     alert("La longitud del texto no es correcta. Por favor, ingrese un texto entre 4 y 100 carácteres.")
    }
}

document.getElementById("taskList").appendChild(container);/*Agrego el elemento creado a la sección correspondiente*/

//'<input type="checkbox" value="check" name="tachar" id="checkear"/>'
// '<i class="material-icons">highlight_off</i>'


borrar.setAttribute("class", "material-icons");
borrar.innerHTML = "highlight_off";

checkbox.setAttribute ("type" , "checkbox");
checkbox.setAttribute ("id" , "checkear");

