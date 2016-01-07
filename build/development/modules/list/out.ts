import ref = require("modules/list/in");

var moduleName: string = "list";

var Components = new ref.Base.AngularComponents.AngularComponents(moduleName);
Components.AddController("Category", "Index", "/category", "category");
Components.AddController("Category", "Create", "/create", "category.create");
Components.AddController("Category", "Edit", "/edit/:Id", "category.edit");
Components.AddController("Category", "Delete", "/delete:Id", "category.delete");
Components.AddController("Category", "Details", "/details:Id", "category.details");

var testModule = new ref.Base.AngularComponents.AngularModule(moduleName, Components);

export = testModule;



