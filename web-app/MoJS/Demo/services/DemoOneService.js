define([], function() {

        DemoOneService.extends = "$DemoPlugin$DemoTwoService";
        function DemoOneService() {
                console.log("DemoTwoService", arguments)

                this.demoOne = function() {
                        console.log("DemoOneService");
                }

        }

        return DemoOneService;
});