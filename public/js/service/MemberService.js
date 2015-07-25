/**
 * Created by jojoldu on 15. 7. 25.
 */
angular.module('MemberService', []).factory('Member', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/members');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(member) {
            return $http.post('/api/members', member);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/members/' + id);
        }
    }       

}]);