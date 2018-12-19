// The main differences between MVP and MVC could be summarized in the following list:
// Having a presenter instead of a controller, we will see in a moment which benefits come in with a presenter.
// The relation between a view and a presenter is not 1 to many like in MVC but is always 1 to 1.
// The best MVP implementation for having reusable components is when we design our views as passive views because swapping them becomes easier as long the contract between the presenter and the view is respected.


// MODEL
function TaskModel(_text){
  var ID = (new Date()).getTime(), Text = _text;
  this.getID = function(){
    return ID;
  };
  this.getText = function(){
    return Text;
  };
  this.setText = function(value){
    Text = value;
  }
}

// VIEW
function TaskView(){
  var html;
  function init(){
    html = $("<input type='checkbox'/><label></label></li>");
  }

  var public = {
    getHtml: function(){
      return html;
    },
    setModel: function(model){
      html.find("input").attr("id", model.getID());
      html.find("label").attr("for", model.getID());
      html.find("label").html(model.getText());
    },
    addCheckedHandler: function(handler){
      html.find("input").click(handler);
    },
    remove: function(){
      html.remove();
    }
  };

  init();
  return public;
}

// PRESENTER
function TaskPresenter(_view){
  var view, model;

  function init(){
    view = _view;
    view.addCheckedHandler(function(){
      view.remove();
    });
  }

  var public = {
    getView: function(){
      return view;
    },
    setModel: function(_model){
      model = _model;
      view.setModel(model);
    }
  };

  init();
  return public;
}


// INIT
var model = new TaskModel("Hello world!");
var task = new TaskPresenter(new TaskView());

task.setModel(model);

$("body").append(task.getView().getHtml());

