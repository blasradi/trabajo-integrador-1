  let cantidad = parseInt(prompt("¿cuántas entradas quiere?"));
  categoria= prompt("¿qué tipo de entrada quiere?")

  switch (categoria) {
      case "estudiante":
          console.log("El precio es " + (200 * 0.2 * cantidad));
          break;
      case "trainee":
          console.log("El precio es " + (200 * 0.5 * cantidad));
          break;
      case "junior":
          console.log("El precio es " + (200 * 0.85 * cantidad));
  }



  

