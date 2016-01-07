import ref = require("modules/list/in");

class CategoryDeleteController {
    public categoryService: ref.Services.CategoryService;
    public static $inject: string[] = ["$scope", "controllerContext"];
    constructor(private $scope: any, private context: ref.Base.ControllerContext) {
        this.categoryService = this.context.GetService(ref.Services.CategoryService);
    }

    Create(newCategory: ref.Models.Category): void {

        this.$scope.categoryService.Create(newCategory)
            .success(response => {
            this.context.StateService.go("category");
        })
            .error(g => {
        });
    }
}
export =CategoryDeleteController;


