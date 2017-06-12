'use strict';

const Game = (update) => {
  const parent = $('<div class="game"></div>');
  const imgContainer = $('<div class="foto"></div>');
  const foto = $('<img src="" alt="" class="imagen">');
  const formContainer = $('<div class="form-container dark-gray"></div>');
  const label = $('<label for="name" class="label">Ingresa su nombre:</label>');
  const input = $('<input type="text" placeholder="Nombre" class="input">');
  const button = $('<button type="button" name="button" class="gold boton">Comprobar</button>');
  const alert = $('<p class="alert"></p>');
  const puntaje = $("#score");
  let score = 0;

  imgContainer.append(foto);
  formContainer.append(label);
  formContainer.append(input);
  formContainer.append(button);
  formContainer.append(alert);
  parent.append(imgContainer);
  parent.append(formContainer);

  let number = random(foto);
  let chance = 0;
  button.on("click", function(){
    console.log(number);
    console.log(state.selectedSede[0].students[number].name);

    if(input.val().toLowerCase() == state.selectedSede[0].students[number].name.toLowerCase()){
      alert.text("Excelente, Acertaste");
      chance = 0;
      score += 5;
      console.log(arrarNumber.length);
      if(arrarNumber.length == state.selectedSede[0].students.length){
        state.status = "over";
        arrarNumber = [];
        console.log(arrarNumber);
        update();
      }else{
        setTimeout(function(){
          number = random(foto);
          console.log(number);
          return number;
        },2000);
      }
    }else{
      chance += 1;
      alert.text("Sigue Intentando");
      if(chance == 5){
        chance = 0;
        score -= 1;
        if(arrarNumber.length == state.selectedSede[0].students.length){
          state.staus = "over";
          arrarNumber = [];
          update();
        }else{
          setTimeout(function(){
            return number = random(foto)},2000);
        }
      }
    }
    input.val("");
    puntaje.text(score);

  });

  return parent;
}

let arrarNumber=[];

const random = (foto) => {
    const numero = parseInt(Math.random() * (state.selectedSede[0].students.length));
    const actualNumber = arrarNumber.find(function(value){
                            return value == numero;
                          });
    if(actualNumber == undefined){
        foto.attr("src", "assets/img/"+ state.selectedSede[0].name + "/" + state.selectedSede[0].students[numero].image);
        arrarNumber.push(numero);
      console.log(numero);
    }else{
      console.log(numero);
      random(foto);
    }

    return arrarNumber[arrarNumber.length-1];
}
