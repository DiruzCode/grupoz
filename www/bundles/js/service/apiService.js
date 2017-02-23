angular.module('App')
    .service("$Api", ['$http','config',
        function($http, config) {

            this.GET = function(url) {
                return $http.get(config.api + url).success(function(data) {
                    return data;
                });
            };

            this.PUT = function(url,params) {
                return $http.put(config.api + url, params).success(function(data) {
                    return data;
                });
            };

            this.POST = function(url,params) {
                return $http.post(config.api + url, params).success(function(data) {
                    return data;
                });
            };

            this.DELETE = function(url,params) {
                return $http.delete(config.api + url, params).success(function(data) {
                    return data;
                });
            };
        }
    ]);
