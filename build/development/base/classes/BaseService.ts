import ServiceConfig = require("base/classes/ServiceConfig");

class BaseService {
    private $httpWraper: HttpWraper;
    private $http: ng.IHttpService;
    private serviceConfig: ServiceConfig;
    public get Http(): HttpWraper {
        return this.$httpWraper;
    }
    public set Config(value: ServiceConfig) {
        this.serviceConfig = value;
        this.$httpWraper = new HttpWraper(this.$http, value.ServiceUrl);
    }
    constructor(http: ng.IHttpService) {
        this.$http = http;
    }
}
class HttpWraper {
    private $http: ng.IHttpService;
    private baseUrl: string;
    private getUrl(path: string) {
        return this.baseUrl + path;
    }
    constructor(http: ng.IHttpService, baseUrl: string) {
        this.baseUrl = baseUrl;
        this.$http = http;
    }
    Get(url: string, RequestConfig?: any): ng.IHttpPromise<any> {
        var absoluteUrl: string = this.getUrl(url);
        return this.$http.get(absoluteUrl, RequestConfig);
    }
    Post(url: string, data: any, RequestConfig?: any): ng.IHttpPromise<any> {
        var absoluteUrl: string = this.getUrl(url);
        return this.$http.post(absoluteUrl, data, RequestConfig);
    }
}
export = BaseService;
