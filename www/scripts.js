
// DESPLIEGUE MODAL

function myFunction() {
    document.getElementById("myModal-alerta").style.display = "flex";
  };

  function closemodal() {
    document.getElementById("myModal-alerta").style.display = "none";
  };

// DESACTIVAR BOTON "LO QUIERO"

function active() {
  var vigencia= document.querySelector("input[name=vigencia]:checked");
  var internet = document.querySelector("input[name=internet]:checked");
  var minutos = document.querySelector("input[name=minutos]:checked");
  if(vigencia&&internet||minutos){
    document.getElementById('btnbuy').disabled = false;
  }else{
    document.getElementById('btnbuy').disabled = true;
  }
}

// DESELECCIONAR RADIOBUTTON
var era;
var previo=null;

function uncheckRadio(rbutton) {
if(previo &&previo!=rbutton){previo.era=false;}
if(rbutton.checked==true && rbutton.era==true){rbutton.checked=false;}
rbutton.era=rbutton.checked;
previo=rbutton;
}



function startscroll() {
  var elmnt = document.getElementById("planv");
  elmnt.scrollIntoView("radio-vig1");
  }