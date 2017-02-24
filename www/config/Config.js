angular.module('config', [])
.constant('config', {
	developerMode: true,
	appName: "----",
	keylocal: "",
	appVersion: "1.0",
	module : ['user'],
	api : 'http://localhost:8080/api/v1/'
});
