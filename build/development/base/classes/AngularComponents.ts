/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-ui-router" />
import ControllerContext = require("base/classes/ControllerContext");
export class AngularComponents {
    private ModuleName: string;
    public Controllers: ControllerType[] = new Array<ControllerType>();

    constructor(moduleName: string) {
        this.ModuleName = moduleName;
    }
    public AddController(categoryName: string, controllerName: string, url: string, state: string): void {
        this.Controllers.push(new ControllerType(this.ModuleName, categoryName, controllerName, url, state));
    }
}

export class ControllerType {
    public CategoryName: string;
    public ControllerName: string;
    private ModuleName: string;
    public Url: string;
    public State: string;
    public get ControllerKey(): string {
        return this.ModuleName + "." + this.CategoryName + "." + this.ControllerName;
    }
    public get Controller(): string {
        var controllerPath = "modules/" + this.ModuleName + "/controllers/" + this.CategoryName + "/" + this.ControllerName + "Controller"
        return controllerPath;
    }
    public get View(): string {
        var viewPath = "modules/" + this.ModuleName + "/views/" + this.CategoryName + "/" + this.ControllerName + ".html";
        return viewPath;
    }
    constructor(moduleName: string, categoryName: string, controllerName: string, url: string, state: string) {
        this.CategoryName = categoryName;
        this.ControllerName = controllerName;
        this.Url = url;
        this.State = state;
        this.ModuleName = moduleName;
    }
}

export class AngularModule {
    public ModuleName: string;
    public Components: AngularComponents;
    constructor(moduleName: string, components: AngularComponents) {
        this.ModuleName = moduleName;
        this.Components = components;
        this.Initialize();
    }
    private Initialize() {
        var listModule: ng.IModule = angular.module(this.ModuleName, []);
        var _this = this;
        //config module
        listModule.config(function (
            $controllerProvider: ng.IControllerProvider,
            $routeProvider: ng.route.IRouteProvider,
            $stateProvider: angular.ui.IStateProvider,
            $httpProvider: ng.IHttpProvider,
            $locationProvider: ng.ILocationProvider): void {
            _this.Components.Controllers.forEach((x) => {
                var defer;
                $stateProvider
                    .state(x.State, {
                    controllerAs: "this",
                    controller: x.ControllerKey,
                    url: x.Url,
                    templateUrl: require.toUrl(x.View),
                    resolve: {
                        delay: function ($q, $rootScope) {
                            defer = $q.defer();
                            require([x.Controller], function (arg) {
                                var controller = arg;
                                $controllerProvider.register(x.ControllerKey, arg);
                                defer.resolve();
                                $rootScope.$apply();
                            })
                            return defer.promise;
                        },
                        controllerContext: function ($http, $rootScope, $stateParams, $state) {
                            return new ControllerContext($http, $rootScope, $stateParams, $state);
                        }
                    }
                });
            });
        }
            );
    }
}
