var myComponent = {
  controller: myController,
  view: showDomElements
};
function myController(){
  return {text:'hello world'};
}
function showDomElements(ctrl){
  return m(m('div', ctrl.text));
}
module.exports = myComponent;