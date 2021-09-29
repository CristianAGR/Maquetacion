$(document).ready(function () {
  if(window.location.href.indexOf("INDEX") >=1){
  $(function () {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      //pager:false
    });
  });
  }
  if(window.location.href.indexOf("INDEX") >=1){
  //posts
  var posts = [
    {
      title: "Titulo 1",
      date: "Publicado el dia " + 
      moment().format("DD") + 
      " de " + 
      moment().format("MMM") + 
      " del " + 
      moment().format("YYYY"),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Titulo 2",
      date: "Publicado el dia " + 
      moment().format("DD") + 
      " de " + 
      moment().format("MMM") + 
      " del " + 
      moment().format("YYYY"),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ];
  console.log(posts);
  //recorrer el JSON para enviar al index.HTML
  posts.forEach((item,index) => {
    var post = `<article class="post">
<h2>${item.title}</h2>
<span class="date">${item.date}</span>
<p>
    ${item.content}
</p>
<a href="https://twitter.com/" class="button-more">Articulo completo</a>
</article>`;
//console.log(post);
$("#posts").append(post);
  });

}
//Selector de tema
var theme = $("#theme");

$("#to-green").click(function(){
  theme.attr("href","css/green.css");
  alert("La pagina ha cambiado de tema");
});
$("#to-blue").click(function(){
  theme.attr("href","css/blue.css");
  alert("La pagina ha cambiado de tema");
});
$("#to-red").click(function(){
  theme.attr("href","css/red.css");
  alert("La pagina ha cambiado de tema");
});

//Login LocalStorage

$("#login form").submit(function(){
  let form_name = $("#form_name").val();
  //alert(form_name)
  localStorage.setItem("form_name",form_name); //permite asignar a un identificador lo que se obtiene del formulario
  window.close("INDEX.HTML");
  window.open("perfil.html");
});

var form_name = localStorage.getItem("form_name");

if(form_name!=null && form_name != "undefined"){
//si el nombre existeZ
let about_parrafo = $("#about p");
//$("#about p").html("<b>Bienvenido "+form_name+"</b>");
$("#about p").html("<b>Bienvenido "+form_name+"</b>");
about_parrafo.append("<br><a href= '#' id = 'logout' >Cerrar sesion</a>");
$("#login").hide();

//cerrar sesion
$("#logout").click(function (){
localStorage.clear();
location.reload();
});
}
else{
  alert("Ingrese con su nombre");
}


});

