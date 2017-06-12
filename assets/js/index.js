'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.selectedSede != null){
    if(state.status != null){
      wrapper.append(GameOver(update));
    }else{
      wrapper.append(Game(update));
    }
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
  selectedSede: null,
  status: null
}
const root = $(".root");
$(_ => {
  const select = $("select");

  select.change(function(){
    state.selectedSede =  state.sedes.filter(function(sede){
                            return sede.name == select.val();
                          });
      state.status = null;
      arrarNumber=[];
      update();

  });
  render(root);
  //console.log(state.sedes);

});
