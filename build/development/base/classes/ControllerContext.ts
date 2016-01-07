class ControllerContext {
    public StateService: angular.ui.IStateService;
    public HttpService: ng.IHttpService;
    public RootScope: ng.IScope;
    public StateParams: any;
    public GetService<T>(t: IService<T>) {
        var obj = new t(this.HttpService);
        return obj;
    }

    constructor(
        $http: ng.IHttpService,
        $rootScope: ng.IScope,
        $routeParam: Object,
        $state: angular.ui.IStateService
        ) {
        this.StateService = $state;
        this.HttpService = $http;
        this.StateParams = $routeParam;
        this.RootScope = $rootScope;

    }
}
export = ControllerContext;