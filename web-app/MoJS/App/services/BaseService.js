define([], function() {

        function BaseService() {
                var that = this;

                that.baseOne = function() {
                        console.log("BaseService")
                }

        }

        return BaseService;
});