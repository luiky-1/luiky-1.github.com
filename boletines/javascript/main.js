/*  console.log("hola desde archivo externo javascript");

  //dom para realizar busquedas. el resultado de la busqueda podemos almacenarlo en la variable que hemos creado(let container solo devuelve un elemento, el primero q encuentra)
  let tabla =  document.querySelector(".table");
  console.log(tabla);

  //para buscar todo se usa
  let links = document.querySelectorAll("a");
    console.log(links);



  links.forEach(function(link){
    console.log(link);
  });

//para buscar todo se usa
//let links = document.querySelectorAll("a");
//console.log(links);
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener("click",function(){
    console.log(this); imprime en consola lo que se clica
  })
});*/
//obtener los elementos de la clase
let links = document.querySelectorAll(".close");
//recorrerlos
links.forEach(function(link){
  //agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
      ev.preventDefault()
      let content = document.querySelector(".content");
      //quitarle las clases de animacion que ya addEventListener
      content.classList.remove("fadeInDown");
      content.classList.remove("animated");

      //agregar clases para animar su salida
      content.classList.add("fadeOutUp");
      content.classList.add("animated");

      setTimeout(function(){
        location.href = "/boletines";
      },600);
      //setInterval repetiria la animacion a cada 600 milisegundos




      return false;//evita que el comportamiento siga su funcion, no funciona el cierre
    });
});






/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(iconos){
  iconos.classList.remove("fa-star");
  iconos.classList.add("fa-star");
})*/
