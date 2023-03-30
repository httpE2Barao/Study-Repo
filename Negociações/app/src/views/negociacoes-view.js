"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NegociacaoView = void 0;
var escape_js_1 = require("../decorators/escape.js");
var view_js_1 = require("./view.js");
var NegociacaoView = /** @class */ (function (_super) {
    __extends(NegociacaoView, _super);
    function NegociacaoView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NegociacaoView.prototype.template = function (model) {
        var _this = this;
        return "\n            <table class='table table-hover table-bordered'>\n                <thead>\n                    <tr>\n                        <th>DATA</th>\n                        <th>QUANTIDADE</th>\n                        <th>VALOR</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    " + model.lista().map(function (negociacao) {
            return "\n                            <tr>\n                                <td>" + _this.conversor(negociacao.data) + "</td>\n                                <td>" + negociacao.quantidade + "</td>\n                                <td>" + negociacao.valor + "</td>\n                            </tr>\n                            <script>alert('oi')</script>\n                        ";
        }).join('') + "\n                </tbody>\n            </table>\n        ";
    };
    NegociacaoView.prototype.conversor = function (data) {
        return new Intl.DateTimeFormat().format(data);
    };
    __decorate([
        escape_js_1.escape
    ], NegociacaoView.prototype, "template");
    return NegociacaoView;
}(view_js_1.View));
exports.NegociacaoView = NegociacaoView;
