(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/content/content.component */ "./src/app/core/components/content/content.component.ts");
/* harmony import */ var _core_components_intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/intro/intro.component */ "./src/app/core/components/intro/intro.component.ts");
/* harmony import */ var _main_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/components/main/main.component */ "./src/app/main/components/main/main.component.ts");
/* harmony import */ var _architects_components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./architects/components/list-of-architects/list-of-architects.component */ "./src/app/architects/components/list-of-architects/list-of-architects.component.ts");
/* harmony import */ var _team_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/components/our-team/our-team.component */ "./src/app/team/components/our-team/our-team.component.ts");
/* harmony import */ var _worklog_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worklog/components/our-worklog/our-worklog.component */ "./src/app/worklog/components/our-worklog/our-worklog.component.ts");
/* harmony import */ var _styleguide_components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styleguide/components/our-styleguide/our-styleguide.component */ "./src/app/styleguide/components/our-styleguide/our-styleguide.component.ts");
/* harmony import */ var _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/page-not-found/page-not-found.component */ "./src/app/core/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _architects_components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./architects/components/architect-detailed/architect-detailed.component */ "./src/app/architects/components/architect-detailed/architect-detailed.component.ts");













const routes = [
    {
        path: '',
        component: _core_components_intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"]
    },
    {
        path: 'content',
        component: _core_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"],
        children: [
            {
                path: '',
                component: _main_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
            },
            {
                path: 'architects',
                component: _architects_components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__["ListOfArchitectsComponent"]
            },
            {
                path: 'architects/:id',
                component: _architects_components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_10__["ArchitectDetailedComponent"]
            },
            {
                path: 'team',
                component: _team_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_6__["OurTeamComponent"]
            },
            {
                path: 'worklog',
                component: _worklog_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_7__["OurWorklogComponent"]
            },
            {
                path: 'styleguide',
                component: _styleguide_components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_8__["OurStyleguideComponent"]
            }
        ]
    },
    {
        path: '**',
        component: _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'top'
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'top'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/translate.service */ "./src/app/shared/services/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(translator) {
        this.translator = translator;
        this.title = 'cultural-portal';
        this.translator.setLanguage(this.translator.currentLang);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["OurTranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["OurTranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/translate.service */ "./src/app/shared/services/translate.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _architects_architects_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./architects/architects.module */ "./src/app/architects/architects.module.ts");
/* harmony import */ var _team_team_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.module */ "./src/app/team/team.module.ts");
/* harmony import */ var _worklog_worklog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./worklog/worklog.module */ "./src/app/worklog/worklog.module.ts");
/* harmony import */ var _styleguide_styleguide_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styleguide/styleguide.module */ "./src/app/styleguide/styleguide.module.ts");
/* harmony import */ var _locales_architects_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../locales/architects-data */ "./src/locales/architects-data.ts");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _locales_architects_data__WEBPACK_IMPORTED_MODULE_13__["ArchitectsData"],
        _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["OurTranslateService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_8__["MainModule"],
            _architects_architects_module__WEBPACK_IMPORTED_MODULE_9__["ArchitectsModule"],
            _team_team_module__WEBPACK_IMPORTED_MODULE_10__["TeamModule"],
            _worklog_worklog_module__WEBPACK_IMPORTED_MODULE_11__["WorklogModule"],
            _styleguide_styleguide_module__WEBPACK_IMPORTED_MODULE_12__["StyleguideModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__["AnimateOnScrollModule"].forRoot(),
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_8__["MainModule"],
        _architects_architects_module__WEBPACK_IMPORTED_MODULE_9__["ArchitectsModule"],
        _team_team_module__WEBPACK_IMPORTED_MODULE_10__["TeamModule"],
        _worklog_worklog_module__WEBPACK_IMPORTED_MODULE_11__["WorklogModule"],
        _styleguide_styleguide_module__WEBPACK_IMPORTED_MODULE_12__["StyleguideModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__["AnimateOnScrollModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                    _main_main_module__WEBPACK_IMPORTED_MODULE_8__["MainModule"],
                    _architects_architects_module__WEBPACK_IMPORTED_MODULE_9__["ArchitectsModule"],
                    _team_team_module__WEBPACK_IMPORTED_MODULE_10__["TeamModule"],
                    _worklog_worklog_module__WEBPACK_IMPORTED_MODULE_11__["WorklogModule"],
                    _styleguide_styleguide_module__WEBPACK_IMPORTED_MODULE_12__["StyleguideModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                    ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__["AnimateOnScrollModule"].forRoot(),
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]
                ],
                providers: [
                    _locales_architects_data__WEBPACK_IMPORTED_MODULE_13__["ArchitectsData"],
                    _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["OurTranslateService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/architects/architects.module.ts":
/*!*************************************************!*\
  !*** ./src/app/architects/architects.module.ts ***!
  \*************************************************/
/*! exports provided: ArchitectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectsModule", function() { return ArchitectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _components_architect_detailed_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/architect-detailed/about/about.component */ "./src/app/architects/components/architect-detailed/about/about.component.ts");
/* harmony import */ var _components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-of-architects/list-of-architects.component */ "./src/app/architects/components/list-of-architects/list-of-architects.component.ts");
/* harmony import */ var _components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/architect-detailed/architect-detailed.component */ "./src/app/architects/components/architect-detailed/architect-detailed.component.ts");
/* harmony import */ var _directives_colored_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/colored.directive */ "./src/app/architects/directives/colored.directive.ts");
/* harmony import */ var _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pipes/search-by.pipe */ "./src/app/shared/pipes/search-by.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_architect_detailed_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/architect-detailed/photo-gallery/photo-gallery.component */ "./src/app/architects/components/architect-detailed/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");
/* harmony import */ var _components_architect_detailed_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/architect-detailed/timeline/timeline.component */ "./src/app/architects/components/architect-detailed/timeline/timeline.component.ts");
/* harmony import */ var _components_architect_detailed_video_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/architect-detailed/video/video.component */ "./src/app/architects/components/architect-detailed/video/video.component.ts");
/* harmony import */ var _components_architect_detailed_map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/architect-detailed/map/map.component */ "./src/app/architects/components/architect-detailed/map/map.component.ts");


















