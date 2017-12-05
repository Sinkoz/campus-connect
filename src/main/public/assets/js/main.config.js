 (function(){
     'use strict';

     // get main module and configure
     angular
         .module('campusconnect')
         .config(configure);

     function configure($routeProvider) {
                 $routeProvider
                     .when('/',{
                        templateUrl: "views/index.html",
                        controller: "navigationController",
                        controllerAs: "$ctrl"
                     })
                     .when("/blockchain", {
                      templateUrl : "view/pages/blockchain.html"
                      controller: "navigationController",
                      controllerAs: "$ctrl"
    })
     };

 })();
