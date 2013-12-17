define([], function () {

        StartController.inherits = "BaseController";
        function StartController(UserService) {
                var that = this;

                that.$index$ = "start";

                that.$start$ = function(params) {
                        var request = this;
                        if ( !that.$start$.cache ) {
                                that.$start$.cache = request.render("start/start.html");
                        }

                        return that.$start$.cache.done(function(template, model) {
                                App.show(request, template);
                        });
                };

                that.$contributors$ = function(params) {
                        var request = this;
                        if ( !that.$contributors$.cache ) {
                                that.$contributors$.cache = request.render("start/contributors.html");
                        }

                        return that.$contributors$.cache.done(function(template, model) {
                                App.show(request, template);
                        });
                };

                that.$community$ = function(params) {
                        alert("Not added")
                };

                that.$download$ = function(params) {
                        alert("Not added")
                };

                that.$donate$ = function(params) {
                        alert("Not added")
                };
        }


        return StartController;
});