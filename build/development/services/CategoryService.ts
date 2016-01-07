import ref = require("services/in");

class CategoryService extends ref.Base.BaseService {
    static $inject = ["$http"];
    constructor(http:ng.IHttpService) {
        super(http);
        var config = new ref.Base.ServiceConfig("http://localhost:3308");
        this.Config = config;
    }
    GetAll = () => {
        var url ="/api/Category/GetAll";
        var res = <ng.IHttpPromise<ref.Models.Category[]>> this.Http.Get(url);
        return res;
    }
    Create = (newEntity: ref.Models.Category) => {
        var url = "/api/Category/Create";
        var res = <ng.IHttpPromise<void>> this.Http.Post(url, newEntity);
        return res;
    }
    Get = (CategoryId: number) => {
        var url = "/api/Category/Get/1";
        var res = <ng.IHttpPromise<ref.Models.Category>> this.Http.Get(url);
        return res;
    }
    GetAll1 = () => {
        var injector = angular.injector(['ng']);
        var h:ng.IHttpService = injector.get('$http');
        return h.get("http://localhost:13534/api/Category/GetAll");
    }
}
export = CategoryService;
