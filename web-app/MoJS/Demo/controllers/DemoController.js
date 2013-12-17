define([], function () {

        function DemoController() {
                console.log("DemoController", arguments);

                this.$index$ = function (params) {
//                        "$DemoPlugin$demo/demo.html"

//                        require(["key -> jsonp!http://ip.jsontest.com/"], function() {
//                                console.log(1111443, arguments)
//                        })

                        window.obj = { a : 1 }

                        MoJS.MoCP.render("$DemoPlugin$demo/demo.html", {obj: window.obj}).done(function(template) {
                                console.log(template)
                                jQuery("body").html(template);
                        });

                        setTimeout(function() {
                                obj.a = 2;
                                MoJS.MoCP.sync(obj)
                        }, 1000)

                };
        }

        return DemoController;
});