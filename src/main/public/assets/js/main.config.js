 (function(){
     'use strict';

     // get main module and configure
     angular
         .module('campusconnect')
         .config(configure);

     function configure($routeProvider) {
                 $routeProvider
                     .when('/',{
                        templateUrl: "templates/partials/newEvents.html",
                     })
                     .when('/hotThreads',{
                        templateUrl: "templates/partials/hotThreads.html",
                     })
                     .when('/newEvents',{
                        templateUrl: "templates/partials/newEvents.html",
                     })
                     .when('/blockchain',{
                        templateUrl: "templates/partials/blockchain.html",
                     })
                     .when('/topicsHome',{
                        templateUrl: "templates/partials/topicsHome.html",
                     })
     };

 })();
