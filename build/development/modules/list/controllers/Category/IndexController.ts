import ref = require("modules/list/in");

class CategoryIndexController {
    private categoryService: ref.Services.CategoryService;
    public static $inject: string[] = ["$scope", "controllerContext"];
    constructor(private $scope: any, private context: ref.Base.ControllerContext) {
        this.categoryService = this.context.GetService(ref.Services.CategoryService);
        this.GetAll();
    }
    GetAll(): void {
        this.categoryService.GetAll()
            .success((res) => {
            this.$scope.CategoryItems = res;
        })
            .error(g => {
        });
    }
}
export =CategoryIndexController;


