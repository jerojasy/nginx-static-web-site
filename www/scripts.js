
// DESPLIEGUE MODAL

function myFunction() {
    document.getElementById("myModal").style.display = "flex";
  };

// DESACTIVAR BOTON "LO QUIERO"

  function active() {
    document.getElementById('btnbuy').disabled = false;
  };

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