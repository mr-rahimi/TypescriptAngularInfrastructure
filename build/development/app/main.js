'use strict';
require.config({
    paths: {
        'base': '../base',
        'models': '../models',
        'services': '../services',
        'modules': '../modules',
        app: '.',
        angular: '../lib/angularjs/angular',
        'jquery': '../lib/jquery/jquery-2.1.4.min',
        'bootstrap': '../lib/bootstrap/bootstrap.min',
        'angular-route': '../lib/angularjs/angular-route',
        'angular-ui-router': '../lib/angularjs/angular-ui-router.min',
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'angular-ui-router': {
            deps: ['angular'],
            exports: 'angular-ui-router'
        }

    }
});

require(['appStart'], function (appStart) {
    appStart.bootstrapApplication();
});