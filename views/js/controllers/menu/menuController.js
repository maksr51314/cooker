(function () {
    'use strict';

    angular.module('myApp', [])
        .directive('menu', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    loc: '@location',
                    menus: '='
                },
                link: function($scope, $element) {

                },
                template:
                    '<ul class="nav navbar-nav {{loc}}">' +
                        '<li ng-repeat="m in menus.left">' +
                            '<a ng-href="{{m.link}}">{{m.text}}</a>' +
                        '</li>' +
                    '</ul>'
            };
        })

        .controller('MenuCtrl', function ($scope) {
            $scope.menus = {
                "current": "index",
                "left": [{
                    "active": true,
                    "link": "\/",
                    "text": "Home"},
                    {
                        "active": false,
                        "link": "\/#\/view1",
                        "text": "Awards"},
                    {
                        "active": false,
                        "link": "\/#\/view2",
                        "text": "Players"},
                    {
                        "active": false,
                        "link": "\/episodes",
                        "text": "Episodes"},
                    {
                        "active": false,
                        "link": "\/about",
                        "text": "About"},
                    {
                        "active": false,
                        "link": "\/contact",
                        "text": "Contact Us"}],
                "rightLink": "\/session\/index",
                "rightText": "Log In"
            };
        });
}());





