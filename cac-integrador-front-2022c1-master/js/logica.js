  function Resumen (){
    let cantidad=document.getElementById("cantidad").value; 
    let categoria=document.getElementById("categoria").value;
    console.log(cantidad);
    console.log(categoria);
    if (categoria=="Selecciona una categoría"){
        alert("Indique qué tipo de entradas quiere comprar")
        document.getElementById(categoria).focus();
    }
    if (cantidad<=0){
        alert("Indique cuántas entradas quiere comprar")
        document.getElementById(cantidad).focus();  
    }

    switch (categoria) {
      case "Estudiante":
        document.getElementById("total").innerHTML =("Total a pagar " + (200 * 0.2 * cantidad) + "$");
          break;
      case "Trainee":
        document.getElementById("total").innerHTML =("Total a pagar " + (200 * 0.5 * cantidad) + "$");
          break;
      case "Junior":
        document.getElementById("total").innerHTML =("Total a pagar " + (200 * 0.85 * cantidad) + "$");
  }
}
