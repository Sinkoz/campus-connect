 (function(){
     'use strict';

     // get main module and configure
     angular
         .module('campusconnect')
         .config(configure);

     function configure($routeProvider) {
                 $routeProvider
                     .when('/',{
//                         templateUrl: "commons/questions-main",
//                         controller: "clefQuestionsMainController",
//                         controllerAs: "$ctrl"
                     })
     };

 })();
