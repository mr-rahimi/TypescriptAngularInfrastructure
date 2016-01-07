export function bootstrapApplication() {
    require(['angular','bootstrap','./app/mainModule'], function (angular) {
        angular.bootstrap(document, ['testApp.application']);
    });
} 

    
