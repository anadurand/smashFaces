'use strict';

const Game = (update) => {
  const parent = $('<div class="game"></div>');
  const imgContainer = $('<div class="foto"></div>');
  const foto = $('<img src="" alt="" class="imagen">');
  const formContainer = $('<div class="form-container dark-gray"></div>');
  const label = $('<label for="name" class="label">Ingresa su nombre:</label>');
  const input = $('<input type="text" placeholder="Nombre" class="input">');
  const button = $('<button type="button" name="button" class="gold boton">Comprobar</button>');
  const alerta = $('<p class="alert"></p>');
  const puntaje = $("#score");
  let score = 0;

  imgContainer.append(foto);
  formContainer.append(label);
  formContainer.append(input);
  formContainer.append(button);
  formContainer.append(alerta);
  parent.append(imgContainer);
  parent.append(formContainer);

  let number = random(foto, alerta);
  let chance = 0;
  button.on("click", function(){
    console.log(state.selectedSede[0].students[number].name);

    if(input.val().toLowerCase() == state.selectedSede[0].students[number].name.toLowerCase()){
      alerta.text("Excelente, Acertaste");
      chance = 0;
      score += 5;
      foto.addClass("fade");

      if(arrarNumber.length == state.selectedSede[0].students.length){
        state.status = "over";
        arrarNumber = [];
        update();
      }else{
        setTimeout(function(){
          number = random(foto, alerta);
          foto.removeClass("fade");
          return number;
        },2000);
      }
    }else{
      chance += 1;
      alerta.text("Sigue Intentando");
      if(chance == 5){
        chance = 0;
        score -= 1;
        foto.addClass("fade");
        
        if(arrarNumber.length == state.selectedSede[0].students.length){
          state.staus = "over";
          arrarNumber = [];
          update();
        }else{
          setTimeout(function(){
            foto.removeClass("fade");
            return number = random(foto, alerta);},2000);
        }
      }
    }
    input.val("");
    puntaje.text(score);

  });

  return parent;
}

let arrarNumber=[];

const random = (foto, alerta) => {
    const numero = parseInt(Math.random() * (state.selectedSede[0].students.length));
    const actualNumber = arrarNumber.find(function(value){
                            return value == numero;
                          });
    if(actualNumber == undefined){
        foto.attr("src", "assets/img/"+ state.selectedSede[0].name + "/" + state.selectedSede[0].students[numero].image);
        arrarNumber.push(numero);
    }else{
      random(foto);
    }
    alerta.text("");
    return arrarNumber[arrarNumber.length-1];
}
