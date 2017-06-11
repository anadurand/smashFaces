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

  imgContainer.append(foto);
  formContainer.append(label);
  formContainer.append(input);
  formContainer.append(button);
  formContainer.append(alert);
  parent.append(imgContainer);
  parent.append(formContainer);

  let number = random(foto);
  button.on("click", function(){
    let chance = 0;
    console.log(state.selectedSede[0].students[number].name);
    if(input.val().toLowerCase() == state.selectedSede[0].students[number].name.toLowerCase()){
      alert.text("Excelente, Acertaste");
      setTimeout(function(){ return number = random(foto)},2000);
      input.val("");
    }else{
      chance += 1;
      alert.text("Sigue Intentando");
    }

  });

  return parent;
}

const random = (foto) => {
    const number = parseInt(Math.random() * state.selectedSede[0].students.length);
    foto.attr("src", "assets/img/"+ state.selectedSede[0].name + "/" + state.selectedSede[0].students[number].image);
    return number;
}

$(_ => {



});
