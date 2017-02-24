'use strict';
angular.module('geoFactory', []);

//Factory
app
    .provider('Geo', function()
    {
        var $ref = this;


        this.$get = function($log, $cordovaGeolocation, $q)
        {
            var self = {};

            self.takeGeo = function()
            {

                var defer = $q.defer();

                var options = {
                    frequency: 3000,
                    timeout: 100000,
                    enableHighAccuracy: false
                };


                $cordovaGeolocation.getCurrentPosition(options).then(function(position)
                {

                    defer.resolve(position);

                }, function(err)
                {

                    // ERROR
                    defer.reject(err);

                });

                return defer.promise;
            };

            return self;
        };

    });
