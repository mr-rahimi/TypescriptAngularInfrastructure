import ref = require("modules/list/in");

class CategoryEditController {
    public categoryService: ref.Services.CategoryService;
    public static $inject: string[] = ["$scope", "controllerContext"];
    constructor(
        private $scope: any, private context: ref.Base.ControllerContext) {
        this.categoryService = this.context.GetService(ref.Services.CategoryService);
        var id = context.StateParams.Id;
        this.categoryService.Get(id).success(response => {
            $scope.Category = response;
        })
            .error(g => {
        });;
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

export = CategoryEditController;
