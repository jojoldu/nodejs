/**
 * Created by jojoldu on 15. 7. 25.
 */
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/member.html',
            controller: 'MemberController'
        });

    $locationProvider.html5Mode(true);

}]);