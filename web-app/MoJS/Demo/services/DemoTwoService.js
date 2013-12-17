define([], function() {

        function DemoTwoService() {
                console.log("DemoTwoService", arguments)

                this.demoTwo = function() {
                        console.log("DemoTwoService");
                }

        }

        return DemoTwoService;
});