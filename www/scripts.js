
// DESPLIEGUE MODAL

function myFunction() {
    document.getElementById("myModal").style.display = "flex";
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

// DESELECCIONAR BOTON INTERNET

function checki() {

  if(!this.checked){
this.checked=true;

  }
 else if (this.checked){
     e=document.getElementById("chk");
     var a =document.createElement("input");
     a.type="radio";
     a.name="internet";
     a.checked=true;
     e.appendChild(a);
     e.removeChild(a);

     this.checked=false;
  }
};

// DESELECCIONAR BOTON MINUTOS

function checkm() {

  if(!this.checked){
this.checked=true;

  }
 else if (this.checked){
     e=document.getElementById("chk");
     var a =document.createElement("input");
     a.type="radio";
     a.name="minutos";
     a.checked=true;
     e.appendChild(a);
     e.removeChild(a);

     this.checked=false;
  }
};