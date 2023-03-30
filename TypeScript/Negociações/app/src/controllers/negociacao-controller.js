"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NegociacaoController = void 0;
var dom_injector_js_1 = require("../decorators/dom-injector.js");
var inspect_js_1 = require("../decorators/inspect.js");
var logar_tempo_de_execucao_js_1 = require("../decorators/logar-tempo-de-execucao.js");
var dias_da_semana_js_1 = require("../enums/dias-da-semana.js");
var negociacao_js_1 = require("../models/negociacao.js");
var negociacoes_js_1 = require("../models/negociacoes.js");
var negociacoes_services_js_1 = require("../services/negociacoes-services.js");
var imprimir_js_1 = require("../utils/imprimir.js");
var mensagem_view_js_1 = require("../views/mensagem-view.js");
var negociacoes_view_js_1 = require("../views/negociacoes-view.js");
// Tipando elementos
var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this.negociacoes = new negociacoes_js_1.Negociacoes();
        this.negociacoesView = new negociacoes_view_js_1.NegociacaoView('#negociacoesView');
        this.mensagemView = new mensagem_view_js_1.MensagemView('#mensagemView');
        this.negociacaoService = new negociacoes_services_js_1.NegociacoesServices();
        this.negociacoesView.update(this.negociacoes);
    }
    NegociacaoController.prototype.adiciona = function () {
        var negociacao = negociacao_js_1.Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('São feitas negociações apenas em dias úteis.');
            return;
        }
        ;
        this.negociacoes.adiciona(negociacao);
        imprimir_js_1.imprimir(negociacao, this.negociacoes);
        this.atualizaView();
        this.limparFormulario();
    };
    NegociacaoController.prototype.importarDados = function () {
        var _this = this;
        this.negociacaoService
            .obterNegociacaoDoDia()
            .then(function (negociacoesDeHoje) {
            return negociacoesDeHoje.filter(function (negociacoesDeHoje) {
                return !_this.negociacoes
                    .lista()
                    .some(function (negociacao) { return negociacao
                    .ehIgual(negociacoesDeHoje); });
            });
        })
            .then(function (negociacoesDeHoje) {
            for (var _i = 0, negociacoesDeHoje_1 = negociacoesDeHoje; _i < negociacoesDeHoje_1.length; _i++) {
                var negociacao = negociacoesDeHoje_1[_i];
                _this.negociacoes.adiciona(negociacao);
            }
            _this.negociacoesView.update(_this.negociacoes);
        });
    };
    NegociacaoController.prototype.ehDiaUtil = function (data) {
        return data.getDay() > dias_da_semana_js_1.DiasDaSemana.DOMINGO && data.getDay() < dias_da_semana_js_1.DiasDaSemana.SABADO;
    };
    NegociacaoController.prototype.limparFormulario = function () {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };
    NegociacaoController.prototype.atualizaView = function () {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    };
    __decorate([
        dom_injector_js_1.domInjector('#data')
    ], NegociacaoController.prototype, "inputData");
    __decorate([
        dom_injector_js_1.domInjector('#quantidade')
    ], NegociacaoController.prototype, "inputQuantidade");
    __decorate([
        dom_injector_js_1.domInjector('#valor')
    ], NegociacaoController.prototype, "inputValor");
    __decorate([
        inspect_js_1.inspect,
        logar_tempo_de_execucao_js_1.logarTempoDeExecucao(false)
    ], NegociacaoController.prototype, "adiciona");
    return NegociacaoController;
}());
exports.NegociacaoController = NegociacaoController;
