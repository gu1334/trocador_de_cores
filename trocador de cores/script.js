


function changecolor(){
    document.body.style.backgroundColor = gerar_cor();
    document.getElementById("myDiv").innerHTML = "BackGround Color:  " + gerar_cor();
    
    document.getElementById("boton").style.color = "white";

}




function gerar_cor() {

    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        //ele repete esse codigo 6 vezes, q de cada vez
      color = color + letters[Math.floor(Math.random() * 16)];
      /*
       o Math.random() vai pegar  um numero de 0 a 16 que esta dentro do letters 0123456789ABCDEF
       math.floor vai retornar o numero inteiro arredondando para baixo
    */
   
    }
    
    return color;
    
  }

  
  
  console.log(gerar_cor()) // #8432EA
