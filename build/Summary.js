"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var HtmlReports_1 = require("./Reports/HtmlReports");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAndReports = function (team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReports_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
