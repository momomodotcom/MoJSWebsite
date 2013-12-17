define([], function() {

        UserService.inherits = "BaseService";
        function UserService() {
                var that = this;

                that.userOne = function() {
                        console.log("UserService")
                }

        }

        return UserService;
});