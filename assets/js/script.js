var lastScrollTop = 0;
window.addEventListener("scroll", function(){
  console.log(lastScrollTop);
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll < lastScrollTop){
     document.getElementById("nav-header").classList.remove("header-in");
     // document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById("nav-header").classList.add("header-in");
     // document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=35){
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);

//FUNCIONES BLUR Y FOCUS
  var focusInput = function() {//cuando da click en el input:
    //parentElement(elemento padre) en nuestro caso es el "div -- input-group"
    this.parentElement.children[1].className = "label active"; //AGREGANDO LA CLASE="LABEL ACTIVE"
    //Reemplazamos la clase error por vacio // quitamos la clase error
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
  };

  var blurInput = function() { //cuando da click fuera del input------
    if (this.value <= 0) { //SI EL INPUT ESTA VACIO
      this.parentElement.children[1].className = "label"; //Agregamos la clase ="label" y ---quitamos "active"
      this.parentElement.children[0].className = this.parentElement.children[0].className + " error"; //concatenamos la clase:error
    }
  };
  var formulario = document.formulario_registro, //accede a todo el documento que tenga el name="formulario_registro"
    elementos = formulario.elements;


  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "tel" || elementos[i].type == "email" || elementos[i].type == "text") {
      elementos[i].addEventListener("focus", focusInput);
      elementos[i].addEventListener("blur", blurInput);
    }
  }
