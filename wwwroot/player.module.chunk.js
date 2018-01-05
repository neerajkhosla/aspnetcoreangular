webpackJsonp(["player.module"],{

/***/ "../../../../../src/app/player/player-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_component__ = __webpack_require__("../../../../../src/app/player/player.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__player_component__["a" /* PlayerComponent */],
        data: {
            title: 'Player'
        },
    }
];
var PlayerRoutingModule = (function () {
    function PlayerRoutingModule() {
    }
    PlayerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        })
    ], PlayerRoutingModule);
    return PlayerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Players</div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n</div>\r\n<!-- Player Starts -->\r\n<section id=\"players\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Video Player</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <vg-player>\r\n            <vg-overlay-play></vg-overlay-play>\r\n            <vg-buffering></vg-buffering>\r\n\r\n            <vg-scrub-bar>\r\n              <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r\n              <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n            </vg-scrub-bar>\r\n\r\n            <vg-controls>\r\n              <vg-play-pause></vg-play-pause>\r\n              <vg-playback-button></vg-playback-button>\r\n\r\n              <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n              <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\r\n\r\n              <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n              <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n              <vg-track-selector></vg-track-selector>\r\n              <vg-mute></vg-mute>\r\n              <vg-volume></vg-volume>\r\n\r\n              <vg-fullscreen></vg-fullscreen>\r\n            </vg-controls>\r\n\r\n            <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin>\r\n              <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\r\n              <source src=\"http://static.videogular.com/assets/videos/videogular.ogg\" type=\"video/ogg\">\r\n              <source src=\"http://static.videogular.com/assets/videos/videogular.webm\" type=\"video/webm\">\r\n\r\n              <track kind=\"subtitles\" label=\"English\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot.vtt\" srclang=\"en\" default>\r\n              <track kind=\"subtitles\" label=\"Español\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt\" srclang=\"es\">\r\n            </video>\r\n          </vg-player>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Audio Player</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <vg-player>\r\n            <audio [vgMedia]=\"media1\" #media1 id=\"singleAudio\" preload=\"auto\" controls style=\"width: 100%\">\r\n              <source src=\"http://static.videogular.com/assets/audios/videogular.mp3\" type=\"audio/mp3\">\r\n            </audio>\r\n          </vg-player>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Player Ends -->"

/***/ }),

/***/ "../../../../../src/app/player/player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerComponent = (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-player',
            template: __webpack_require__("../../../../../src/app/player/player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/player/player.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_overlay_play__ = __webpack_require__("../../../../videogular2/overlay-play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__ = __webpack_require__("../../../../videogular2/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_routing_module__ = __webpack_require__("../../../../../src/app/player/player-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_component__ = __webpack_require__("../../../../../src/app/player/player.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PlayerModule = (function () {
    function PlayerModule() {
    }
    PlayerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__player_routing_module__["a" /* PlayerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_3_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_4_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__["VgBufferingModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__player_component__["a" /* PlayerComponent */]
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ })

});
//# sourceMappingURL=player.module.chunk.js.map