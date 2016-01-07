class ServiceConfig {
    private serviceUrl: string;
    public get ServiceUrl() {
        return this.serviceUrl;
    }
    constructor(serviceUrl:string) {
        this.serviceUrl = serviceUrl;
    }
}
export =ServiceConfig;
 