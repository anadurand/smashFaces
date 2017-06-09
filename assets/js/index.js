'use strict'
const render = (root, sede) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.selectedSede != null){
    console.log(state.selectedSede);
    //wrapper.append(Game(update));
  }else{
    wrapper.append(StartGame(update));
  }

  root.append(wrapper);
}
const update = function(){
    render(root);
}
const state = {
  sedes: sedes,
  selectedSede: null
}
$(_ => {
  const root = $(".root");
  const select = $("select");

  select.change(function(){
    state.selectedSede =  state.sedes.filter(function(sede){
                            return sede.name == select.val();
                          });
      render(root, state.selectedSede);

  });
  render(root, state.selectedSede);
  console.log(state.sedes);

});
