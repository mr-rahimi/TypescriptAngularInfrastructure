class DirectiveHelper {
    public static addDirective(ngModule: ng.IModule, name: string, directive: any): ng.IModule {
        return ngModule.directive(name, [].concat(directive.$inject, function (): Function {
            var args: Array<any> = Array.prototype.slice.call(arguments, 0);
            args.unshift(null);
            return new (Function.prototype.bind.apply(directive, args));
        }));
    }
}
export = DirectiveHelper;
    
