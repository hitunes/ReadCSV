"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// enum
var MatchResult;
(function (MatchResult) {
    MatchResult["homeWin"] = "H";
    MatchResult["awayWin"] = "A";
    MatchResult["draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manUtdWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin ||
        match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
        manUtdWins++;
    }
}
console.log(manUtdWins);
