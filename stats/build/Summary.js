"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTargert) {
        this.analyzer = analyzer;
        this.outputTargert = outputTargert;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTargert.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
