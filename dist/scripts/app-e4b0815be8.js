!function(){"use strict";angular.module("app",["ngResource","ui.router"]),angular.module("app").config(["$compileProvider",function(e){e.debugInfoEnabled(!1)}])}(),function(){"use strict";function e(e){console.log(e),e.addComponent()}angular.module("app").controller("MainController",e),e.$inject=["Dashboard"]}(),function(){"use strict";function e(){function e(){console.log(this),console.log(n)}var n;require(["cdf/Dashboard.Bootstrap","cdf/components/TextComponent"],function(e,t){n=new e,n.init(),console.log(n)});var t={addComponent:e};return t}angular.module("app").factory("Dashboard",e),e.$inject=[]}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("app").run(e)}(),function(){"use strict";function e(e,n){e.state("page",{"abstract":!0,url:"/index",templateUrl:"app/common/content.html"}).state("page.empty",{url:"/empty",templateUrl:"app/pages/empty/empty.html",data:{pageTitle:"Empty view"}}).state("page.main",{url:"/main",templateUrl:"app/pages/main/main.html"}),n.otherwise("/index/main")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),angular.module("app").run(["$templateCache",function(e){e.put("app/common/content.html",'<div ng-include="\'app/common/header/header.html\'"></div><div ui-view="" class="full-screen {{$state.current.name}}"></div><div ng-include="\'app/common/footer/footer.html\'"></div>'),e.put("app/common/footer/footer.html",""),e.put("app/common/header/header.html",""),e.put("app/pages/empty/empty.html",'<div class="row main-row animated fadeInRight"><div class="col s12 m12 l12"><div class="card"><div class="card-content row no-margin">Page Layout</div></div></div></div>'),e.put("app/pages/main/main.html",'<div class="container-fluid"><div id="container" class="container"><div id="row" class="row"><div id="col" class="col-sx-12"><div id="msgContainer" class="msgContainer"></div><span class="test">Hello Dear</span></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-e4b0815be8.js.map