class ArchitectsModule {
}
ArchitectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArchitectsModule });
ArchitectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArchitectsModule_Factory(t) { return new (t || ArchitectsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"],
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_13__["AnimateOnScrollModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArchitectsModule, { declarations: [_components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__["ListOfArchitectsComponent"],
        _components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_6__["ArchitectDetailedComponent"],
        _components_architect_detailed_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _directives_colored_directive__WEBPACK_IMPORTED_MODULE_7__["ColoredDirective"],
        _components_architect_detailed_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_11__["PhotoGalleryComponent"],
        _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchByPipe"],
        _components_architect_detailed_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"],
        _components_architect_detailed_video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"],
        _components_architect_detailed_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"],
        ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_13__["AnimateOnScrollModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"]], exports: [_shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchByPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__["ListOfArchitectsComponent"],
                    _components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_6__["ArchitectDetailedComponent"],
                    _components_architect_detailed_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _directives_colored_directive__WEBPACK_IMPORTED_MODULE_7__["ColoredDirective"],
                    _components_architect_detailed_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_11__["PhotoGalleryComponent"],
                    _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchByPipe"],
                    _components_architect_detailed_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"],
                    _components_architect_detailed_video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"],
                    _components_architect_detailed_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"],
                    ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_13__["AnimateOnScrollModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"]
                ],
                exports: [
                    _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchByPipe"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/about/about.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/about/about.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_colored_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/colored.directive */ "./src/app/architects/directives/colored.directive.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function AboutComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r38.author.work.indexOf(item_r39));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r38.author.path + "." + item_r39.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r39.date);
} }
class AboutComponent {
    constructor() {
    }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], inputs: { author: "author" }, decls: 25, vars: 20, consts: [[1, "author"], ["alt", "photo", 3, "src"], [1, "portfolio"], ["appColored", "", 3, "item", 4, "ngFor", "ngForOf"], ["appColored", "", 3, "item"], [1, "works-name"], [1, "works-year"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AboutComponent_tr_24_Template, 6, 5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.author.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.author.path + "." + ctx.author.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.author.path + "." + ctx.author.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, ctx.author.path + "." + ctx.author.vita));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, "pageLinks.Important-works"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "pageLinks.Building-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 18, "pageLinks.Built date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.author.work);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _directives_colored_directive__WEBPACK_IMPORTED_MODULE_2__["ColoredDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  font-size: 20px;\n  line-height: 27px;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n  margin-top: 30px;\n}\n.author[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 30px;\n  color: #3E3636;\n  width: 450px;\n}\n.author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 40px;\n}\n.portfolio[_ngcontent-%COMP%] {\n  margin: 30px;\n  color: #000000;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .works-name[_ngcontent-%COMP%] {\n  width: 600px;\n  padding-right: 150px;\n  word-break: break-word;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .works-year[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .colored[_ngcontent-%COMP%] {\n  background-color: #F9E7D3;\n}\n@media (max-width: 1280px) {\n  [_nghost-%COMP%] {\n    font-size: 15px;\n    line-height: 20px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 1000px) {\n  [_nghost-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 576px) {\n  [_nghost-%COMP%] {\n    font-size: 12px;\n    line-height: 20px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n\n  .author[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  .portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .works-name[_ngcontent-%COMP%] {\n    padding-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9hYm91dC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL2Fib3V0L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxhcHBcXGFyY2hpdGVjdHNcXGNvbXBvbmVudHNcXGFyY2hpdGVjdC1kZXRhaWxlZFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURlSjtBQ1pBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURlSjtBQ1pBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0ZoQlM7RUVpQlQsWUFBQTtBRGVKO0FDZEk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURnQlI7QUNkSTtFQUNJLGVBQUE7QURnQlI7QUNaQTtFQUNJLFlBQUE7RUFDQSxjRjdCSTtBQzRDUjtBQ2RJO0VBQ0kseUJBQUE7QURnQlI7QUNmUTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FEaUJaO0FDZlE7RUFDSSxpQkFBQTtBRGlCWjtBQ2ZRO0VBQ0ksYUFBQTtBRGlCWjtBQ2ZRO0VBQ0kseUJGOUNBO0FDK0RaO0FDWkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFRGVOOztFQ2JFO0lBQ0ksZUFBQTtFRGdCTjtBQUNGO0FDYkE7RUFDSTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RURlTjs7RUNiRTtJQUNJLFNBQUE7RURnQk47QUFDRjtBQ1pBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RURjTjs7RUNaRTtJQUNJLGVBQUE7RURlTjs7RUNiRTtJQUNJLFlBQUE7RURnQk47O0VDWlU7SUFDSSxtQkFBQTtFRGVkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5fY29sb3I6ICNEMjlGOUY7XHJcbiRzdWJfY29sb3I6ICNGOUU3RDM7XHJcbiRmb250X2NvbG9yOiAjM0UzNjM2O1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcclxuICAgIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICAgIHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaDEsIGgyLCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmF1dGhvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4O1xuICBjb2xvcjogIzNFMzYzNjtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuLmF1dGhvciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYXV0aG9yIHAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG59XG5cbi5wb3J0Zm9saW8ge1xuICBtYXJnaW46IDMwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnBvcnRmb2xpbyB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4ucG9ydGZvbGlvIHRhYmxlIC53b3Jrcy1uYW1lIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cbi5wb3J0Zm9saW8gdGFibGUgLndvcmtzLXllYXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wb3J0Zm9saW8gdGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnBvcnRmb2xpbyB0YWJsZSAuY29sb3JlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUU3RDM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGg0IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gIC5hdXRob3Ige1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5wb3J0Zm9saW8gdGFibGUgLndvcmtzLW5hbWUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxufVxyXG5cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmF1dGhvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8ge1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgY29sb3I6ICRibGFjaztcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIC53b3Jrcy1uYW1lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndvcmtzLXllYXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sb3JlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWJfY29sb3I7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuICAgIC5hdXRob3Ige1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC5wb3J0Zm9saW8ge1xyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgLndvcmtzLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/architect-detailed.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/architect-detailed.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ArchitectDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectDetailedComponent", function() { return ArchitectDetailedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/architects-api.service */ "./src/app/core/services/architects-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/architects/components/architect-detailed/about/about.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/architects/components/architect-detailed/timeline/timeline.component.ts");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ "./src/app/architects/components/architect-detailed/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video/video.component */ "./src/app/architects/components/architect-detailed/video/video.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/architects/components/architect-detailed/map/map.component.ts");









class ArchitectDetailedComponent {
    constructor(arcInfo, route) {
        this.arcInfo = arcInfo;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.author = this.arcInfo.getById(params.id);
        });
    }
}
ArchitectDetailedComponent.ɵfac = function ArchitectDetailedComponent_Factory(t) { return new (t || ArchitectDetailedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ArchitectDetailedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchitectDetailedComponent, selectors: [["app-architect-detailed"]], decls: 6, vars: 5, consts: [[3, "author"], [1, "wrapper"]], template: function ArchitectDetailedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-timeline", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-photo-gallery", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
    } }, directives: [_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"], _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__["PhotoGalleryComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\napp-photo-gallery[_ngcontent-%COMP%] {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  width: 50%;\n}\n\napp-video[_ngcontent-%COMP%] {\n  -webkit-box-ordinal-group: 4;\n          order: 3;\n}\n\napp-map[_ngcontent-%COMP%] {\n  -webkit-box-ordinal-group: 3;\n          order: 2;\n  width: 50%;\n}\n\n@media (max-width: 1280px) {\n  .wrapper[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n\n  app-photo-gallery[_ngcontent-%COMP%] {\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n\n  app-video[_ngcontent-%COMP%] {\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n\n  app-map[_ngcontent-%COMP%] {\n    -webkit-box-ordinal-group: 4;\n            order: 3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcYXBwXFxhcmNoaXRlY3RzXFxjb21wb25lbnRzXFxhcmNoaXRlY3QtZGV0YWlsZWRcXGFyY2hpdGVjdC1kZXRhaWxlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9hcmNoaXRlY3QtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7VUFBQSxRQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7VUFBQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtVQUFBLFFBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUNDTjs7RURFRTtJQUNJLDRCQUFBO1lBQUEsUUFBQTtFQ0NOOztFREVFO0lBQ0ksNEJBQUE7WUFBQSxRQUFBO0VDQ047O0VERUU7SUFDSSw0QkFBQTtZQUFBLFFBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9hcmNoaXRlY3QtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbmFwcC1waG90by1nYWxsZXJ5IHtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuYXBwLXZpZGVvIHtcclxuICAgIG9yZGVyOiAzO1xyXG59XHJcblxyXG5hcHAtbWFwIHtcclxuICAgIG9yZGVyOiAyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXBwLXBob3RvLWdhbGxlcnkge1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhcHAtdmlkZW8ge1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhcHAtbWFwIHtcclxuICAgICAgICBvcmRlcjogMztcclxuICAgIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmFwcC1waG90by1nYWxsZXJ5IHtcbiAgb3JkZXI6IDE7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmFwcC12aWRlbyB7XG4gIG9yZGVyOiAzO1xufVxuXG5hcHAtbWFwIHtcbiAgb3JkZXI6IDI7XG4gIHdpZHRoOiA1MCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGFwcC1waG90by1nYWxsZXJ5IHtcbiAgICBvcmRlcjogMTtcbiAgfVxuXG4gIGFwcC12aWRlbyB7XG4gICAgb3JkZXI6IDI7XG4gIH1cblxuICBhcHAtbWFwIHtcbiAgICBvcmRlcjogMztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectDetailedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-architect-detailed',
                templateUrl: './architect-detailed.component.html',
                styleUrls: ['./architect-detailed.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/map/map.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/map/map.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class MapComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].mapsUrl}${this.author.geovidgetLink}`);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { author: "author" }, decls: 5, vars: 4, consts: [[1, "map_container"], ["title", "geowidget", 3, "src"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "pageLinks.Map-of-works"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nh4[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  margin: 50px 0 20px 0;\n}\n.map_container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: -100px auto 0;\n}\niframe[title=geowidget][_ngcontent-%COMP%] {\n  width: 600px;\n  height: 500px;\n}\n@media (max-width: 1280px) {\n  .map_container[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding: 50px;\n    text-align: initial;\n  }\n}\n@media (max-width: 768px) {\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .map_container[_ngcontent-%COMP%] {\n    padding: 10px 50px;\n  }\n}\n@media screen and (max-width: 576px) {\n  h4[_ngcontent-%COMP%] {\n    font-size: 17px;\n    margin-top: 0;\n  }\n\n  .map_container[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n\n  iframe[title=geowidget][_ngcontent-%COMP%] {\n    width: 300px;\n    height: 310px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9tYXAvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxDdWx0dXJhbF9Qb3J0YWxcXGN1bHR1cmFsLXBvcnRhbC9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL21hcC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcYXBwXFxhcmNoaXRlY3RzXFxjb21wb25lbnRzXFxhcmNoaXRlY3QtZGV0YWlsZWRcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEZUY7QUNaQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRGVGO0FDWkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRGVGO0FDWkE7RUFDRTtJQUNFLGNBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RURlRjtBQUNGO0FDWkE7RUFDRTtJQUNFLGVBQUE7RURjRjs7RUNaQTtJQUNFLGtCQUFBO0VEZUY7QUFDRjtBQ1pBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFRGNGOztFQ1pBO0lBQ0UsbUJBQUE7RURlRjs7RUNiQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VEZ0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbl9jb2xvcjogI0QyOUY5RjtcclxuJHN1Yl9jb2xvcjogI0Y5RTdEMztcclxuJGZvbnRfY29sb3I6ICMzRTM2MzY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xufVxuXG4ubWFwX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAtMTAwcHggYXV0byAwO1xufVxuXG5pZnJhbWVbdGl0bGU9Z2Vvd2lkZ2V0XSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubWFwX2NvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5tYXBfY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5tYXBfY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgaWZyYW1lW3RpdGxlPWdlb3dpZGdldF0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuaDQge1xyXG4gIGNvbG9yOiAkYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDUwcHggMCAyMHB4IDA7XHJcbn1cclxuXHJcbi5tYXBfY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogLTEwMHB4IGF1dG8gMDtcclxufVxyXG5cclxuaWZyYW1lW3RpdGxlPVwiZ2Vvd2lkZ2V0XCJdIHtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5tYXBfY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5tYXBfY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLm1hcF9jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgaWZyYW1lW3RpdGxlPVwiZ2Vvd2lkZ2V0XCJdIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/photo-gallery/photo-gallery.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/photo-gallery/photo-gallery.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function() { return PhotoGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function PhotoGalleryComponent_mdb_carousel_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", work_r41.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PhotoGalleryComponent {
    constructor() {
    }
    ngOnInit() {
        this.images = this.author.images;
        this.conf = {
            imageOffset: '0px',
            showDeleteControl: false,
            showImageTitle: false,
        };
    }
}
PhotoGalleryComponent.ɵfac = function PhotoGalleryComponent_Factory(t) { return new (t || PhotoGalleryComponent)(); };
PhotoGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoGalleryComponent, selectors: [["app-photo-gallery"]], inputs: { author: "author" }, decls: 6, vars: 5, consts: [[1, "photo_gallery"], [1, "carousel", "slide", "carousel-fade", 3, "animation"], [4, "ngFor", "ngForOf"], ["alt", "Author work", 1, "author_work_image", 3, "src"]], template: function PhotoGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PhotoGalleryComponent_mdb_carousel_item_5_Template, 2, 1, "mdb-carousel-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "pageLinks.Gallery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animation", "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.author.work);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nh4[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  margin: 50px 0 20px 0;\n}\n.photo_gallery[_ngcontent-%COMP%] {\n  max-width: 600px;\n  max-height: 400px;\n  margin: -100px auto 0;\n}\n.author_work_image[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 400px;\n}\n@media (max-width: 768px) {\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 576px) {\n  [_nghost-%COMP%] {\n    width: 300px !important;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9waG90by1nYWxsZXJ5L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FyY2hpdGVjdHMvY29tcG9uZW50cy9hcmNoaXRlY3QtZGV0YWlsZWQvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3Bob3RvLWdhbGxlcnkvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxDdWx0dXJhbF9Qb3J0YWxcXGN1bHR1cmFsLXBvcnRhbC9zcmNcXGFwcFxcYXJjaGl0ZWN0c1xcY29tcG9uZW50c1xcYXJjaGl0ZWN0LWRldGFpbGVkXFxwaG90by1nYWxsZXJ5XFxwaG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEZUY7QUNaQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBRGVGO0FDWEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRGNGO0FDWEE7RUFDRTtJQUNFLGVBQUE7RURjRjtBQUNGO0FDWEE7RUFDRTtJQUNFLHVCQUFBO0VEYUY7O0VDWEE7SUFDRSxlQUFBO0VEY0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdGVjdHMvY29tcG9uZW50cy9hcmNoaXRlY3QtZGV0YWlsZWQvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5fY29sb3I6ICNEMjlGOUY7XHJcbiRzdWJfY29sb3I6ICNGOUU3RDM7XHJcbiRmb250X2NvbG9yOiAjM0UzNjM2O1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcclxuICAgIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICAgICAgIHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcclxuICAgIGNvbG9yOiAkYmxhY2s7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaDEsIGgyLCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuaDQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbn1cblxuLnBob3RvX2dhbGxlcnkge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAtMTAwcHggYXV0byAwO1xufVxuXG4uYXV0aG9yX3dvcmtfaW1hZ2Uge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbmg0IHtcclxuICBjb2xvcjogJGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG4ucGhvdG9fZ2FsbGVyeSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IC0xMDBweCBhdXRvIDA7XHJcblxyXG59XHJcblxyXG4uYXV0aG9yX3dvcmtfaW1hZ2Uge1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-gallery',
                templateUrl: './photo-gallery.component.html',
                styleUrls: ['./photo-gallery.component.scss']
            }]
    }], function () { return []; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/timeline/timeline.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/timeline/timeline.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enum_animations_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enum/animations.enum */ "./src/app/architects/enum/animations.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function TimelineComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r43 = ctx.$implicit;
    const i_r44 = ctx.index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationName", ctx_r42.setAnimation(i_r44));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r43.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx_r42.author.path + "." + card_r43.text));
} }
class TimelineComponent {
    constructor() {
        this.animations = _enum_animations_enum__WEBPACK_IMPORTED_MODULE_1__["Animations"];
    }
    ngOnInit() { }
    setAnimation(index) {
        return !(index % 2) ? this.animations.right : this.animations.left;
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], inputs: { author: "author" }, decls: 7, vars: 4, consts: [[1, "container"], [1, "timeline_title"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], ["animateOnScroll", "", 1, "animated", 3, "animationName"], [1, "timeline-img"], [1, "timeline-content"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimelineComponent_div_6_Template, 9, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "pageLinks.Timeline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.author.timelineData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__["AnimateOnScrollDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  margin-top: -50px;\n  font-size: 17px;\n  line-height: 24px;\n}\nh4[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  margin: 50px 0 20px 0;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background: #757575;\n  width: 5px;\n  height: 80%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.timeline-item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 70px;\n}\n.timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\n  float: right;\n  padding: 40px 30px 10px 30px;\n}\n.timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  left: -15px;\n  border-width: 10px 15px 10px 0;\n  border-color: transparent #f5f5f5 transparent transparent;\n}\n.timeline-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 45%;\n  padding: 10px 30px;\n  border-radius: 4px;\n  background: #f5f5f5;\n  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);\n  font-size: 1.2em;\n}\n.timeline-content[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -15px;\n  border-width: 10px 0 10px 15px;\n  border-color: transparent transparent transparent #f5f5f5;\n}\n.timeline-img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #D29F9F;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-top: 25px;\n  margin-left: -15px;\n  z-index: 2;\n}\n@media (max-width: 1280px) {\n  section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 20px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 576px) {\n  section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 15px;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n\n  .timeline-content[_ngcontent-%COMP%] {\n    padding: 10px 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC90aW1lbGluZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3RpbWVsaW5lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxhcHBcXGFyY2hpdGVjdHNcXGNvbXBvbmVudHNcXGFyY2hpdGVjdC1kZXRhaWxlZFxcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGVGO0FDWkE7RUFDRSxjRlBNO0VFUU4sZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QURlRjtBQ1pBO0VBRUUsa0JBQUE7QURjRjtBQ1pFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FEY0o7QUNWQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBRGFGO0FDVEk7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QURXTjtBQ1RNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBRFdSO0FDTkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QURRSjtBQ0hBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtBRE1GO0FDSkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FETUo7QUNGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJGeEZXO0VFeUZYLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURLRjtBQ0ZBO0VBRU07SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RURJTjs7RUNEQTtJQUNJLGVBQUE7RURJSjtBQUNGO0FDREE7RUFFTTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFREVOOztFQ0NBO0lBQ0ksZUFBQTtFREVKOztFQ0FBO0lBQ0UsMEJBQUE7RURHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xyXG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xyXG4kZm9udF9jb2xvcjogIzNFMzYzNjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XHJcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgICB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuaDEsIGgyLCBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICRmb250X2NvbG9yO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMDBweCAwO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuaDQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbn1cblxuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVsaW5lOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjNzU3NTc1O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnRpbWVsaW5lLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogNDBweCAzMHB4IDEwcHggMzBweDtcbn1cbi50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogLTE1cHg7XG4gIGJvcmRlci13aWR0aDogMTBweCAxNXB4IDEwcHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjVmNWY1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuLnRpbWVsaW5lLWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi50aW1lbGluZS1jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogLTE1cHg7XG4gIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTVweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjVmNWY1O1xufVxuXG4udGltZWxpbmUtaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI0QyOUY5RjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB6LWluZGV4OiAyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIHNlY3Rpb24gcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIHNlY3Rpb24gcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gIC50aW1lbGluZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgfVxufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgY29sb3I6ICRibGFjaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcclxufVxyXG5cclxuLnRpbWVsaW5lIHtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzU3NTc1O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcblxyXG4gICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuXHJcbiAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgcGFkZGluZzogNDBweCAzMHB4IDEwcHggMzBweDtcclxuXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTBweCAxNXB4IDEwcHggMDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmNWY1ZjUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGltZWxpbmUtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjVmNWY1O1xyXG4gIH1cclxufVxyXG5cclxuLnRpbWVsaW5lLWltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICRtYWluX2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4OyBcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gIH1cclxuICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgaDQge1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/video/video.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/video/video.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






class VideoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    set author(author) {
        this.authorSet = author;
        this.setYoutubeUrl();
    }
    get author() {
        return this.authorSet;
    }
    setYoutubeUrl() {
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].youtubeUrl}${this.author.videoId}`);
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { author: "author" }, decls: 19, vars: 7, consts: [[1, "video_container"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "relative", "waves-light", "video_link", 3, "click"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myBasicModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["basicModal", ""], ["role", "dialog", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["id", "myModalLabel", 1, "modal-title", "w-100"], [1, "modal-body"], ["width", "600", "height", "400", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r45.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r45.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "pageLinks.Watch-video"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 5, ctx.author.path + "." + ctx.author.name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nh4[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  margin: 50px 0 20px 0;\n}\n.video_link[_ngcontent-%COMP%] {\n  background: #D29F9F !important;\n}\n.video_container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-bottom: 100px;\n  margin: 0 auto;\n}\n.modal-content[_ngcontent-%COMP%] {\n  width: 600px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  right: 10%;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 600px;\n  height: 60px;\n}\n.modal-body[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n@media (max-width: 1280px) {\n  .video_container[_ngcontent-%COMP%] {\n    padding: 100px 0;\n  }\n}\n@media (max-width: 768px) {\n  h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 576px) {\n  h4[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n\n  .video_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .modal-content[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  .modal-content[_ngcontent-%COMP%] {\n    right: 0;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC92aWRlby9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3ZpZGVvL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxhcHBcXGFyY2hpdGVjdHNcXGNvbXBvbmVudHNcXGFyY2hpdGVjdC1kZXRhaWxlZFxcdmlkZW9cXHZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEZUY7QUNaQTtFQUNFLDhCQUFBO0FEZUY7QUNaQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QURlRjtBQ1pBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEZUY7QUNaQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBRGVGO0FDWkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEZUY7QUNaQTtFQUNFLGFBQUE7QURlRjtBQ1pBO0VBQ0U7SUFDRSxnQkFBQTtFRGVGO0FBQ0Y7QUNaQTtFQUNFO0lBQ0UsZUFBQTtFRGNGO0FBQ0Y7QUNYQTtFQUNFO0lBQ0UsZUFBQTtFRGFGOztFQ1ZFO0lBQ0UsZUFBQTtFRGFKOztFQ1ZBO0lBQ0UsWUFBQTtFRGFGOztFQ1hBO0lBQ0UsUUFBQTtJQUNBLGNBQUE7RURjRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xyXG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xyXG4kZm9udF9jb2xvcjogIzNFMzYzNjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XHJcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgICB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuaDEsIGgyLCBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICRmb250X2NvbG9yO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUwcHggMCAyMHB4IDA7XG59XG5cbi52aWRlb19saW5rIHtcbiAgYmFja2dyb3VuZDogI0QyOUY5RiAhaW1wb3J0YW50O1xufVxuXG4udmlkZW9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEwJTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tb2RhbC1ib2R5IGlmcmFtZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLnZpZGVvX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTAwcHggMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBoNCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG5cbiAgLnZpZGVvX2NvbnRhaW5lciBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50LCAubW9kYWwtaGVhZGVyLCBpZnJhbWUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbmg0IHtcclxuICBjb2xvcjogJGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG4udmlkZW9fbGluayB7XHJcbiAgYmFja2dyb3VuZDogJG1haW5fY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpZGVvX2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMTAlO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IGlmcmFtZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC52aWRlb19jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgLnZpZGVvX2NvbnRhaW5lciB7XHJcbiAgICBidXR0b257XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1vZGFsLWNvbnRlbnQsIC5tb2RhbC1oZWFkZXIsIGlmcmFtZSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/list-of-architects/list-of-architects.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/architects/components/list-of-architects/list-of-architects.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ListOfArchitectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfArchitectsComponent", function() { return ListOfArchitectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/architects-api.service */ "./src/app/core/services/architects-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/search-by.pipe */ "./src/app/shared/pipes/search-by.pipe.ts");








function ListOfArchitectsComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const architect_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", architect_r11 == null ? null : architect_r11.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", architect_r11 == null ? null : architect_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, architect_r11.path + "." + architect_r11.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, architect_r11.path + "." + architect_r11.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, architect_r11.path + "." + architect_r11.vita));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/content/architects/", architect_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, "pageLinks.More"), " ");
} }
class ListOfArchitectsComponent {
    constructor(architectService) {
        this.architectService = architectService;
        this.architects = [];
        this.searchStr = '';
    }
    ngOnInit() {
        this.getArchitects();
    }
    getArchitects() {
        this.architects = this.architectService.getAll();
    }
}
ListOfArchitectsComponent.ɵfac = function ListOfArchitectsComponent_Factory(t) { return new (t || ListOfArchitectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"])); };
ListOfArchitectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListOfArchitectsComponent, selectors: [["app-list-of-architects"]], decls: 11, vars: 8, consts: [[1, "architects__wrapper"], [1, "architects__search"], [1, "architects__label"], ["type", "text", 1, "architects__input", 3, "ngModel", "placeholder", "ngModelChange"], [1, "architects__button"], ["src", "../../../../assets/images/search_icon.png", "alt", "search"], [1, "architects__container"], [1, "architects__list"], ["class", "architects__item arch-card", 4, "ngFor", "ngForOf"], [1, "architects__item", "arch-card"], [1, "arch-card__preview"], [1, "arch-card__img", 3, "src", "alt"], [1, "arch-card__content"], [1, "arch-card__title"], [1, "arch-card__date"], [1, "arch-card__desc"], [1, "arch-card__link", 3, "routerLink"]], template: function ListOfArchitectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListOfArchitectsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchStr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListOfArchitectsComponent_li_9_Template, 16, 15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "searchBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "pageLinks.Search-area"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, ctx.architects, ctx.searchStr));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchByPipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n.architects__wrapper[_ngcontent-%COMP%] {\n  min-height: 350px;\n}\n.architects__label[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 90%;\n  margin: 0 auto;\n}\n.architects__search[_ngcontent-%COMP%] {\n  margin: 25px auto;\n  max-width: 900px;\n}\n.architects__input[_ngcontent-%COMP%] {\n  padding: 7px 20px 8px;\n  width: 100%;\n  font-size: 20px;\n  background: #fff;\n  border: 1px solid #3E3636;\n  border-radius: 20px;\n}\n.architects__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.architects__button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 41px;\n  border: none;\n  background-color: #3E3636;\n  border-radius: 0 20px 20px 0;\n  cursor: pointer;\n  outline: none;\n}\n.architects__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: auto;\n}\n.architects__list[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.architects__item[_ngcontent-%COMP%] {\n  margin: 0 20px 70px;\n}\n.arch-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 285px;\n  padding-bottom: 25px;\n  text-align: center;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.arch-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 7px 8px 4px rgba(0, 0, 0, 0.25);\n}\n.arch-card__preview[_ngcontent-%COMP%] {\n  position: relative;\n  height: 240px;\n  margin-bottom: 20px;\n}\n.arch-card__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.arch-card__content[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.arch-card__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.arch-card__date[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.arch-card__desc[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  max-height: 40px;\n  font-size: 16px;\n  overflow: hidden;\n}\n.arch-card__link[_ngcontent-%COMP%] {\n  padding: 8px 10px 9px;\n  min-width: 190px;\n  font-size: 18px;\n  text-decoration: none;\n  border: 1px solid #3E3636;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2xpc3Qtb2YtYXJjaGl0ZWN0cy9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvbGlzdC1vZi1hcmNoaXRlY3RzL2xpc3Qtb2YtYXJjaGl0ZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2xpc3Qtb2YtYXJjaGl0ZWN0cy9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcYXBwXFxhcmNoaXRlY3RzXFxjb21wb25lbnRzXFxsaXN0LW9mLWFyY2hpdGVjdHNcXGxpc3Qtb2YtYXJjaGl0ZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNYRTtFQUNFLGlCQUFBO0FEY0o7QUNaRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FEY0o7QUNaRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QURjSjtBQ1pFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRGNKO0FDYkk7RUFDRSxhQUFBO0FEZU47QUNaRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkZoQ1M7RUVpQ1QsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBRGNKO0FDYkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEZVI7QUNaRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FEY0o7QUNaRTtFQUNFLG1CQUFBO0FEY0o7QUNYQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QURjRjtBQ2JFO0VBQ0UsMkNBQUE7QURlSjtBQ2RFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURnQko7QUNkRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURnQko7QUNkRTtFQUNFLGVBQUE7QURnQko7QUNkRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRGdCSjtBQ2RFO0VBQ0UsbUJBQUE7QURnQko7QUNkRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURnQko7QUNkRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEZ0JKIiwiZmlsZSI6InNyYy9hcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2xpc3Qtb2YtYXJjaGl0ZWN0cy9saXN0LW9mLWFyY2hpdGVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbl9jb2xvcjogI0QyOUY5RjtcclxuJHN1Yl9jb2xvcjogI0Y5RTdEMztcclxuJGZvbnRfY29sb3I6ICMzRTM2MzY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG4uYXJjaGl0ZWN0c19fd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xufVxuLmFyY2hpdGVjdHNfX2xhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uYXJjaGl0ZWN0c19fc2VhcmNoIHtcbiAgbWFyZ2luOiAyNXB4IGF1dG87XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG4uYXJjaGl0ZWN0c19faW5wdXQge1xuICBwYWRkaW5nOiA3cHggMjBweCA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRTM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uYXJjaGl0ZWN0c19faW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmFyY2hpdGVjdHNfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNDFweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0UzNjM2O1xuICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYXJjaGl0ZWN0c19fYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG4uYXJjaGl0ZWN0c19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXJjaGl0ZWN0c19faXRlbSB7XG4gIG1hcmdpbjogMCAyMHB4IDcwcHg7XG59XG5cbi5hcmNoLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyODVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uYXJjaC1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogN3B4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5hcmNoLWNhcmRfX3ByZXZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYXJjaC1jYXJkX19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYXJjaC1jYXJkX19jb250ZW50IHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmFyY2gtY2FyZF9fdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYXJjaC1jYXJkX19kYXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hcmNoLWNhcmRfX2Rlc2Mge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYXJjaC1jYXJkX19saW5rIHtcbiAgcGFkZGluZzogOHB4IDEwcHggOXB4O1xuICBtaW4td2lkdGg6IDE5MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNFMzYzNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbi5hcmNoaXRlY3RzIHtcclxuICAmX193cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuICAmX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0b1xyXG4gIH1cclxuICAmX19zZWFyY2gge1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIH1cclxuICAmX19pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweCA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0UzNjM2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9udF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgJl9faXRlbSB7XHJcbiAgICBtYXJnaW46IDAgMjBweCA3MHB4O1xyXG4gIH1cclxufVxyXG4uYXJjaC1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDI4NXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiA3cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO31cclxuICAmX19wcmV2aWV3IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAmX19pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gIH1cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICAmX19kYXRlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gICZfX2Rlc2Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAmX19saW5rIHtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4IDlweDtcclxuICAgIG1pbi13aWR0aDogMTkwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0UzNjM2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListOfArchitectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-of-architects',
                templateUrl: './list-of-architects.component.html',
                styleUrls: ['./list-of-architects.component.scss']
            }]
    }], function () { return [{ type: _core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/architects/directives/colored.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/architects/directives/colored.directive.ts ***!
  \************************************************************/
/*! exports provided: ColoredDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoredDirective", function() { return ColoredDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ColoredDirective {
    constructor(elem) {
        this.elem = elem;
    }
    ngOnChanges() {
        if (!(this.item % 2)) {
            this.elem.nativeElement.classList.add('colored');
        }
    }
}
ColoredDirective.ɵfac = function ColoredDirective_Factory(t) { return new (t || ColoredDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ColoredDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ColoredDirective, selectors: [["", "appColored", ""]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColoredDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appColored]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/enum/animations.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/architects/enum/animations.enum.ts ***!
  \****************************************************/
/*! exports provided: Animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
var Animations;
(function (Animations) {
    Animations["left"] = "fadeInLeft";
    Animations["right"] = "fadeInRight";
})(Animations || (Animations = {}));


/***/ }),

/***/ "./src/app/core/components/content/content.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/content/content.component.ts ***!
  \**************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/core/services/navigation.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");












const _c0 = ["sidenav"];
const _c1 = ["content"];
const _c2 = function () { return { exact: true }; };
function ContentComponent_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_mat_list_item_8_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.routing)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, item_r3.title), " ");
} }
class ContentComponent {
    constructor(nav) {
        this.nav = nav;
        this.navigator = this.nav.navMenu;
    }
    open() {
        this.sidenav.open();
        this.content.getElementRef().nativeElement.classList.add('content-blocked');
    }
    close() {
        this.sidenav.close();
        this.content.getElementRef().nativeElement.classList.remove('content-blocked');
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], viewQuery: function ContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 18, vars: 1, consts: [[1, "example-container", 3, "backdropClick"], ["disableClose", "", "fixedInViewport", "", 3, "keydown.escape"], ["sidenav", ""], [1, "button-line"], ["mat-icon-button", "", 3, "click"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngFor", "ngForOf"], ["content", ""], [1, "wrapper"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "click"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function ContentComponent_Template_mat_sidenav_container_backdropClick_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function ContentComponent_Template_mat_sidenav_keydown_escape_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_button_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContentComponent_mat_list_item_8_Template, 3, 6, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav-content", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_button_click_11_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigator);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n}\nbutton[_ngcontent-%COMP%] {\n  display: none;\n  outline: none;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgrey;\n  padding: 0 5px;\n  outline: none;\n}\nmat-sidenav[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-sidenav[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  height: 43px;\n  background-color: #D29F9F;\n}\n.content-blocked[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #F9E7D3;\n}\n@media (max-width: 630px) {\n  app-header[_ngcontent-%COMP%] {\n    padding: 43px;\n  }\n\n  mat-sidenav[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  button[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 0;\n    z-index: 21;\n  }\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n}\nmat-sidenav-content[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  height: 142px;\n  width: 100%;\n  background-color: #D29F9F;\n  z-index: -1;\n}\n@media (max-width: 1440px) {\n  mat-sidenav-content[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbnRlbnQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxDdWx0dXJhbF9Qb3J0YWxcXGN1bHR1cmFsLXBvcnRhbC9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbnRlbnQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxDdWx0dXJhbF9Qb3J0YWxcXGN1bHR1cmFsLXBvcnRhbC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcY29udGVudFxcY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBRGVKO0FDWkE7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FEZUo7QUNaQTtFQUNJLGFBQUE7QURlSjtBQ2RJO0VBQ0ksWUFBQTtFQUNBLHlCRnRCSztBQ3NDYjtBQ1pBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FEZUo7QUNaQTtFQUNJLHlCRi9CUTtBQzhDWjtBQ1pBO0VBQ0k7SUFDSSxhQUFBO0VEZU47O0VDWkU7SUFDSSxjQUFBO0VEZU47O0VDYkU7SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0VEZ0JOO0FBQ0Y7QUNiQSxzQkFBQTtBQUVBO0VBQ0ksa0JBQUE7QURjSjtBQ2JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJGN0RLO0VFOERMLFdBQUE7QURlUjtBQ1hBO0VBRVE7SUFDSSxhQUFBO0VEYVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbl9jb2xvcjogI0QyOUY5RjtcclxuJHN1Yl9jb2xvcjogI0Y5RTdEMztcclxuJGZvbnRfY29sb3I6ICMzRTM2MzY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubWF0LWxpc3QtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5tYXQtc2lkZW5hdiAuYnV0dG9uLWxpbmUge1xuICBoZWlnaHQ6IDQzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMjlGOUY7XG59XG5cbi5jb250ZW50LWJsb2NrZWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RTdEMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIGFwcC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDQzcHg7XG4gIH1cblxuICBtYXQtc2lkZW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjE7XG4gIH1cbn1cbi8qIGZvb3RlciBzaWRlIGxpbmVzICovXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWF0LXNpZGVuYXYtY29udGVudDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxNDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMjlGOUY7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQ6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLndyYXBwZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5tYXQtbGlzdC1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAuYnV0dG9uLWxpbmUge1xyXG4gICAgICAgIGhlaWdodDogNDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbl9jb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnQtYmxvY2tlZCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3ViX2NvbG9yO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcclxuICAgIGFwcC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDQzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LXNpZGVuYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDIxO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBmb290ZXIgc2lkZSBsaW5lcyAqL1xyXG5cclxubWF0LXNpZGVuYXYtY29udGVudCB7ICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbl9jb2xvcjtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgbWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return [{ type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }] }); })();


/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 6, consts: [["src", "../../../../assets/images/footer_img_color.png", "alt", "city", 1, "cityImage"], [1, "footerTextWrapper"], [1, "footerText"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "pageLinks.footerCreatedBy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "pageLinks.footerPoweredBy"), " The Rolling Scopes");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".image-wrapper[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.cityImage[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.footerTextWrapper[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  border: 1px solid #D29F9F;\n  background-color: #D29F9F;\n}\n\n.footerText[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-size: 20px;\n  line-height: 30px;\n  color: #3E3636;\n}\n\n@media (max-width: 600px) {\n  .footerText[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    line-height: 5vw;\n  }\n\n  .footerTextWrapper[_ngcontent-%COMP%] {\n    padding: 3vw 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBRUU7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RUNBRjs7RURHQTtJQUNFLGNBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Utd3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jaXR5SW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9vdGVyVGV4dFdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDI1cHggMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRDI5RjlGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMjlGOUY7XHJcbn1cclxuXHJcbi5mb290ZXJUZXh0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjogIzNFMzYzNjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgXHJcbiAgLmZvb3RlclRleHQge1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBsaW5lLWhlaWdodDogNXZ3O1xyXG4gIH1cclxuXHJcbiAgLmZvb3RlclRleHRXcmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDN2dyAwO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLmltYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jaXR5SW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb290ZXJUZXh0V3JhcHBlciB7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QyOUY5RjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyOUY5Rjtcbn1cblxuLmZvb3RlclRleHQge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZm9vdGVyVGV4dCB7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgbGluZS1oZWlnaHQ6IDV2dztcbiAgfVxuXG4gIC5mb290ZXJUZXh0V3JhcHBlciB7XG4gICAgcGFkZGluZzogM3Z3IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/core/services/navigation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/language.component */ "./src/app/core/components/header/language/language.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







const _c0 = function () { return { exact: true }; };
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r36.routing)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r36.title), " ");
} }
class HeaderComponent {
    constructor(nav) {
        this.nav = nav;
        this.navigator = this.nav.navMenu;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 4, consts: [[1, "header"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 4, 6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "pageLinks.h1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigator);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _language_language_component__WEBPACK_IMPORTED_MODULE_3__["LanguageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nh1[_ngcontent-%COMP%] {\n  padding: 40px 0;\n  margin: 0;\n  text-align: center;\n  font-size: 36px;\n}\nnav[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #D29F9F;\n  height: 43px;\n  width: 100%;\n}\nul[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px 0;\n}\nli[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 20px;\n}\na.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\napp-language[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n@media (max-width: 820px) {\n  li[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media (max-width: 630px) {\n  h1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    position: fixed;\n    top: 0;\n    z-index: 20;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEZUo7QUNaRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkZaUztFRWFULFlBQUE7RUFDQSxXQUFBO0FEZUo7QUNaRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FEZUo7QUNaRTtFQUNFLGNBQUE7QURlSjtBQ1pFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FEZUo7QUNkSTtFQUNFLDBCQUFBO0FEZ0JOO0FDWkU7RUFDRSxrQkFBQTtBRGVKO0FDWkU7RUFDRTtJQUNFLGNBQUE7RURlSjs7RUNaRTtJQUNFLGVBQUE7RURlSjtBQUNGO0FDWkU7RUFDRTtJQUNFLGFBQUE7RURjSjs7RUNYRTtJQUNFLHFCQUFBO1lBQUEseUJBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7RURjSjs7RUNaRTtJQUNFLGFBQUE7RURlSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbl9jb2xvcjogI0QyOUY5RjtcclxuJHN1Yl9jb2xvcjogI0Y5RTdEMztcclxuJGZvbnRfY29sb3I6ICMzRTM2MzY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG5oMSB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNEMjlGOUY7XG4gIGhlaWdodDogNDNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxubGkge1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuYS5hY3RpdmUsIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYXBwLWxhbmd1YWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgbGkge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG5cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcbiAgaDEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBuYXYge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAyMDtcbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiQGltcG9ydCAndmFyaWFibGVzLnNjc3MnO1xyXG5cclxuICBoMSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogJG1haW5fY29sb3I7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICYuYWN0aXZlLCAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHAtbGFuZ3VhZ2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB6LWluZGV4OiAyMDtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/components/header/language/language.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/components/header/language/language.component.ts ***!
  \***********************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/translate.service */ "./src/app/shared/services/translate.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");







class LanguageComponent {
    constructor(translator, fb) {
        this.translator = translator;
        this.fb = fb;
        this.initForm();
        this.currentLang = this.translator.currentLang;
        this.languageForm.get('currentLanguage').valueChanges.subscribe(language => {
            this.translator.currentLang = language;
            this.translator.setLanguage(language);
        });
    }
    initForm() {
        this.languageForm = this.fb.group({
            currentLanguage: this.translator.currentLang
        });
    }
}
LanguageComponent.ɵfac = function LanguageComponent_Factory(t) { return new (t || LanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["OurTranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
LanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguageComponent, selectors: [["app-language"]], decls: 12, vars: 2, consts: [[3, "formGroup"], ["appearance", "none"], ["for", "select"], ["matNativeControl", "", "formControlName", "currentLanguage", "id", "select"], ["select", ""], ["value", "ru"], ["value", "en"], ["value", "by"]], template: function LanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.languageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r37.value ? _r37.value.toUpperCase() : ctx.currentLang.toUpperCase());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], styles: ["form[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nlabel[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 20px;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  border: none;\n  width: 0;\n}\n\nmat-select[_ngcontent-%COMP%] {\n  position: absolute;\n  visibility: hidden;\n  top: 12px;\n  left: 10px;\n  width: 0;\n}\n\n@media (max-width: 820px) {\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-left: 10px;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    top: -7px;\n  }\n\n  mat-select[_ngcontent-%COMP%] {\n    top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9sYW5ndWFnZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEN1bHR1cmFsX1BvcnRhbFxcY3VsdHVyYWwtcG9ydGFsL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxoZWFkZXJcXGxhbmd1YWdlXFxsYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9sYW5ndWFnZS9sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ0NOOztFREVFO0lBQ0ksU0FBQTtFQ0NOOztFREVFO0lBQ0ksUUFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG5tYXQtc2VsZWN0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRvcDogMTJweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICB0b3A6IC03cHg7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LXNlbGVjdCB7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICB9XHJcbn0iLCJmb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5sYWJlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMDtcbn1cblxubWF0LXNlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB0b3A6IC03cHg7XG4gIH1cblxuICBtYXQtc2VsZWN0IHtcbiAgICB0b3A6IDhweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-language',
                templateUrl: './language.component.html',
                styleUrls: ['./language.component.scss']
            }]
    }], function () { return [{ type: _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["OurTranslateService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/components/intro/intro.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/intro/intro.component.ts ***!
  \**********************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_language_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/language/language.component */ "./src/app/core/components/header/language/language.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../team/components/our-team/our-team.component */ "./src/app/team/components/our-team/our-team.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








const _c0 = ["mainHeading"];
function IntroComponent_h1_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IntroComponent_h1_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Culture Portal?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IntroComponent_h1_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B \u041F\u0430\u0440\u0442\u0430\u043B?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IntroComponent {
    constructor() {
        this.localStorageReferenceObject = localStorage;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            this.mainHeading.nativeElement.style.transform = 'translate(0px,' + Math.round(scrolled / 1.25) + '%)';
        });
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], viewQuery: function IntroComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainHeading = _t.first);
    } }, decls: 30, vars: 15, consts: [[1, "langSelector"], [1, "langCheckbox"], [1, "generalWrapper"], [1, "heading"], [1, "heading-text"], ["mainHeading", ""], [1, "fore-pic"], ["id", "subheadingIntroduction"], [1, "subheadingWrapper"], [1, "shield"], [1, "text-effect"], ["class", "neon", "data-text", "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B?", "contenteditable", "", 4, "ngIf"], ["class", "neon", "data-text", "Culture Portal?", "contenteditable", "", 4, "ngIf"], ["class", "neon", "data-text", "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B \u041F\u0430\u0440\u0442\u0430\u043B?", "contenteditable", "", 4, "ngIf"], [1, "gradient"], [1, "spotlight"], [1, "description"], [1, "buttonWrapper"], ["routerLink", "/content", 1, "enterPortalLink"], [1, "movingStrip"], ["data-text", "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B?", "contenteditable", "", 1, "neon"], ["data-text", "Culture Portal?", "contenteditable", "", 1, "neon"], ["data-text", "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B \u041F\u0430\u0440\u0442\u0430\u043B?", "contenteditable", "", 1, "neon"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-language", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, IntroComponent_h1_15_Template, 2, 0, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IntroComponent_h1_16_Template, 2, 0, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IntroComponent_h1_17_Template, 2, 0, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-our-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "pageLinks.architectsOfBelarus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "pageLinks.whatIs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorageReferenceObject.hasOwnProperty("lang") && ctx.localStorageReferenceObject.lang === "ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorageReferenceObject.hasOwnProperty("lang") && ctx.localStorageReferenceObject.lang === "en" || !ctx.localStorageReferenceObject.hasOwnProperty("lang"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorageReferenceObject.hasOwnProperty("lang") && ctx.localStorageReferenceObject.lang === "by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, "pageLinks.portalInfo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 13, "pageLinks.enter"));
    } }, directives: [_header_language_language_component__WEBPACK_IMPORTED_MODULE_1__["LanguageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _team_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_4__["OurTeamComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".langSelector[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 0;\n  width: 0;\n  top: 0;\n  left: 0;\n  border-top: 0px solid transparent;\n  border-left: 100px solid rgba(211, 211, 211, 0.5);\n  border-bottom: 100px solid transparent;\n  z-index: 1;\n}\n\n@media (max-width: 820px) {\n  .langSelector[_ngcontent-%COMP%] {\n    border-left: 70px solid rgba(211, 211, 211, 0.5);\n    border-bottom: 70px solid transparent;\n  }\n}\n\n.langCheckbox[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 96;\n}\n\n.heading[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  background: url('intro_header_background.png');\n  background-size: cover;\n  background-attachment: fixed;\n  overflow: hidden;\n}\n\n.heading-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  margin-top: -50px;\n  font-family: \"Gothic\";\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  color: #000000;\n  font-size: 6vw;\n}\n\n.heading-text[_ngcontent-%COMP%]::after {\n  content: \"____________\";\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  font-weight: bold;\n}\n\n.fore-pic[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 5%;\n  width: 25vw;\n  height: 25vw;\n  background-image: url('Skorina.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 1;\n}\n\n#subheadingIntroduction[_ngcontent-%COMP%] {\n  margin-top: 4vw;\n  margin-left: 4vw;\n  font-family: \"Gothic\";\n  font-size: 4vw;\n  line-height: 5vw;\n  font-style: normal;\n  font-weight: normal;\n  color: #3E3636;\n}\n\n.subheadingWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 9vw;\n  width: 80%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 4vw;\n  margin-bottom: 0;\n}\n\n.shield[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: inherit;\n  width: inherit;\n  z-index: 90;\n}\n\n.text-effect[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  -webkit-filter: contrast(110%) brightness(190%);\n          filter: contrast(110%) brightness(190%);\n}\n\n.neon[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  color: transparent;\n}\n\n.neon[_ngcontent-%COMP%]::before, .neon[_ngcontent-%COMP%]::after {\n  content: attr(data-text);\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.neon[_ngcontent-%COMP%]::after {\n  mix-blend-mode: difference;\n}\n\n.neon[_ngcontent-%COMP%]::before {\n  -webkit-filter: blur(0.02em);\n          filter: blur(0.02em);\n}\n\n.gradient[_ngcontent-%COMP%], .spotlight[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background: #D29F9F;\n  mix-blend-mode: multiply;\n}\n\n.spotlight[_ngcontent-%COMP%] {\n  -webkit-animation: light 5s infinite linear;\n          animation: light 5s infinite linear;\n  background: radial-gradient(circle, white, transparent 25%) 0 0/25% 25%, radial-gradient(circle, white, black 25%) 50% 50%/12.5% 12.5%;\n  top: -100%;\n  left: -100%;\n  mix-blend-mode: color-dodge;\n}\n\n@-webkit-keyframes light {\n  100% {\n    -webkit-transform: translate3d(50%, 50%, 0);\n            transform: translate3d(50%, 50%, 0);\n  }\n}\n\n@keyframes light {\n  100% {\n    -webkit-transform: translate3d(50%, 50%, 0);\n            transform: translate3d(50%, 50%, 0);\n  }\n}\n\n.neon[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  font-size: 6vw;\n  line-height: 7vw;\n  font-weight: bold;\n  text-align: center;\n  margin: 0;\n  color: black;\n}\n\n.neon[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 0 4vw;\n  font-size: 2vw;\n  line-height: 3vw;\n  font-weight: normal;\n  text-align: justify;\n  text-indent: 4em;\n  color: #3E3636;\n}\n\n.buttonWrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 4vw;\n}\n\n.enterPortalLink[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 2vw;\n  letter-spacing: 2px;\n  color: #3E3636;\n  border: 2px solid #3E3636;\n  border-radius: 5px;\n  padding: 2vw 5vw;\n  position: relative;\n  text-align: center;\n  background: #D29F9F;\n  -webkit-transition: background 0.15s ease-in-out;\n  transition: background 0.15s ease-in-out;\n}\n\n.enterPortalLink[_ngcontent-%COMP%]:hover {\n  background: #AF8989;\n}\n\n.movingStrip[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(1%, rgba(255, 255, 255, 0.03)), color-stop(30%, rgba(255, 255, 255, 0.6)), color-stop(50%, rgba(255, 255, 255, 0.85)), color-stop(70%, rgba(255, 255, 255, 0.85)), color-stop(71%, rgba(255, 255, 255, 0.85)), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 1%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.85) 71%, rgba(255, 255, 255, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffffff\", endColorstr=\"#00ffffff\",GradientType=1 );\n  width: 15%;\n  height: 100%;\n  transform: skew(-10deg, 0deg);\n  -webkit-transform: skew(-10deg, 0deg);\n  -moz-transform: skew(-10deg, 0deg);\n  -ms-transform: skew(-10deg, 0deg);\n  -o-transform: skew(-10deg, 0deg);\n  animation: move 2s;\n  animation-iteration-count: infinite;\n  animation-delay: 1s;\n  -webkit-animation: move 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-delay: 1s;\n  -moz-transform: skew(-10deg, 0deg);\n  -moz-animation: move 2s;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-delay: 1s;\n  -ms-transform: skew(-10deg, 0deg);\n  -ms-animation: move 2s;\n  -ms-animation-iteration-count: infinite;\n  -ms-animation-delay: 1s;\n  -o-transform: skew(-10deg, 0deg);\n  -o-animation: move 2s;\n  -o-animation-iteration-count: infinite;\n  -o-animation-delay: 1s;\n}\n\n@keyframes move {\n  0% {\n    left: 0;\n    opacity: 0;\n  }\n  5% {\n    opacity: 0;\n  }\n  48% {\n    opacity: 0.9;\n  }\n  80% {\n    opacity: 0;\n  }\n  100% {\n    left: 82%;\n  }\n}\n\n@-webkit-keyframes move {\n  0% {\n    left: 0;\n    opacity: 0;\n  }\n  5% {\n    opacity: 0;\n  }\n  48% {\n    opacity: 0.9;\n  }\n  80% {\n    opacity: 0;\n  }\n  100% {\n    left: 82%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2ludHJvL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGludHJvXFxpbnRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDRCxpQ0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0NBQUE7RUFDQyxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLGdEQUFBO0lBQ0QscUNBQUE7RUNFRDtBQUNGOztBRENBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxjQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0FDQUY7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBRENBO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0VGOztBRENBOztFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQ0VGOztBRENBO0VBQ0UsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLHNJQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VDRUY7QUFDRjs7QURMQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUlBLHdDQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFNQSw2VUFBQTtFQUFBLHNQQUFBO0VBQ0EsdUhBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUNJRjs7QURGQTtFQUNFO0lBQ0UsT0FBQTtJQUNBLFVBQUE7RUNLRjtFREhBO0lBQ0UsVUFBQTtFQ0tGO0VESEE7SUFDRSxZQUFBO0VDS0Y7RURIQTtJQUNFLFVBQUE7RUNLRjtFREhBO0lBQ0UsU0FBQTtFQ0tGO0FBQ0Y7O0FESEE7RUFDRTtJQUNFLE9BQUE7SUFDQSxVQUFBO0VDS0Y7RURIQTtJQUNFLFVBQUE7RUNLRjtFREhBO0lBQ0UsWUFBQTtFQ0tGO0VESEE7SUFDRSxVQUFBO0VDS0Y7RURIQTtJQUNFLFNBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmdTZWxlY3RvciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHRib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWxlZnQ6IDEwMHB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcclxuXHRib3JkZXItYm90dG9tOiAxMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gIC5sYW5nU2VsZWN0b3Ige1xyXG4gICAgYm9yZGVyLWxlZnQ6IDcwcHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjUpO1xyXG5cdCAgYm9yZGVyLWJvdHRvbTogNzBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcbi5sYW5nQ2hlY2tib3gge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgei1pbmRleDogOTY7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW50cm9faGVhZGVyX2JhY2tncm91bmQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkaW5nLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1JTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIFxyXG4gIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcblxyXG4uaGVhZGluZy10ZXh0OjphZnRlciB7XHJcbiAgY29udGVudDogJ19fX19fX19fX19fXyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcmUtcGljIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUlO1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIGhlaWdodDogMjV2dztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvU2tvcmluYS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuI3N1YmhlYWRpbmdJbnRyb2R1Y3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDR2dztcclxuICBtYXJnaW4tbGVmdDogNHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xyXG4gIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiA1dnc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6ICMzRTM2MzY7XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nV3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogOXZ3O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDR2dztcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc2hpZWxkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIHotaW5kZXg6IDkwO1xyXG59XHJcblxyXG4udGV4dC1lZmZlY3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmaWx0ZXI6IGNvbnRyYXN0KDExMCUpIGJyaWdodG5lc3MoMTkwJSk7XHJcbn1cclxuXHJcbi5uZW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5uZW9uOjpiZWZvcmUsIC5uZW9uOjphZnRlciB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLm5lb246OmFmdGVyIHtcclxuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcclxufVxyXG4ubmVvbjo6YmVmb3JlIHtcclxuICBmaWx0ZXI6IGJsdXIoMC4wMmVtKTtcclxufVxyXG5cclxuLmdyYWRpZW50LFxyXG4uc3BvdGxpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uZ3JhZGllbnQge1xyXG4gIGJhY2tncm91bmQ6ICNEMjlGOUY7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG59XHJcblxyXG4uc3BvdGxpZ2h0IHtcclxuICBhbmltYXRpb246IGxpZ2h0IDVzIGluZmluaXRlIGxpbmVhcjtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSwgdHJhbnNwYXJlbnQgMjUlKSAwIDAvMjUlIDI1JSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUsIGJsYWNrIDI1JSkgNTAlIDUwJS8xMi41JSAxMi41JTtcclxuICB0b3A6IC0xMDAlO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBjb2xvci1kb2RnZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsaWdodCB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgNTAlLCAwKTtcclxuICB9XHJcbn1cclxuLm5lb24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xyXG4gIGZvbnQtc2l6ZTogNnZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiA3dnc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm5lb246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAwIDR2dztcclxuICBmb250LXNpemU6IDJ2dztcclxuICBsaW5lLWhlaWdodDogM3Z3O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWluZGVudDogNGVtO1xyXG4gIGNvbG9yOiAjM0UzNjM2O1xyXG59XHJcblxyXG4uYnV0dG9uV3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNHZ3O1xyXG59XHJcblxyXG4uZW50ZXJQb3J0YWxMaW5rIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICMzRTM2MzY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzNFMzYzNjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMnZ3IDV2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNEMjlGOUY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmVudGVyUG9ydGFsTGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI0FGODk4OTtcclxufVxyXG5cclxuLm1vdmluZ1N0cmlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSwgY29sb3Itc3RvcCgxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSksIGNvbG9yLXN0b3AoMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkpLCBjb2xvci1zdG9wKDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSksIGNvbG9yLXN0b3AoNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsR3JhZGllbnRUeXBlPTEgKTtcclxuICB3aWR0aDogMTUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBza2V3KC0xMGRlZywgMGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xyXG4gIGFuaW1hdGlvbjogbW92ZSAycztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlIDJzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBza2V3KC0xMGRlZywgMGRlZyk7XHJcbiAgLW1vei1hbmltYXRpb246IG1vdmUgMnM7XHJcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xyXG4gIC1tcy1hbmltYXRpb246IG1vdmUgMnM7XHJcbiAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIC1vLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xyXG4gIC1vLWFuaW1hdGlvbjogbW92ZSAycztcclxuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcbkBrZXlmcmFtZXMgbW92ZSB7XHJcbiAgMCUge1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDQ4JSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGxlZnQ6IDgyJTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1JSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA0OCUge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiA4MiU7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBtb3ZlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNSUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNDglIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogODglO1xyXG4gIH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyBtb3ZlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNSUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNDglIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogODIlO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIG1vdmUge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1JSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA0OCUge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiA4MiU7XHJcbiAgfVxyXG59XHJcbiIsIi5sYW5nU2VsZWN0b3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTAwcHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjUpO1xuICBib3JkZXItYm90dG9tOiAxMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIC5sYW5nU2VsZWN0b3Ige1xuICAgIGJvcmRlci1sZWZ0OiA3MHB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcbiAgICBib3JkZXItYm90dG9tOiA3MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG59XG4ubGFuZ0NoZWNrYm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgei1pbmRleDogOTY7XG59XG5cbi5oZWFkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ludHJvX2hlYWRlcl9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRpbmctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiA2dnc7XG59XG5cbi5oZWFkaW5nLXRleHQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJfX19fX19fX19fX19cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JlLXBpYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1JTtcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogMjV2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Ta29yaW5hLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgei1pbmRleDogMTtcbn1cblxuI3N1YmhlYWRpbmdJbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0dnc7XG4gIG1hcmdpbi1sZWZ0OiA0dnc7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBmb250LXNpemU6IDR2dztcbiAgbGluZS1oZWlnaHQ6IDV2dztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuLnN1YmhlYWRpbmdXcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDl2dztcbiAgd2lkdGg6IDgwJTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA0dnc7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zaGllbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbiAgei1pbmRleDogOTA7XG59XG5cbi50ZXh0LWVmZmVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmaWx0ZXI6IGNvbnRyYXN0KDExMCUpIGJyaWdodG5lc3MoMTkwJSk7XG59XG5cbi5uZW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmVvbjo6YmVmb3JlLCAubmVvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubmVvbjo6YWZ0ZXIge1xuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcbn1cblxuLm5lb246OmJlZm9yZSB7XG4gIGZpbHRlcjogYmx1cigwLjAyZW0pO1xufVxuXG4uZ3JhZGllbnQsXG4uc3BvdGxpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogI0QyOUY5RjtcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xufVxuXG4uc3BvdGxpZ2h0IHtcbiAgYW5pbWF0aW9uOiBsaWdodCA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlLCB0cmFuc3BhcmVudCAyNSUpIDAgMC8yNSUgMjUlLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSwgYmxhY2sgMjUlKSA1MCUgNTAlLzEyLjUlIDEyLjUlO1xuICB0b3A6IC0xMDAlO1xuICBsZWZ0OiAtMTAwJTtcbiAgbWl4LWJsZW5kLW1vZGU6IGNvbG9yLWRvZGdlO1xufVxuXG5Aa2V5ZnJhbWVzIGxpZ2h0IHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MCUsIDUwJSwgMCk7XG4gIH1cbn1cbi5uZW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGZvbnQtc2l6ZTogNnZ3O1xuICBsaW5lLWhlaWdodDogN3Z3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm5lb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDAgNHZ3O1xuICBmb250LXNpemU6IDJ2dztcbiAgbGluZS1oZWlnaHQ6IDN2dztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1pbmRlbnQ6IDRlbTtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbi5idXR0b25XcmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDR2dztcbn1cblxuLmVudGVyUG9ydGFsTGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDJ2dztcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICMzRTM2MzY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRTM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnZ3IDV2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNEMjlGOUY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLmVudGVyUG9ydGFsTGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNBRjg5ODk7XG59XG5cbi5tb3ZpbmdTdHJpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksIGNvbG9yLXN0b3AoMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykpLCBjb2xvci1zdG9wKDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpKSwgY29sb3Itc3RvcCg3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkpLCBjb2xvci1zdG9wKDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUgMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1vei1hbmltYXRpb246IG1vdmUgMnM7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xuICAtbXMtYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtby10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW8tYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA0OCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogODIlO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNDglIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDgyJTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQ4JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiA4OCU7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQ4JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiA4MiU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNDglIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDgyJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, { mainHeading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainHeading']
        }] }); })();


/***/ }),

/***/ "./src/app/core/components/page-not-found/page-not-found.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PageNotFoundComponent {
    constructor() {
        this.history = window.history;
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 16, vars: 1, consts: [[1, "wrapper"], [1, "smile-wrapper"], ["src", "/assets/images/sad-smile.png"], [3, "click"], [3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The Page you are looking for doesn`t exist or another error occured.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_span_click_10_listener() { return ctx.history.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", or head over to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Main page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " to choose another direction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/content");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  background: url('castle.jpg');\n  background-size: cover;\n}\n.wrapper[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n.smile-wrapper[_ngcontent-%COMP%] {\n  z-index: 1;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 120px;\n  margin: 50px;\n  z-index: 1;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #3E3636;\n  z-index: 1;\n}\np[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 20px;\n  color: #3E3636;\n  z-index: 1;\n}\nspan[_ngcontent-%COMP%] {\n  color: #D29F9F;\n  cursor: pointer;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-decoration: underline;\n  color: #3E3636;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QURlSjtBQ1pBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBRGVKO0FDZEk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGdCUjtBQ1pBO0VBQ0ksVUFBQTtBRGVKO0FDWkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FEZUo7QUNaQTtFQUNJLGVBQUE7RUFDQSxjRnhDUztFRXlDVCxVQUFBO0FEZUo7QUNaQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0YvQ1M7RUVnRFQsVUFBQTtBRGVKO0FDWkE7RUFDSSxjRnREUztFRXVEVCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FEZUoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbl9jb2xvcjogI0QyOUY5RjtcclxuJHN1Yl9jb2xvcjogI0Y5RTdEMztcclxuJGZvbnRfY29sb3I6ICMzRTM2MzY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FzdGxlLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ud3JhcHBlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5zbWlsZS13cmFwcGVyIHtcbiAgei1pbmRleDogMTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEyMHB4O1xuICBtYXJnaW46IDUwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzNFMzYzNjtcbiAgei1pbmRleDogMTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogIzNFMzYzNjtcbiAgei1pbmRleDogMTtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiAjRDI5RjlGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzRTM2MzY7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYXN0bGUuanBnKTsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbWlsZS13cmFwcGVyIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6ICRtYWluX2NvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMzRTM2MzY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: HttpLoaderFactory, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/core/components/content/content.component.ts");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/intro/intro.component */ "./src/app/core/components/intro/intro.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/core/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/navigation.service */ "./src/app/core/services/navigation.service.ts");
/* harmony import */ var _components_header_language_language_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/header/language/language.component */ "./src/app/core/components/header/language/language.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _team_team_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../team/team.module */ "./src/app/team/team.module.ts");
























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_services_navigation_service__WEBPACK_IMPORTED_MODULE_17__["NavigationService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]
                }
            }),
            _team_team_module__WEBPACK_IMPORTED_MODULE_21__["TeamModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_14__["ContentComponent"],
        _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_15__["IntroComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
        _components_header_language_language_component__WEBPACK_IMPORTED_MODULE_18__["LanguageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _team_team_module__WEBPACK_IMPORTED_MODULE_21__["TeamModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_14__["ContentComponent"],
                    _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_15__["IntroComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                    _components_header_language_language_component__WEBPACK_IMPORTED_MODULE_18__["LanguageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]
                        }
                    }),
                    _team_team_module__WEBPACK_IMPORTED_MODULE_21__["TeamModule"]
                ],
                providers: [_services_navigation_service__WEBPACK_IMPORTED_MODULE_17__["NavigationService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/architects-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/architects-api.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchitectsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectsApiService", function() { return ArchitectsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _locales_architects_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locales/architects-data */ "./src/locales/architects-data.ts");



class ArchitectsApiService {
    constructor(architectsData) {
        this.architectsData = architectsData;
    }
    getAll() {
        return this.architectsData.authors;
    }
    getById(id) {
        return this.architectsData.authors.find(author => author.id === id);
    }
    getRandom() {
        return this.architectsData.authors[Math.floor(Math.random() * this.architectsData.authors.length)];
    }
}
ArchitectsApiService.ɵfac = function ArchitectsApiService_Factory(t) { return new (t || ArchitectsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_locales_architects_data__WEBPACK_IMPORTED_MODULE_1__["ArchitectsData"])); };
ArchitectsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArchitectsApiService, factory: ArchitectsApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _locales_architects_data__WEBPACK_IMPORTED_MODULE_1__["ArchitectsData"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/navigation.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/navigation.service.ts ***!
  \*****************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavigationService {
    constructor() {
        this.navMenu = [
            {
                title: 'pageLinks.home',
                routing: '/'
            },
            {
                title: 'pageLinks.main',
                routing: '/content'
            },
            {
                title: 'pageLinks.listOfArchitects',
                routing: '/content/architects'
            },
            {
                title: 'pageLinks.workLog',
                routing: '/content/worklog'
            },
            {
                title: 'pageLinks.styleGuide',
                routing: '/content/styleguide',
            },
        ];
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/components/day-author/day-author.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/components/day-author/day-author.component.ts ***!
  \********************************************************************/
/*! exports provided: DayAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayAuthorComponent", function() { return DayAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/architects-api.service */ "./src/app/core/services/architects-api.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






const _c0 = function (a1) { return ["architects", a1]; };
class DayAuthorComponent {
    constructor(architectsApi) {
        this.architectsApi = architectsApi;
    }
    ngOnInit() {
        this.randomArchitect = this.architectsApi.getRandom();
    }
}
DayAuthorComponent.ɵfac = function DayAuthorComponent_Factory(t) { return new (t || DayAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"])); };
DayAuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayAuthorComponent, selectors: [["app-day-author"]], decls: 15, vars: 16, consts: [[1, "img-wrapper"], ["alt", "author", 3, "src"], [1, "content"], ["mat-stroked-button", "", 3, "routerLink"]], template: function DayAuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomArchitect.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.randomArchitect.path + "." + ctx.randomArchitect.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.randomArchitect.path + "." + ctx.randomArchitect.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx.randomArchitect.path + "." + ctx.randomArchitect.vita));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.randomArchitect.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "pageLinks.More"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n[_nghost-%COMP%] {\n  flex-shrink: 0;\n  text-align: center;\n  width: 385px;\n  background-color: #F9E7D3;\n  color: #3E3636;\n}\n.img-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 430px;\n}\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 10px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n}\n@media (max-width: 1280px) {\n  [_nghost-%COMP%] {\n    width: 300px;\n  }\n\n  .img-wrapper[_ngcontent-%COMP%] {\n    height: 370px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2RheS1hdXRob3IvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxDdWx0dXJhbF9Qb3J0YWxcXGN1bHR1cmFsLXBvcnRhbC9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2RheS1hdXRob3IvZGF5LWF1dGhvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2RheS1hdXRob3IvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxDdWx0dXJhbF9Qb3J0YWxcXGN1bHR1cmFsLXBvcnRhbC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50c1xcZGF5LWF1dGhvclxcZGF5LWF1dGhvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkZMUTtFRU1SLGNGTFM7QUNvQmI7QUNYQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBRGNKO0FDYkk7RUFDSSxXQUFBO0FEZVI7QUNYQTtFQUNJLGFBQUE7QURjSjtBQ2JJO0VBQ0ksdUJBQUE7QURlUjtBQ1pJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FEY1I7QUNYSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRGFSO0FDVEE7RUFDSTtJQUNJLFlBQUE7RURZTjs7RUNURTtJQUNJLGFBQUE7RURZTjs7RUNURTtJQUNJLGFBQUE7RURZTjtFQ1hNO0lBQ0ksZUFBQTtFRGFWO0VDVk07SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RURZVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2RheS1hdXRob3IvZGF5LWF1dGhvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xyXG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xyXG4kZm9udF9jb2xvcjogIzNFMzYzNjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XHJcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgICB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuaDEsIGgyLCBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICRmb250X2NvbG9yO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbjpob3N0IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDM4NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlFN0QzO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA0MzBweDtcbn1cbi5pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbnRlbnQgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNvbnRlbnQgaDQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLmltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmNvbnRlbnQgaDQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzODVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWJfY29sb3I7XHJcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XHJcbn1cclxuXHJcblxyXG4uaW1nLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayAuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-day-author',
                templateUrl: './day-author.component.html',
                styleUrls: ['./day-author.component.scss']
            }]
    }], function () { return [{ type: _core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/components/main/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/components/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _day_author_day_author_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../day-author/day-author.component */ "./src/app/main/components/day-author/day-author.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class MainComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 24, vars: 33, consts: [[3, "innerHTML"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-day-author");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 11, "pageLinks.Main-content-1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, "pageLinks.Main-content-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 15, "pageLinks.Main-content-3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 17, "pageLinks.Main-content-4"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 19, "pageLinks.Main-content-5"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 21, "pageLinks.Main-content-6"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 23, "pageLinks.Main-content-7"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, "pageLinks.Main-content-8"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 27, "pageLinks.Main-content-9"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 29, "pageLinks.Main-content-10"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 31, "pageLinks.Main-content-11"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_day_author_day_author_component__WEBPACK_IMPORTED_MODULE_1__["DayAuthorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  padding: 40px 30px 90px 30px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n\np[_ngcontent-%COMP%] {\n  text-indent: 1.5em;\n  margin: 10px;\n  font-size: 20px;\n  line-height: 35px;\n  text-align: justify;\n}\n\n@media (max-width: 940px) {\n  [_nghost-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-top: 10px;\n  }\n\n  div[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n\n@media (max-width: 630px) {\n  [_nghost-%COMP%] {\n    padding: 10px 15px 40px 15px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 30px;\n  }\n}\n\n@media (max-width: 420px) {\n  [_nghost-%COMP%] {\n    padding: 10px 10px 40px 10px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21haW4vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxDdWx0dXJhbF9Qb3J0YWxcXGN1bHR1cmFsLXBvcnRhbC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50c1xcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRElBO0VBQ0U7SUFDRSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsaUJBQUE7RUNERjs7RURHQTtJQUNFLGdCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsNEJBQUE7RUNERjs7RURJQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLDRCQUFBO0VDRkY7O0VES0E7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiA0MHB4IDMwcHggOTBweCAzMHB4O1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtaW5kZW50OiAxLjVlbTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgZGl2IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggNDBweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCA0MHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogNDBweCAzMHB4IDkwcHggMzBweDtcbn1cblxuZGl2IHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxucCB7XG4gIHRleHQtaW5kZW50OiAxLjVlbTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgOmhvc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIGRpdiB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggNDBweCAxNXB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCA0MHB4IDEwcHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/main/components/main/main.component.ts");
/* harmony import */ var _components_day_author_day_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/day-author/day-author.component */ "./src/app/main/components/day-author/day-author.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        _components_day_author_day_author_component__WEBPACK_IMPORTED_MODULE_3__["DayAuthorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
                    _components_day_author_day_author_component__WEBPACK_IMPORTED_MODULE_3__["DayAuthorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/search-by.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/search-by.pipe.ts ***!
  \************************************************/
/*! exports provided: SearchByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByPipe", function() { return SearchByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class SearchByPipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(list, search = '') {
        if (!search.trim()) {
            return list;
        }
        return list.filter(item => this.translate
            .instant(`${item.path}.${item.searchKey}`)
            .toLowerCase()
            .includes(search.toLowerCase()));
    }
}
SearchByPipe.ɵfac = function SearchByPipe_Factory(t) { return new (t || SearchByPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
SearchByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchBy", type: SearchByPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchBy'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/translate.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/translate.service.ts ***!
  \******************************************************/
/*! exports provided: OurTranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTranslateService", function() { return OurTranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class OurTranslateService {
    constructor(translateService) {
        this.translateService = translateService;
        this.defaultLang = 'en';
        this.currentLang = localStorage.getItem('lang') || this.defaultLang;
    }
    setLanguage(language) {
        this.translateService.setDefaultLang(language);
        localStorage.setItem('lang', language);
    }
}
OurTranslateService.ɵfac = function OurTranslateService_Factory(t) { return new (t || OurTranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
OurTranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OurTranslateService, factory: OurTranslateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurTranslateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/styleguide/components/our-styleguide/our-styleguide.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/styleguide/components/our-styleguide/our-styleguide.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OurStyleguideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStyleguideComponent", function() { return OurStyleguideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class OurStyleguideComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OurStyleguideComponent.ɵfac = function OurStyleguideComponent_Factory(t) { return new (t || OurStyleguideComponent)(); };
OurStyleguideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurStyleguideComponent, selectors: [["app-our-styleguide"]], decls: 74, vars: 48, consts: [[1, "welcomeHeading"], ["routerLink", "/"], [1, "styleguideColors"], [1, "wrp"], [1, "color-box", 2, "background-color", "#D29F9F"], [1, "text"], [1, "color-box", 2, "background-color", "#f9e7d3"], [1, "color-box", 2, "background-color", "#000000"], [1, "color-box", 2, "background-color", "#3e3636"], [1, "styleguideHeadings"], [1, "styleguideButtons"], [1, "colored_btn"], [1, "outlined_btn"], [1, "stuleguideSearchForm"], [1, "form"], ["type", "search", 3, "placeholder"], [1, "icon"], ["src", "../../../../assets/images/search_icon.png", "alt", "search"], [1, "styleguideTextWrapper"], [1, "styleguideText"]], template: function OurStyleguideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#d29f9f");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "#f9e7d3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "#000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "#3e3636");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quis ipsum! Inventore assumenda quisquam corrupti vitae aliquam, quos similique velit cupiditate culpa doloremque nostrum, dicta voluptatum esse a laborum asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quis ipsum! Inventore assumenda quisquam corrupti vitae aliquam, quos similique velit cupiditate culpa doloremque nostrum, dicta voluptatum esse a laborum asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quis ipsum! Inventore assumenda quisquam corrupti vitae aliquam, quos similique velit cupiditate culpa doloremque nostrum, dicta voluptatum esse a laborum asperiores? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 16, "pageLinks.styleguideWelcome"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, "pageLinks.styleguideCulturePortal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, "pageLinks.styleguideDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "pageLinks.styleguidePrimaryColor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 24, "pageLinks.styleguideSecondaryColor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 26, "pageLinks.styleguidePrimaryText"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 28, "pageLinks.styleguideSecondaryText"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 30, "pageLinks.styleguideHeading"), " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 32, "pageLinks.styleguideHeading"), " 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 34, "pageLinks.styleguideHeading"), " 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 36, "pageLinks.styleguideHeading"), " 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 38, "pageLinks.styleguideHeading"), " 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 40, "pageLinks.styleguideHeading"), " 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 42, "pageLinks.styleguideButtonColored"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 44, "pageLinks.styleguideButtonOutlined"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 46, "pageLinks.Search-area"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".welcomeHeading[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.welcomeHeading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n  text-align: center;\n}\n.welcomeHeading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #D29F9F;\n  text-decoration: none;\n}\n.welcomeHeading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ca8e8e;\n}\n.welcomeHeading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n  text-align: center;\n}\n.styleguideButtons[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: center;\n}\n.styleguideButtons[_ngcontent-%COMP%]   .colored_btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin: 2% 5%;\n  padding: 10px 30px;\n  text-align: center;\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 18px;\n  color: #3E3636;\n  border: 2px solid #3E3636;\n  border-radius: 5px;\n  background: #D29F9F;\n}\n.styleguideButtons[_ngcontent-%COMP%]   .colored_btn[_ngcontent-%COMP%]:hover, .styleguideButtons[_ngcontent-%COMP%]   .colored_btn[_ngcontent-%COMP%]:focus {\n  -webkit-filter: brightness(120%);\n          filter: brightness(120%);\n}\n.styleguideButtons[_ngcontent-%COMP%]   .outlined_btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin: 2% 5%;\n  padding: 10px 30px;\n  text-align: center;\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 18px;\n  color: #3E3636;\n  border: 1px solid #3E3636;\n  border-radius: 5px;\n  background: #ffffff;\n}\n.styleguideButtons[_ngcontent-%COMP%]   .outlined_btn[_ngcontent-%COMP%]:hover, .styleguideButtons[_ngcontent-%COMP%]   .outlined_btn[_ngcontent-%COMP%]:focus {\n  background: #D29F9F;\n}\n.styleguideColors[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.styleguideColors[_ngcontent-%COMP%]   .wrp[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 20px;\n  margin-left: 40%;\n}\n.styleguideColors[_ngcontent-%COMP%]   .color-box[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  width: 115px;\n  height: 70px;\n  margin-right: 20px;\n  background-color: red;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.styleguideColors[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid gray;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 2px 5px;\n}\n.styleguideColors[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n.styleguideHeadings[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.styleguideHeadings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin-left: 40%;\n}\n.styleguideHeadings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\n.styleguideHeadings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  position: relative;\n  width: 41%;\n  margin: 0 auto;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  padding-left: 10px;\n  border: 1px solid #3E3636;\n  border-radius: 20px;\n  outline: none;\n  background: #fff;\n  color: #666;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  width: 50px;\n  height: 35px;\n  border: none;\n  background-color: #3E3636;\n  border-radius: 0 20px 20px 0;\n  cursor: pointer;\n  outline: none;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: auto;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(150%);\n          filter: brightness(150%);\n}\n.styleguideTextWrapper[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.styleguideTextWrapper[_ngcontent-%COMP%]   .styleguideText[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  text-align: justify;\n  padding: 0 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 25px;\n  color: #3E3636;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGVndWlkZS9jb21wb25lbnRzL291ci1zdHlsZWd1aWRlL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxhcHBcXHN0eWxlZ3VpZGVcXGNvbXBvbmVudHNcXG91ci1zdHlsZWd1aWRlXFxvdXItc3R5bGVndWlkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3R5bGVndWlkZS9jb21wb25lbnRzL291ci1zdHlsZWd1aWRlL291ci1zdHlsZWd1aWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0xGO0FET0U7RUFDSSxxQkFBQTtFQUNBLGNBVEU7RUFVRixrQkFBQTtBQ0xOO0FEUUU7RUFDSSxjQWpCTztFQWtCUCxxQkFBQTtBQ05OO0FEU0U7RUFDSSxjQUFBO0FDUE47QURVRTtFQUNJLHlDQUFBO0VBQ0EsY0F6Qk87RUEwQlAsa0JBQUE7QUNSTjtBRGVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0FDWkY7QURjRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWko7QURhSTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNYTjtBRGVFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNiSjtBRGNJO0VBQ0ksbUJBQUE7QUNaUjtBRG9CQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNqQkY7QURtQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDakJKO0FEb0JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FDbEJKO0FEcUJFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUNuQko7QURzQkU7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0FDcEJKO0FEMkJBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ3hCRjtBRDBCRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ3hCTjtBRDJCRTtFQUNJLHFCQUFBO0VBQ0EsY0E1SEU7QUNtR1I7QUQ0QkU7RUFDSSx5Q0FBQTtFQUNBLGNBbElPO0FDd0diO0FEaUNBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQzlCRjtBRGdDRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUM5Qk47QURpQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUMvQk47QURrQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBcktPO0VBc0tQLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNoQ047QURrQ007RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDaENWO0FEbUNFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ2pDSjtBRHdDQTtFQUNFLGVBQUE7QUNyQ0Y7QUR1Q0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3JDSiIsImZpbGUiOiJzcmMvYXBwL3N0eWxlZ3VpZGUvY29tcG9uZW50cy9vdXItc3R5bGVndWlkZS9vdXItc3R5bGVndWlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xyXG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xyXG4kZm9udF9jb2xvcjogIzNFMzYzNjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4gIFxyXG4vLyBXZWxjb21lIFBhcmFncmFwaFxyXG4ud2VsY29tZUhlYWRpbmcge1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gIGgxIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xyXG4gICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgICBjb2xvcjogJG1haW5fY29sb3I7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkbWFpbl9jb2xvciwgJGFtb3VudDogNSk7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6ICRmb250X2NvbG9yO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEJ1dHRvbnNcclxuLnN0eWxlZ3VpZGVCdXR0b25zIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5jb2xvcmVkX2J0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlIDUlO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjM0UzNjM2O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNFMzYzNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNEMjlGOUY7XHJcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAub3V0bGluZWRfYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMiUgNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzRTM2MzY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0UzNjM2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNEMjlGOUY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIENvbG9yc1xyXG4uc3R5bGVndWlkZUNvbG9ycyB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gIC53cnAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIH1cclxuICBcclxuICAuY29sb3ItYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIH1cclxuICBcclxuICAudGV4dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEhlYWRpbmdzXHJcbi5zdHlsZWd1aWRlSGVhZGluZ3Mge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcclxuICAgICAgY29sb3I6ICRibGFjaztcclxuICB9XHJcbiAgXHJcbiAgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2VhcmNoIEZvcm1cclxuLnN0dWxlZ3VpZGVTZWFyY2hGb3JtIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiA0MSU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAgIFxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRmb250X2NvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcbiAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvbnRfY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICBcclxuICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVGV4dFxyXG4uc3R5bGVndWlkZVRleHRXcmFwcGVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgXHJcbiAgLnN0eWxlZ3VpZGVUZXh0IHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGNvbG9yOiAjM0UzNjM2O1xyXG4gIH1cclxufVxyXG4iLCIud2VsY29tZUhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi53ZWxjb21lSGVhZGluZyBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndlbGNvbWVIZWFkaW5nIGEge1xuICBjb2xvcjogI0QyOUY5RjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLndlbGNvbWVIZWFkaW5nIGE6aG92ZXIge1xuICBjb2xvcjogI2NhOGU4ZTtcbn1cbi53ZWxjb21lSGVhZGluZyBwIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0UzNjM2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdHlsZWd1aWRlQnV0dG9ucyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0eWxlZ3VpZGVCdXR0b25zIC5jb2xvcmVkX2J0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDIlIDUlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzRTM2MzY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRTM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI0QyOUY5Rjtcbn1cbi5zdHlsZWd1aWRlQnV0dG9ucyAuY29sb3JlZF9idG46aG92ZXIsIC5zdHlsZWd1aWRlQnV0dG9ucyAuY29sb3JlZF9idG46Zm9jdXMge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG59XG4uc3R5bGVndWlkZUJ1dHRvbnMgLm91dGxpbmVkX2J0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDIlIDUlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzRTM2MzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzRTM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5zdHlsZWd1aWRlQnV0dG9ucyAub3V0bGluZWRfYnRuOmhvdmVyLCAuc3R5bGVndWlkZUJ1dHRvbnMgLm91dGxpbmVkX2J0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNEMjlGOUY7XG59XG5cbi5zdHlsZWd1aWRlQ29sb3JzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnN0eWxlZ3VpZGVDb2xvcnMgLndycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MCU7XG59XG4uc3R5bGVndWlkZUNvbG9ycyAuY29sb3ItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4uc3R5bGVndWlkZUNvbG9ycyAudGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuLnN0eWxlZ3VpZGVDb2xvcnMgaDIge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0eWxlZ3VpZGVIZWFkaW5ncyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5zdHlsZWd1aWRlSGVhZGluZ3MgaDEsIC5zdHlsZWd1aWRlSGVhZGluZ3MgaDIsIC5zdHlsZWd1aWRlSGVhZGluZ3MgaDMsIC5zdHlsZWd1aWRlSGVhZGluZ3MgaDQsIC5zdHlsZWd1aWRlSGVhZGluZ3MgaDUsIC5zdHlsZWd1aWRlSGVhZGluZ3MgaDYge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MCU7XG59XG4uc3R5bGVndWlkZUhlYWRpbmdzIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnN0eWxlZ3VpZGVIZWFkaW5ncyBoMiwgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoMywgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoNCwgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoNSwgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoNiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuLnN0dWxlZ3VpZGVTZWFyY2hGb3JtIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnN0dWxlZ3VpZGVTZWFyY2hGb3JtIC5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDElO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zdHVsZWd1aWRlU2VhcmNoRm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNFMzYzNjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM2NjY7XG59XG4uc3R1bGVndWlkZVNlYXJjaEZvcm0gYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFMzYzNjtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnN0dWxlZ3VpZGVTZWFyY2hGb3JtIGJ1dHRvbiBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnN0dWxlZ3VpZGVTZWFyY2hGb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcbn1cblxuLnN0eWxlZ3VpZGVUZXh0V3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5zdHlsZWd1aWRlVGV4dFdyYXBwZXIgLnN0eWxlZ3VpZGVUZXh0IHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICMzRTM2MzY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurStyleguideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-styleguide',
                templateUrl: './our-styleguide.component.html',
                styleUrls: ['./our-styleguide.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/styleguide/styleguide.module.ts":
/*!*************************************************!*\
  !*** ./src/app/styleguide/styleguide.module.ts ***!
  \*************************************************/
/*! exports provided: StyleguideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleguideModule", function() { return StyleguideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/our-styleguide/our-styleguide.component */ "./src/app/styleguide/components/our-styleguide/our-styleguide.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class StyleguideModule {
}
StyleguideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StyleguideModule });
StyleguideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StyleguideModule_Factory(t) { return new (t || StyleguideModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StyleguideModule, { declarations: [_components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_2__["OurStyleguideComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleguideModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_2__["OurStyleguideComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/team/components/our-team/our-team.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/team/components/our-team/our-team.component.ts ***!
  \****************************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class OurTeamComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OurTeamComponent.ɵfac = function OurTeamComponent_Factory(t) { return new (t || OurTeamComponent)(); };
OurTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurTeamComponent, selectors: [["app-our-team"]], decls: 80, vars: 42, consts: [[1, "wrp"], [1, "list"], [1, "item"], [1, "photo"], ["src", "/assets/images/vladimir-drachuk.jpg", "alt", "Vladimir Drachuk"], ["href", "https://github.com/vladimir-drachuk"], ["src", "/assets/images/github_icon3.png", "alt", "github", 1, "icon"], [1, "text"], [1, "name"], ["src", "/assets/images/Alex-Edward-Klim.jpg", "alt", "Alexey Klimovskoy"], ["href", "https://github.com/Alex-Edward-Klim"], ["src", "/assets/images/shrrrimp.jpg", "alt", "Yuliya Takmakova"], ["href", "https://github.com/shrrrimp"], ["src", "/assets/images/pavel-leskavets.jpg", "alt", "Pavel Leskavets"], ["href", "https://github.com/pavel-leskavets"], ["src", "/assets/images/beMoreHuman.jpg", "alt", "Oleksandr Klymenko"], ["href", "https://github.com/BeMoreHuman"], ["src", "/assets/images/dimlbc.jpg", "alt", "Dmitri Lobachevski"], ["href", "https://github.com/dimlbc"], ["id", "more-btn", "routerLink", "/content/worklog"]], template: function OurTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 14, "pageLinks.ourTeam"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 16, "pageLinks.teamVladimirDrachuk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, "pageLinks.teamDescriptionVladimirDrachuk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 20, "pageLinks.teamAlexKlim"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 22, "pageLinks.teamDescriptionAlexKlim"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 24, "pageLinks.teamYuliyaTakmakova"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 26, "pageLinks.teamDescriptionYuliyaTakmakova"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 28, "pageLinks.teamPavelLeskavets"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 30, "pageLinks.teamDescriptionPavelLeskavets"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 32, "pageLinks.teamOleksandrKlymenko"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 34, "pageLinks.teamDescriptionOleksandrKlymenko"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 36, "pageLinks.teamDmitriLobachevski"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 38, "pageLinks.teamDescriptionDmitriLobachevski"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 40, "pageLinks.More"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n.wrp[_ngcontent-%COMP%] {\n  padding: 70px 90px;\n  background-color: #3E3636;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #ffffff;\n  font-size: 30pt;\n}\n.list[_ngcontent-%COMP%] {\n  margin: 70px 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 45px 70px;\n}\n.item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 144px 1fr;\n}\n.item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  align-self: center;\n}\n.item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18pt;\n}\n.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: justify;\n}\n.photo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 144px;\n  height: 144px;\n  border-radius: 100%;\n}\n.photo[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  border: none;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.photo[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 100%;\n  border: 2px solid #2b2525;\n}\n#more-btn[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 30px;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  border-radius: 5px;\n}\n#more-btn[_ngcontent-%COMP%]:hover {\n  background-color: #D29F9F;\n  color: #3E3636;\n}\n@media (max-width: 940px) {\n  .wrp[_ngcontent-%COMP%] {\n    padding: 70px 20px;\n  }\n}\n@media (max-width: 820px) {\n  .item[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-top: 20px;\n  }\n}\n@media (max-width: 630px) {\n  .list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .photo[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media (max-width: 420px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 24pt;\n  }\n\n  .photo[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9jb21wb25lbnRzL291ci10ZWFtL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3RlYW0vY29tcG9uZW50cy9vdXItdGVhbS9vdXItdGVhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhbS9jb21wb25lbnRzL291ci10ZWFtL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxhcHBcXHRlYW1cXGNvbXBvbmVudHNcXG91ci10ZWFtXFxvdXItdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaQTtFQUNFLGtCQUFBO0VBQ0EseUJGRlc7QUNpQmI7QUNaQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEZUY7QUNaQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FEZUY7QUNaQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBRGVGO0FDYkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FEZUo7QUNaRTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7QURjSjtBQ1hFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FEYUo7QUNUQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRFlGO0FDVkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QURZSjtBQ1RFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QURXSjtBQ1JFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURVSjtBQ05BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEU0Y7QUNOQTtFQUNFLHlCRm5GVztFRW9GWCxjRmxGVztBQzJGYjtBQ05BO0VBQ0U7SUFDRSxrQkFBQTtFRFNGO0FBQ0Y7QUNOQTtFQUNFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VEUUY7O0VDTEE7SUFDRSx5QkFBQTtJQUNBLGdCQUFBO0VEUUY7QUFDRjtBQ0xBO0VBQ0U7SUFDRSwwQkFBQTtFRE9GOztFQ0pBO0lBQ0UsY0FBQTtFRE9GOztFQ0pBO0lBQ0Usa0JBQUE7RURPRjtBQUNGO0FDSkE7RUFDRTtJQUNFLGVBQUE7RURNRjs7RUNIQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VETUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vY29tcG9uZW50cy9vdXItdGVhbS9vdXItdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xyXG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xyXG4kZm9udF9jb2xvcjogIzNFMzYzNjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XHJcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgICAgICB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuaDEsIGgyLCBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICRmb250X2NvbG9yO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbi53cnAge1xuICBwYWRkaW5nOiA3MHB4IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTM2MzY7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDMwcHQ7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luOiA3MHB4IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiA0NXB4IDcwcHg7XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNDRweCAxZnI7XG59XG4uaXRlbSAudGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaXRlbSAubmFtZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB0O1xufVxuLml0ZW0gcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ucGhvdG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNDRweDtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5waG90byAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLnBob3RvIC5pY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnBob3RvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMmIyNTI1O1xufVxuXG4jbW9yZS1idG4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jbW9yZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDI5RjlGO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gIC53cnAge1xuICAgIHBhZGRpbmc6IDcwcHggMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAudGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcbiAgLmxpc3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnBob3RvIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB0O1xuICB9XG5cbiAgLnBob3RvIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi53cnAge1xyXG4gIHBhZGRpbmc6IDcwcHggOTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9udF9jb2xvcjtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDMwcHQ7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBtYXJnaW46IDcwcHggMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDQ1cHggNzBweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNDRweCAxZnI7XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThwdDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxufVxyXG5cclxuLnBob3RvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE0NHB4O1xyXG4gIGhlaWdodDogMTQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHJcbiAgLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIH1cclxuXHJcbiAgLmljb246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZW4oJGNvbG9yOiAkZm9udF9jb2xvciwgJGFtb3VudDogNyk7XHJcbiAgfVxyXG59XHJcblxyXG4jbW9yZS1idG4ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNtb3JlLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5fY29sb3I7XHJcbiAgY29sb3I6ICRmb250X2NvbG9yO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcclxuICAud3JwIHtcclxuICAgIHBhZGRpbmc6IDcwcHggMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gIC5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcclxuICAubGlzdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5waG90byB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRwdDtcclxuICB9XHJcblxyXG4gIC5waG90byB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurTeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-team',
                templateUrl: './our-team.component.html',
                styleUrls: ['./our-team.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/team/team.module.ts":
/*!*************************************!*\
  !*** ./src/app/team/team.module.ts ***!
  \*************************************/
/*! exports provided: TeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/our-team/our-team.component */ "./src/app/team/components/our-team/our-team.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class TeamModule {
}
TeamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamModule });
TeamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamModule_Factory(t) { return new (t || TeamModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamModule, { declarations: [_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__["OurTeamComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__["OurTeamComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__["OurTeamComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ],
                exports: [
                    _components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__["OurTeamComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/worklog/components/our-worklog/our-worklog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/worklog/components/our-worklog/our-worklog.component.ts ***!
  \*************************************************************************/
/*! exports provided: OurWorklogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurWorklogComponent", function() { return OurWorklogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_team_members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/team-members */ "./src/app/worklog/constants/team-members.ts");
/* harmony import */ var _constants_scopes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/scopes */ "./src/app/worklog/constants/scopes.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









function OurWorklogComponent_mat_expansion_panel_5_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "worklog.feature"));
} }
function OurWorklogComponent_mat_expansion_panel_5_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r23.feature), " ");
} }
function OurWorklogComponent_mat_expansion_panel_5_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "worklog.time"));
} }
function OurWorklogComponent_mat_expansion_panel_5_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r24.time), " ");
} }
function OurWorklogComponent_mat_expansion_panel_5_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function OurWorklogComponent_mat_expansion_panel_5_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function OurWorklogComponent_mat_expansion_panel_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OurWorklogComponent_mat_expansion_panel_5_th_7_Template, 3, 3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OurWorklogComponent_mat_expansion_panel_5_td_8_Template, 3, 3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OurWorklogComponent_mat_expansion_panel_5_th_10_Template, 3, 3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OurWorklogComponent_mat_expansion_panel_5_td_11_Template, 3, 3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OurWorklogComponent_mat_expansion_panel_5_tr_12_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OurWorklogComponent_mat_expansion_panel_5_tr_13_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r16 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, member_r16.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", member_r16.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r12.displayedColumns);
} }
function OurWorklogComponent_mat_checkbox_37_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OurWorklogComponent_mat_checkbox_37_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const item_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); item_r26.completed = !item_r26.completed; return ctx_r27.onMinScopeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r26.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", item_r26.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r26.text), " ");
} }
function OurWorklogComponent_mat_checkbox_42_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OurWorklogComponent_mat_checkbox_42_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); item_r29.completed = !item_r29.completed; return ctx_r30.onNormalScopeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r29.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", item_r29.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r29.text), " ");
} }
function OurWorklogComponent_mat_checkbox_47_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OurWorklogComponent_mat_checkbox_47_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); item_r32.completed = !item_r32.completed; return ctx_r33.onExtraScopeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r32.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", item_r32.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r32.text), " ");
} }
class OurWorklogComponent {
    constructor() {
        this.displayedColumns = ['feature', 'time'];
        this.team = _constants_team_members__WEBPACK_IMPORTED_MODULE_1__["teamMembersWorklog"];
        this.minScope = _constants_scopes__WEBPACK_IMPORTED_MODULE_2__["minScope"];
        this.normalScope = _constants_scopes__WEBPACK_IMPORTED_MODULE_2__["normalScope"];
        this.extraScope = _constants_scopes__WEBPACK_IMPORTED_MODULE_2__["extraScope"];
        this.minScopeTotal = this.minScope.reduce((acc, item) => acc + item.value, 0);
        this.normalScopeTotal = this.normalScope.reduce((acc, item) => acc + item.value, 0);
        this.extraScopeTotal = this.extraScope.reduce((acc, item) => acc + item.value, 0);
        this.totalScore = this.minScopeTotal + this.normalScopeTotal + this.extraScopeTotal;
    }
    ngOnInit() {
        this.onMinScopeChange();
        this.onNormalScopeChange();
        this.onExtraScopeChange();
    }
    onMinScopeChange() {
        this.minScopeActual = this.minScope
            .filter(item => item.completed)
            .reduce((acc, item) => acc + item.value, 0);
        this.countActualScore();
    }
    onNormalScopeChange() {
        this.normalScopeActual = this.normalScope
            .filter(item => item.completed)
            .reduce((acc, item) => acc + item.value, 0);
        this.countActualScore();
    }
    onExtraScopeChange() {
        this.extraScopeActual = this.extraScope
            .filter(item => item.completed)
            .reduce((acc, item) => acc + item.value, 0);
        this.countActualScore();
    }
    countActualScore() {
        this.actualScore = this.minScopeActual + this.normalScopeActual + this.extraScopeActual;
    }
}
OurWorklogComponent.ɵfac = function OurWorklogComponent_Factory(t) { return new (t || OurWorklogComponent)(); };
OurWorklogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurWorklogComponent, selectors: [["app-our-worklog"]], decls: 51, vars: 51, consts: [[1, "accordion-wrapper"], ["multi", "true"], [4, "ngFor", "ngForOf"], [1, "difficulties-wrapper"], [1, "difficulties-header"], [1, "difficulties"], [1, "author"], [1, "self-evaluation-container"], [1, "self-evaluation-header"], [1, "min-scope"], [1, "total"], [3, "checked", "change", 4, "ngFor", "ngForOf"], [1, "normal-scope"], [1, "extra-scope"], [1, "total-container"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "feature"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "time"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [3, "checked", "change"]], template: function OurWorklogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OurWorklogComponent_mat_expansion_panel_5_Template, 14, 6, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "cite", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "cite", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "cite", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, OurWorklogComponent_mat_checkbox_37_Template, 5, 5, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OurWorklogComponent_mat_checkbox_42_Template, 5, 5, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OurWorklogComponent_mat_checkbox_47_Template, 5, 5, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 25, "worklog.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 27, "worklog.worklog-difficulties"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 29, "worklog.difficulty1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 31, "worklog.difficulty1-author"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 33, "worklog.difficulty2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 35, "worklog.difficulty2-author"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 37, "worklog.difficulty3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 39, "worklog.difficulty3-author"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 41, "worklog.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 43, "min-scope.title"), ": ", ctx.minScopeActual, "/", ctx.minScopeTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.minScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 45, "normal-scope.title"), ": ", ctx.normalScopeActual, "/", ctx.normalScopeTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.normalScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 47, "extra-scope.title"), ": ", ctx.extraScopeActual, "/", ctx.extraScopeTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.extraScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 49, "worklog.total"), ": ", ctx.actualScore, " / ", ctx.totalScore, " ");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["h2[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: normal;\n  color: #3E3636;\n}\n\n.accordion-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 2rem auto;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: #D29F9F;\n}\n\nmat-panel-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #3E3636;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #F9E7D3;\n}\n\n.difficulties-wrapper[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  padding: 2rem;\n  background-color: #F9E7D3;\n}\n\n.difficulties-header[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  text-align: center;\n}\n\n.difficulties[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.author[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-bottom: 3rem;\n}\n\n.self-evaluation-container[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: 1rem auto;\n}\n\n.self-evaluation-header[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  font-weight: normal;\n  text-align: center;\n}\n\n.total[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-bottom: 1rem;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border-bottom: 5px solid #D29F9F;\n}\n\n.min-scope[_ngcontent-%COMP%], .normal-scope[_ngcontent-%COMP%], .extra-scope[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-bottom: 1rem;\n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.2rem;\n}\n\n.total-container[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2xvZy9jb21wb25lbnRzL291ci13b3JrbG9nL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcQ3VsdHVyYWxfUG9ydGFsXFxjdWx0dXJhbC1wb3J0YWwvc3JjXFxhcHBcXHdvcmtsb2dcXGNvbXBvbmVudHNcXG91ci13b3JrbG9nXFxvdXItd29ya2xvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd29ya2xvZy9jb21wb25lbnRzL291ci13b3JrbG9nL291ci13b3JrbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7QUNLRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDTUY7O0FESkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDUUY7O0FETkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDU0Y7O0FEUEE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNVRjs7QURSQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1dGOztBRFRBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FDWUY7O0FEVkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDY0Y7O0FEWkE7RUFDRSxpQkFBQTtBQ2VGIiwiZmlsZSI6InNyYy9hcHAvd29ya2xvZy9jb21wb25lbnRzL291ci13b3JrbG9nL291ci13b3JrbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiAjM0UzNjM2O1xyXG59XHJcbi5hY2NvcmRpb24td3JhcHBlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDJyZW0gYXV0bztcclxufVxyXG5cclxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyOUY5RjtcclxufVxyXG5tYXQtcGFuZWwtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiAjM0UzNjM2O1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RTdEMztcclxufVxyXG4uZGlmZmljdWx0aWVzLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlFN0QzO1xyXG59XHJcbi5kaWZmaWN1bHRpZXMtaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kaWZmaWN1bHRpZXMge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5hdXRob3Ige1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuLnNlbGYtZXZhbHVhdGlvbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuLnNlbGYtZXZhbHVhdGlvbi1oZWFkZXIge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRvdGFsIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRDI5RjlGO1xyXG59XHJcbi5taW4tc2NvcGUsIC5ub3JtYWwtc2NvcGUsIC5leHRyYS1zY29wZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxubWF0LWNoZWNrYm94e1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcclxufVxyXG4udG90YWwtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4iLCJoMiB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbi5hY2NvcmRpb24td3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyOUY5Rjtcbn1cblxubWF0LXBhbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUU3RDM7XG59XG5cbi5kaWZmaWN1bHRpZXMtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUU3RDM7XG59XG5cbi5kaWZmaWN1bHRpZXMtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlmZmljdWx0aWVzIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hdXRob3Ige1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnNlbGYtZXZhbHVhdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbn1cblxuLnNlbGYtZXZhbHVhdGlvbi1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvdGFsIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNEMjlGOUY7XG59XG5cbi5taW4tc2NvcGUsIC5ub3JtYWwtc2NvcGUsIC5leHRyYS1zY29wZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4udG90YWwtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurWorklogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-worklog',
                templateUrl: './our-worklog.component.html',
                styleUrls: ['./our-worklog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/worklog/constants/scopes.ts":
/*!*********************************************!*\
  !*** ./src/app/worklog/constants/scopes.ts ***!
  \*********************************************/
/*! exports provided: minScope, normalScope, extraScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minScope", function() { return minScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalScope", function() { return normalScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extraScope", function() { return extraScope; });
const minScope = [
    { value: 10, text: 'min-scope.item1', completed: true },
    { value: 10, text: 'min-scope.item2', completed: true },
    { value: 10, text: 'min-scope.item3', completed: true },
    { value: 20, text: 'min-scope.item4', completed: true }
];
const normalScope = [
    { value: 20, text: 'normal-scope.item1', completed: true },
    { value: 10, text: 'normal-scope.item2', completed: true },
    { value: 10, text: 'normal-scope.item3', completed: true },
    { value: 10, text: 'normal-scope.item4', completed: true },
    { value: 10, text: 'normal-scope.item5', completed: true },
    { value: 20, text: 'normal-scope.item6', completed: true },
    { value: 10, text: 'normal-scope.item7', completed: true },
    { value: 20, text: 'normal-scope.item8', completed: true },
    { value: 20, text: 'normal-scope.item9', completed: true },
    { value: 10, text: 'normal-scope.item10', completed: true }
];
const extraScope = [
    { value: 10, text: 'extra-scope.item1', completed: true },
    { value: 10, text: 'extra-scope.item2', completed: true },
    { value: 10, text: 'extra-scope.item3', completed: true },
    { value: 20, text: 'extra-scope.item4', completed: true },
    { value: 20, text: 'extra-scope.item5', completed: true },
    { value: 20, text: 'extra-scope.item6', completed: true }
];


/***/ }),

/***/ "./src/app/worklog/constants/team-members.ts":
/*!***************************************************!*\
  !*** ./src/app/worklog/constants/team-members.ts ***!
  \***************************************************/
/*! exports provided: teamMembersWorklog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamMembersWorklog", function() { return teamMembersWorklog; });
const dmitri = {
    name: 'dimlbc.name',
    features: [
        { feature: 'dimlbc.feature', time: 'dimlbc.time' },
        { feature: 'dimlbc.feature1', time: 'dimlbc.time1' }
    ]
};
const julia = {
    name: 'julia.name',
    features: [
        { feature: 'julia.feature', time: 'julia.time' },
        { feature: 'julia.feature1', time: 'julia.time1' }
    ]
};
const alexKlim = {
    name: 'alexKlim.name',
    features: [
        { feature: 'alexKlim.feature', time: 'alexKlim.time' },
        { feature: 'alexKlim.feature1', time: 'alexKlim.time1' },
        { feature: 'alexKlim.feature2', time: 'alexKlim.time2' },
        { feature: 'alexKlim.feature3', time: 'alexKlim.time3' },
        { feature: 'alexKlim.feature4', time: 'alexKlim.time4' }
    ]
};
const alex = {
    name: 'alex.name',
    features: [
        { feature: 'alex.feature', time: 'alex.time' },
        { feature: 'alex.feature1', time: 'alex.time1' }
    ]
};
const pavel = {
    name: 'pavel.name',
    features: [
        { feature: 'pavel.feature', time: 'pavel.time' },
        { feature: 'pavel.feature1', time: 'pavel.time1' }
    ]
};
const vladimir = {
    name: 'vladimir.name',
    features: [
        { feature: 'vladimir.feature', time: 'vladimir.time' },
        { feature: 'vladimir.feature1', time: 'vladimir.time1' }
    ]
};
const teamMembersWorklog = [dmitri, julia, alex, alexKlim, vladimir, pavel];


/***/ }),

