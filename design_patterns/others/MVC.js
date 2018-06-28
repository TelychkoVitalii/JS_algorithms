// VIEW
var view = {
    showNumber: function (n) {
        var el = document.getElementById('showResult');
        el.innerHTML = n;
    }
};

// MODEL
var model = {
    number: 0,
    calculate: function (x, y) {
        this.number = x * y;
        var result = this.number;
        view.showNumber(result);
    }
};

// CONTROLLER
var controller = {
    handleClick: function () {
        model.calculate(3, 4);
    }
};

// INITIALIZE FUNCTION
(function () {
    var app = {
        init: function () {
            this.event();
        },

        event: function () {
            var el = document.getElementById('calcUser');
            el.onclick = controller.handleClick;
        }

    };

    app.init();
}());