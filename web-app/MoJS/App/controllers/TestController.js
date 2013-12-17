define([], function () {

        TestController.inherits = "BaseController";
        function TestController() {
                var that = this;

                that.$one$ = function() {
                        console.log("test/one", arguments);
                        this.renderText("<div>${title}${a}</div>", {a:1}).done(function(template) {
                                console.log(template)
                        });
                };

                that.$two$ = function() {
                        require(["text!DemoPlugin/views/demo/demo1.html"], function() {
                                alert(1)
                        });

                        MoJS.MoCP.render("/_MoJS_/DemoPlugin/views/demo/demo.html", {}).done(function(template){

                        });

                        MoJS.MoVC.forward({
                                controller: "start"
                        });

                        MoJS.MoVC.redirect({
                                controller: "start",
                                action: "test",
                                args : ["2", "3"],
                                active: true
                        });

                };

                that.$three$ = function(params) {
                        var str  = localStorage.tmp;
                        var mojs = jQuery(str).find("[mojs]");

                        App.show.call(this, params, str)
                };
        }

        return TestController;
});