/***/ "./src/app/worklog/worklog.module.ts":
/*!*******************************************!*\
  !*** ./src/app/worklog/worklog.module.ts ***!
  \*******************************************/
/*! exports provided: WorklogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklogModule", function() { return WorklogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/our-worklog/our-worklog.component */ "./src/app/worklog/components/our-worklog/our-worklog.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");








class WorklogModule {
}
WorklogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorklogModule });
WorklogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorklogModule_Factory(t) { return new (t || WorklogModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorklogModule, { declarations: [_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__["OurWorklogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]], exports: [_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__["OurWorklogComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorklogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__["OurWorklogComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]],
                exports: [_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__["OurWorklogComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    youtubeUrl: 'https://www.youtube.com/embed/',
    mapsUrl: 'https://www.google.com/maps/d/embed?'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/locales/architects-data.ts":
/*!****************************************!*\
  !*** ./src/locales/architects-data.ts ***!
  \****************************************/
/*! exports provided: ArchitectsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectsData", function() { return ArchitectsData; });
class ArchitectsData {
    constructor() {
        this.authors = [
            {
                id: '1',
                path: 'levin',
                name: 'name',
                date: 'date',
                img: 'assets/images/Levin.jpg',
                videoId: 'qoWJgqu47gA',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=1DMvXxw4BPZYozlqBwvqmgzWLMr6HpzH5&hl=en',
                searchKey: 'searchKey',
                timelineData: [
                    {
                        date: '1954-1960',
                        text: 'timeline1'
                    },
                    {
                        date: '1960',
                        text: 'timeline2'
                    },
                    {
                        date: '1960-1967',
                        text: 'timeline3'
                    },
                    {
                        date: '1968',
                        text: 'timeline4'
                    },
                    {
                        date: '1970',
                        text: 'timeline5'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '1969',
                        img: '/assets/works/Levin/Колас.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: '1972',
                        img: '/assets/works/Levin/Купала.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '1972',
                        img: '/assets/works/Levin/Метро.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 53.898331,
                        length: 27.560555,
                        date: '1984',
                        img: '/assets/works/Levin/Предместье.jpg'
                    },
                    {
                        title: 'worktitle5',
                        width: 53.898331,
                        length: 27.560555,
                        date: '1980—1986',
                        img: '/assets/works/Levin/Хатынь.jpg'
                    }
                ]
            },
            {
                id: '2',
                path: 'dzuzeppe',
                name: 'name',
                date: 'date',
                img: 'assets/images/Sakko.jpg',
                videoId: 'IRZfWzGChyo',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=10ZwynmgbM79zAAagBDpS4fxav_vpOQfO&hl=en',
                timelineData: [
                    {
                        date: '1768',
                        text: 'timeline1'
                    },
                    {
                        date: '1771',
                        text: 'timeline2'
                    },
                    {
                        date: '1771-1780',
                        text: 'timeline3'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/площадь.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/Святский.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/театр.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/Щорсы.jpg'
                    },
                    {
                        title: 'worktitle5',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/Ciążeń.jpg'
                    }
                ]
            },
            {
                id: '3',
                path: 'karako',
                name: 'name',
                date: 'date',
                img: 'assets/images/Karako.jpg',
                videoId: 'TkaLjjNj8Ls',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=1XdWwCcjN5n_7C0kFCxcq2G2r2VYV6fFO&hl=en',
                searchKey: 'searchKey',
                timelineData: [
                    {
                        date: '1966—1972',
                        text: 'timeline1'
                    },
                    {
                        date: '1972—1976',
                        text: 'timeline2'
                    },
                    {
                        date: '1976—1982',
                        text: 'timeline3'
                    },
                    {
                        date: '1982',
                        text: 'timeline4'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '1970',
                        img: '/assets/works/Karako/банк.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Karako/ЦМ.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '2004',
                        img: '/assets/works/Karako/Школа.jpg'
                    }
                ]
            },
            {
                id: '4',
                path: 'ananich',
                name: 'name',
                date: 'date',
                img: 'assets/images/Ananich.jpg',
                videoId: 'LiSW2jgILeQ',
                vita: 'vita',
                authorOfTheDay: 'true',
                lng: 'en',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=1vhu3Tx8WxYjPhjjqoz1_mbK6wuDt-yPn&hl=en',
                searchKey: 'searchKey',
                timelineData: [
                    {
                        date: '1978',
                        text: 'timeline1'
                    },
                    {
                        date: '1979-2009',
                        text: 'timeline2'
                    },
                    {
                        date: '2009',
                        text: 'timeline3'
                    },
                    {
                        date: '2015',
                        text: 'timeline4'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '2007',
                        img: '/assets/works/Ananich/беларусбанк.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: '2016',
                        img: '/assets/works/Ananich/посольство.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '2012',
                        img: '/assets/works/Ananich/бсб-банк.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 53.898331,
                        length: 27.560555,
                        date: '2007',
                        img: '/assets/works/Ananich/нацбанк.jpg'
                    }
                ]
            },
            {
                id: '5',
                path: 'langbard',
                name: 'name',
                date: 'date',
                img: 'assets/images/Langbard.jpg',
                videoId: 'dlQIlW3V-iU',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=1azzyT0kI_WJG5h08u9p0Kt-Nv_h_FO8s&hl=en',
                timelineData: [
                    {
                        date: '1907',
                        text: 'timeline1'
                    },
                    {
                        date: '1923',
                        text: 'timeline2'
                    },
                    {
                        date: '1929',
                        text: 'timeline3'
                    },
                    {
                        date: '1926 - 1927',
                        text: 'timeline4'
                    },
                    {
                        date: '1937',
                        text: 'timeline5'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '1930-1934',
                        img: '/assets/works/Langbard/ленинград.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: '1934-1939',
                        img: '/assets/works/Langbard/офицер.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '1935',
                        img: '/assets/works/Langbard/Правительство.jpg'
                    }
                ]
            },
            {
                id: '6',
                path: 'paolo',
                name: 'name',
                date: 'date',
                img: 'assets/images/Fontana.jpg',
                videoId: 'oRW-u95CTQQ',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                geovidgetLink: 'mid=1h1uJwA9rkRhJToIj-Wna3cup2YWiBSDE&hl=en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                timelineData: [
                    {
                        date: '1730',
                        text: 'timeline1'
                    },
                    {
                        date: '1730 - 1740',
                        text: 'timeline2'
                    },
                    {
                        date: '1745',
                        text: 'timeline3'
                    },
                    {
                        date: '1748',
                        text: 'timeline4'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '1754—1770',
                        img: '/assets/works/Fontana/Винницкий.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: '1758—1760',
                        img: '/assets/works/Fontana/сангушко.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '1764 - 1774',
                        img: '/assets/works/Fontana/Синагога.jpg'
                    }
                ]
            },
            {
                id: '7',
                path: 'shabunevsky',
                name: 'name',
                date: 'date',
                img: 'assets/images/Shabunevsky.jpg',
                videoId: 'a43rFmrY78c',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                geovidgetLink: 'mid=1ss2nwd8StdF6TlThZSXZU7yfEFYCTGKw&hl=en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                timelineData: [
                    {
                        date: '1892',
                        text: 'timeline1'
                    },
                    {
                        date: '1897',
                        text: 'timeline2'
                    },
                    {
                        date: '1903',
                        text: 'timeline3'
                    },
                    {
                        date: '1919',
                        text: 'timeline4'
                    },
                    {
                        date: '1924',
                        text: 'timeline5'
                    },
                    {
                        date: '1937',
                        text: 'timeline6'
                    },
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 52.4333,
                        length: 31.0037,
                        date: '1898',
                        img: '/assets/works/Shabunevsky/Гимназия.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 52.4304,
                        length: 31.0110,
                        date: '1901',
                        img: '/assets/works/Shabunevsky/Орловский.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 52.4269,
                        length: 31.0137,
                        date: '1910-1912',
                        img: '/assets/works/Shabunevsky/Виленский.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 52.4292,
                        length: 31.0062,
                        date: '1909',
                        img: '/assets/works/Shabunevsky/Доктор.jpg'
                    },
                    {
                        title: 'worktitle5',
                        width: 52.4155,
                        length: 31.0096,
                        date: '1915',
                        img: '/assets/works/Shabunevsky/Земская.jpg'
                    }
                ]
            },
            {
                id: '8',
                path: 'parusnikov',
                name: 'name',
                date: 'date',
                img: 'assets/images/Parusnikov.jpg',
                videoId: 'Kzdllifv0UE',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                geovidgetLink: 'mid=1JQjnp6_ZKpRCdDrjjUKIqybiqkSB6sFC&hl=en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                timelineData: [
                    {
                        date: '1913-1918',
                        text: 'timeline1'
                    },
                    {
                        date: '1924',
                        text: 'timeline2'
                    },
                    {
                        date: '1941-1944',
                        text: 'timeline3'
                    },
                    {
                        date: '1944-1948',
                        text: 'timeline4'
                    },
                    {
                        date: '1953',
                        text: 'timeline5'
                    },
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.8983,
                        length: 27.5543,
                        date: '1945—1947',
                        img: '/assets/works/Parusnikov/КГБ.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.9000,
                        length: 27.5588,
                        date: '1950',
                        img: '/assets/works/Parusnikov/Нацбанк.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.9066,
                        length: 27.5711,
                        date: '1954',
                        img: '/assets/works/Parusnikov/Мост.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 57.6325,
                        length: 39.8871,
                        date: '1960',
                        img: '/assets/works/Parusnikov/Дом.jpg'
                    }
                ]
            }
        ];
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Cultural_Portal\cultural-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map