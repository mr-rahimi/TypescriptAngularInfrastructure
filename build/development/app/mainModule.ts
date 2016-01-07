/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-route" />
/// <amd-dependency path="angular-ui-router" />

import List = require("modules/list/out");

var Application: ng.IModule = angular.module("testApp.application", [
    "ngRoute",
    "ui.router",
    List.ModuleName
])
    .run(function ( $window: ng.IWindowService, $location: ng.ILocationService, $state: angular.ui.IStateService): void {
    
    $state.go("category");
})
  .config(function ($routeProvider: ng.route.IRouteProvider, $stateProvider: angular.ui.IStateProvider, $httpProvider: ng.IHttpProvider, $locationProvider: ng.ILocationProvider): void {
});

export = Application;
