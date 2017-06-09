'use strict';
const StartGame = (update) => {
  const parent = $('<div class="start"></div>');
  const h2 = $('<h2 class="start-title">Escoge una sede para empezar a jugar</h2>');

  parent.append(h2);
  return parent;
}
