const listadoTareas = []
var id = 1;
var contador = 0;

const dibujarFilas = () => {
    let tbody = document.querySelector("#tareas tbody")
    tbody.innerHTML = ''

    listadoTareas.forEach(tarea => {
        tbody.innerHTML += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.tarea}</td>
                <td><label><input type="checkbox" id="${tarea.id}" onclick='realizadas(${tarea.id})' value="first_checkbox"></label></td>
                <td><img src="./assets/img/eliminar.png" onclick='eliminar(${tarea.id})' value='${tarea.id}'></td>
            </tr>
        `
    })
}


document.querySelector("#btn-agregar").addEventListener("click", function() {

    let tarea = document.querySelector("#tarea").value
  

    let item = {
        id,
        tarea,
    }

    listadoTareas.push(item)
    console.log(tarea);
    dibujarFilas()
    id++
    sumar();
})

function sumar ()
{
    // x = 0;
 
    // listadoTareas.forEach(tarea => {
    //    x ++;
    //    document.querySelector('#total').innerHTML = x; 
    // }) 
    // ojito que funciona igual

    document.querySelector('#total').innerHTML = listadoTareas.length; 

}


function eliminar(id)
{ 
 
    id --;
    listadoTareas.splice(id,1)
    dibujarFilas();
    sumar();
    console.log(listadoTareas)
 
}

function realizadas(id)
{

        var realizada = document.getElementById(id);
        if (realizada.checked){
           contador ++;
        }else{
           contador --;
        }
        document.querySelector('#realizadas').innerHTML = contador; 

}