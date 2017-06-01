webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n  <header class=\"header header-6\">\n    <div class=\"branding\">\n      <a href=\"https://vmware.github.io/\" class=\"nav-link\">\n        <span class=\"clr-icon vmware-logo\"></span>\n        <span class=\"title\">Open Source Program Office</span>\n      </a>\n    </div>\n  </header>\n  <div class=\"content-container\">\n    <div id=\"content-area\" class=\"content-area\">\n      <div class=\"hero\">\n        <img src=\"images/vmw_oss.svg\" alt=\"\">\n        <h1>{{ossTagline}}</h1>\n        <h5>{{ossAbout}}</h5>\n      </div>\n\n      <div class=\"home-cards\">\n        <h2>Featured Open Source Projects</h2>\n        <div class=\"row flex-items-xs-center\">\n          <div class=\"row flex col-lg-8\">\n            <div *ngFor=\"let project of projects; trackBy: trackByFn;\" class=\"item col-md-4 col-sm-12 col-xs-12\">\n              <a href=\"{{project.url}}\" target=\"_blank\">\n                <div class=\"card clickable\">\n                  <div class=\"card-block\">\n                    <div class=\"project-icon\">\n                      <p><img src=\"images/{{project.image}}\" alt=\"{{project.title}}\"></p>\n                    </div>\n                    <div class=\"card-text\">\n                      <h4>{{project.name}}</h4>\n                      <p>{{project.description}}</p>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div style=\"height: 120px;\"></div>\n    </div>\n  </div>\n</clr-main-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clr-icon.vmware-logo {\n  background: url(/images/vmware.svg) no-repeat left 9px;\n  width: 108px; }\n\n.hero {\n  background-color: #002538;\n  left: -24px;\n  min-height: 578px;\n  padding-bottom: 3em;\n  padding-top: 3em;\n  position: relative;\n  text-align: center;\n  top: -24px; }\n  .hero h1,\n  .hero h5 {\n    color: #fff;\n    margin-left: auto;\n    margin-right: auto; }\n  .hero img {\n    max-width: 160px; }\n\n.content-area {\n  overflow-x: hidden; }\n\n.icon {\n  display: inline-block;\n  height: 32px;\n  vertical-align: middle;\n  width: 32px; }\n  .icon.icon-github {\n    background: url(/images/github_icon.svg) no-repeat left -2px; }\n\n.home-cards {\n  position: relative;\n  z-index: 100; }\n  .home-cards a {\n    color: inherit;\n    text-decoration: none; }\n  .home-cards h2 {\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center; }\n\n.project-icon p {\n  margin-bottom: 1em; }\n\n.card {\n  position: relative; }\n\n@media (min-width: 320px) {\n  .title {\n    display: none; }\n  .hero {\n    background-image: none;\n    min-height: auto;\n    width: 100vw; }\n    .hero h1,\n    .hero h5 {\n      width: 80%; }\n  .home-cards {\n    margin-top: 0; }\n  .card {\n    min-height: auto; }\n    .card .card-text {\n      position: relative;\n      width: auto; }\n  .project-icon p {\n    text-align: left; }\n  .project-icon img {\n    width: 80px; } }\n\n@media (min-width: 768px) {\n  .title {\n    display: block; }\n  .hero {\n    background-image: url(/images/vmw_oss_background.png);\n    background-position: left top;\n    background-repeat: no-repeat;\n    min-height: 578px; }\n    .hero h1,\n    .hero h5 {\n      width: 72%; }\n  .home-cards {\n    margin-top: -12em; }\n    .home-cards h2 {\n      color: #fff; }\n  .card {\n    min-height: 375px; }\n    .card .card-text {\n      bottom: 10%;\n      position: absolute;\n      width: 80%; }\n  .project-icon p {\n    text-align: center; }\n  .project-icon img {\n    width: 120px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.ossTagline = "Building Open Source for Everyone";
        this.ossAbout = "Collaboration, community, and curiosity - essential ingredients to a vibrant open source community and part of VMware's culture. VMware's developers participate in a wide variety of open source projects through technical contributions, community leadership, and project innovation. This page highlights a few of the open source projects created and released by our engineers.";
        this.projects = [
            {
                "name": "Clarity",
                "image": "clarity.svg",
                "description": "UX guidelines, HTML/CSS framework, and Angular 2 components working together to craft exceptional experiences",
                "url": "https://vmware.github.io/clarity"
            },
            {
                "name": "Weathervane",
                "description": "Virtual-Infrastructure and Cloud Performance Benchmark",
                "image": "weathervane.png",
                "url": "https://github.com/vmware/weathervane"
            },
            {
                "name": "Chap",
                "description": "Analyzes un-instrumented core files for leaks, memory growth, and corruption",
                "image": "chap.png",
                "url": "https://github.com/vmware/chap"
            },
            {
                "name": "Harbor",
                "image": "harbor.png",
                "description": "An Enterprise-class Container Registry Server based on Docker Distribution",
                "url": "https://vmware.github.io/harbor/"
            },
            {
                "name": "Admiral™",
                "image": "admiral.png",
                "description": "Highly Scalable Container Management Platform",
                "url": "https://vmware.github.io/admiral/"
            },
            {
                "name": "vSphere Automation SDKs",
                "image": "vsphere-automation-sdks.png",
                "description": "Software Development Kits for accessing vSphere’s Automation endpoint APIs",
                "url": "https://vmware.github.io/vsphere-automation-sdk"
            },
            {
                "name": "vSphere Integrated Containers Engine",
                "image": "vic.png",
                "description": "Container runtime for vSphere Integrated Containers",
                "url": "https://vmware.github.io/vic/"
            },
            {
                "name": "Lightwave™",
                "image": "lightwave.png",
                "description": "Identity services for traditional infrastructure, applications and containers",
                "url": "https://vmware.github.io/lightwave/"
            },
            {
                "name": "LIOTA",
                "image": "liota.png",
                "description": "IoT solution developers in creating IoT Edge System data orchestration applications",
                "url": "https://github.com/vmware/liota"
            },
            {
                "name": "Photon OS™",
                "image": "photon.png",
                "description": "Minimal Linux Container Host",
                "url": "https://vmware.github.io/photon/"
            },
            {
                "name": "Photon Controller™",
                "image": "photon.png",
                "description": "Distributed, multi-tenant host controller and scheduler",
                "url": "https://vmware.github.io/photon-controller/"
            },
            {
                "name": "Xenon™",
                "image": "xenon.png",
                "description": "Decentralized Control Plane Framework",
                "url": "https://vmware.github.io/xenon/"
            },
            {
                "name": "Docker Volume Driver for vSphere",
                "image": "github_icon.svg",
                "description": "Stateful containers on vSphere and volume lifecycle management",
                "url": "https://vmware.github.io/docker-volume-vsphere/"
            },
            {
                "name": "vSphere® Integrated Containers™",
                "image": "github_icon.svg",
                "description": "Run containers alongside existing workloads in vSphere",
                "url": "https://vmware.github.io/vic-product/"
            },
            {
                "name": "tdnf",
                "image": "github_icon.svg",
                "description": "Tiny Dandified Yum",
                "url": "https://github.com/vmware/tdnf/"
            },
            {
                "name": "vagrant-guest-photon",
                "image": "github_icon.svg",
                "description": "Vagrant plugin that adds VMware Photon guest support",
                "url": "https://github.com/vmware/vagrant-guests-photon"
            }
        ];
    }
    AppComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/app/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var clarity_angular_1 = __webpack_require__("./node_modules/clarity-angular/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var utils_module_1 = __webpack_require__("./src/utils/utils.module.ts");
var app_routing_1 = __webpack_require__("./src/app/app.routing.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            clarity_angular_1.ClarityModule.forRoot(),
            utils_module_1.UtilsModule,
            app_routing_1.ROUTING
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/app/app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
exports.ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/app/app.routing.js.map

/***/ }),

