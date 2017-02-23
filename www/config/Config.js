angular.module('App')
    .service("$config", [
        function() {
            var host = 'http://localhost:';
            application:
            {
                version => "1.0",
                environment => "development",
                language => "es",
                home => "app/login",
                host => 'http://localhost:',
                port => '8080',
                api => 'http://localhost:8080/api/v1'
            }
        }
    ]);
