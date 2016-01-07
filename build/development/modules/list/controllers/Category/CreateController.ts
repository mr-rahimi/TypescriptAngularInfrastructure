import ref = require("modules/list/in");

class CategoryCreateController {
    private categoryService: ref.Services.CategoryService;
    public category: ref.Models.Category;
    public static $inject: string[] = ["$scope", "controllerContext"];
    constructor(private $scope: any, private context: ref.Base.ControllerContext) {
        this.categoryService = this.context.GetService(ref.Services.CategoryService);
        this.category = new ref.Models.Category();
        $scope.category = this.category;
    }
    
    Create(): void {
        this.categoryService.Create(this.category)
            .success(response => {
            this.context.StateService.go("category");
        })
            .error(g => {
        });
    }
}
export =CategoryCreateController;