/***/ "./src/app/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/app.component.ts"));
__export(__webpack_require__("./src/app/app.module.ts"));
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/app/index.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true
};
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/environments/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var _1 = __webpack_require__("./src/app/index.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/main.js.map

/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("./node_modules/core-js/es6/symbol.js");
__webpack_require__("./node_modules/core-js/es6/object.js");
__webpack_require__("./node_modules/core-js/es6/function.js");
__webpack_require__("./node_modules/core-js/es6/parse-int.js");
__webpack_require__("./node_modules/core-js/es6/parse-float.js");
__webpack_require__("./node_modules/core-js/es6/number.js");
__webpack_require__("./node_modules/core-js/es6/math.js");
__webpack_require__("./node_modules/core-js/es6/string.js");
__webpack_require__("./node_modules/core-js/es6/date.js");
__webpack_require__("./node_modules/core-js/es6/array.js");
__webpack_require__("./node_modules/core-js/es6/regexp.js");
__webpack_require__("./node_modules/core-js/es6/map.js");
__webpack_require__("./node_modules/core-js/es6/set.js");
__webpack_require__("./node_modules/core-js/es6/reflect.js");
__webpack_require__("./node_modules/core-js/es7/reflect.js");
__webpack_require__("./node_modules/zone.js/dist/zone.js");
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/polyfills.js.map

/***/ }),

