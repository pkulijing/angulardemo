'use strict';

angular.module('confusionApp')

        .constant("baseURL", "http://localhost:3000/")

        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

              this.getDishes = function(){
                return $resource(baseURL + "dishes/:id", null, {'update':{method:'PUT'}});
                // return $http.get(baseURL+"dishes");
            };
            //     this.getDish = function (index) {
            //     return $http.get(baseURL+"dishes/"+index);
            // };


            this.getPromotions = function() {
              return $resource(baseURL + "promotions/:id");
            };


        }])

        .service('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
          this.getFeedbacks = function() {
            return $resource(baseURL + "feedback/:id");
          };
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

            var corpfac = {};

            corpfac.getLeaders = function () {
              return $resource(baseURL + "leadership/:id");
            };

            return corpfac;

        }])

;
