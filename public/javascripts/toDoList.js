(function(w) {
  var MyComponent = {
    viewModel: {
      toDo: [
        {id: 0, desc: 'mithril', checkedToggle: true},
        {id: 1, desc: 'node', checkedToggle: true},
        {id: 2, desc: 'node2', checkedToggle: true},
        {id: 3, desc: 'english', checkedToggle: false},
        {id: 4, desc: 'chinese', checkedToggle: false},
        {id: 5, desc: 'chinese2', checkedToggle: false},
      ],
      toDoListToggle: function (item){
        item.checkedToggle = !item.checkedToggle;
      },
      deleteItem: function (toDelete){
        MyComponent.viewModel.toDo = MyComponent.viewModel.toDo.filter(function (item){
          return item.id != toDelete.id;
        })
      },
      editItem: function (item){
        var retVal = prompt("description : ", item.desc);
        MyComponent.viewModel.toDo = MyComponent.viewModel.toDo.map(function(l){
          item.desc === l.desc ? l.desc = retVal : null;
          return l;
        });
      },
      addItem: function (){
        var retVal = prompt("description : ", 'your description');
        retVal !==  'your description' ? MyComponent.viewModel.toDo.push({desc: retVal, checkedToggle: false}) : null;
      },
    },
    controller: myController,
    view: myView
  };
  function myController(){
    return MyComponent.viewModel;
  }
  function displayDomElements(list){
    var toDos = [];
    var finished = [];
    var temp = [];
    list.forEach(function (l){
      temp = l.checkedToggle ? toDos : finished;
      temp.push(m('div.list-item', {
        key: l.id
      }, [
        m('span.desc', l.desc),
        m('input.checkedbox', {
          type: 'checkbox',
          checked: l.checkedToggle,
          onclick: MyComponent.viewModel.toDoListToggle.bind(null, l)
        }),
        m('button.deleteBtn', {onclick: MyComponent.viewModel.deleteItem.bind(null, l)}, 'delete'),
        m('button.editBtn', {onclick: MyComponent.viewModel.editItem.bind(null,l)}, 'Edit')
      ]));
    });
    var listDom = {
      toDos: toDos,
      finished: finished
    };
    return listDom;
  };

  function myView(ctrl){
    var toDoList = displayDomElements(ctrl.toDo);
    return m('div.to_do_list', [
      m('.btn-group', [
        m('button.addBtn', {onclick: MyComponent.viewModel.addItem.bind(ctrl)}, 'ADD'),
      ]),
      m('div.to_do', toDoList.toDos),
      m('div.finished', toDoList.finished)
    ]);
  }

  m.mount(document.getElementById('content'), MyComponent);
})(window);