/***/ "./src/utils/hash-listener.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var HashListener = (function () {
    function HashListener(route) {
        var _this = this;
        this.route = route;
        this.sub = this.route.fragment.subscribe(function (f) {
            _this.scrollToAnchor(f, false);
        });
    }
    HashListener.prototype.ngOnInit = function () {
        this.scrollToAnchor(this.route.snapshot.fragment, false);
    };
    HashListener.prototype.scrollToAnchor = function (hash, smooth) {
        if (smooth === void 0) { smooth = true; }
        if (hash) {
            var element = document.querySelector("#" + hash);
            if (element) {
                element.scrollIntoView({
                    behavior: smooth ? "smooth" : "instant",
                    block: "start"
                });
            }
        }
    };
    HashListener.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return HashListener;
}());
HashListener = __decorate([
    core_1.Directive({
        selector: "[hash-listener]",
        host: {
            "[style.position]": "'relative'"
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
], HashListener);
exports.HashListener = HashListener;
var _a;
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/utils/hash-listener.directive.js.map

/***/ }),

/***/ "./src/utils/scrollspy.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var ScrollSpy = (function () {
    function ScrollSpy(renderer) {
        this.renderer = renderer;
        this.anchors = [];
        this.throttle = false;
    }
    Object.defineProperty(ScrollSpy.prototype, "links", {
        set: function (routerLinks) {
            var _this = this;
            this.anchors = routerLinks.map(function (routerLink) { return "#" + routerLink.fragment; });
            this.sub = routerLinks.changes.subscribe(function () {
                _this.anchors = routerLinks.map(function (routerLink) { return "#" + routerLink.fragment; });
            });
        },
        enumerable: true,
        configurable: true
    });
    ScrollSpy.prototype.handleEvent = function () {
        var _this = this;
        this.scrollPosition = this.scrollable.scrollTop;
        if (!this.throttle) {
            window.requestAnimationFrame(function () {
                var currentLinkIndex = _this.findCurrentAnchor() || 0;
                _this.linkElements.forEach(function (link, index) {
                    _this.renderer.setElementClass(link.nativeElement, "active", index === currentLinkIndex);
                });
                _this.throttle = false;
            });
        }
        this.throttle = true;
    };
    ScrollSpy.prototype.findCurrentAnchor = function () {
        for (var i = this.anchors.length - 1; i >= 0; i--) {
            var anchor = this.anchors[i];
            if (this.scrollable.querySelector(anchor) && this.scrollable.querySelector(anchor).offsetTop <= this.scrollPosition) {
                return i;
            }
        }
    };
    ScrollSpy.prototype.ngOnInit = function () {
        this.scrollable.addEventListener("scroll", this);
    };
    ScrollSpy.prototype.ngOnDestroy = function () {
        this.scrollable.removeEventListener("scroll", this);
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    return ScrollSpy;
}());
__decorate([
    core_1.Input("scrollspy"),
    __metadata("design:type", Object)
], ScrollSpy.prototype, "scrollable", void 0);
__decorate([
    core_1.ContentChildren(router_1.RouterLinkWithHref, { descendants: true }),
    __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _b || Object])
], ScrollSpy.prototype, "links", null);
__decorate([
    core_1.ContentChildren(router_1.RouterLinkWithHref, { descendants: true, read: core_1.ElementRef }),
    __metadata("design:type", typeof (_c = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _c || Object)
], ScrollSpy.prototype, "linkElements", void 0);
ScrollSpy = __decorate([
    core_1.Directive({
        selector: "[scrollspy]",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _d || Object])
], ScrollSpy);
exports.ScrollSpy = ScrollSpy;
var _a, _b, _c, _d;
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/utils/scrollspy.directive.js.map

/***/ }),

/***/ "./src/utils/utils.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var hash_listener_directive_1 = __webpack_require__("./src/utils/hash-listener.directive.ts");
var scrollspy_directive_1 = __webpack_require__("./src/utils/scrollspy.directive.ts");
var clarity_angular_1 = __webpack_require__("./node_modules/clarity-angular/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var UtilsModule = (function () {
    function UtilsModule() {
    }
    return UtilsModule;
}());
UtilsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            clarity_angular_1.ClarityModule.forChild()
        ],
        declarations: [
            hash_listener_directive_1.HashListener,
            scrollspy_directive_1.ScrollSpy
        ],
        exports: [
            hash_listener_directive_1.HashListener,
            scrollspy_directive_1.ScrollSpy
        ]
    })
], UtilsModule);
exports.UtilsModule = UtilsModule;
//# sourceMappingURL=/Users/druk/Sites/vmw-main/src/src/src/utils/utils.module.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map