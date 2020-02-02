"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    // 22/12/2000
    var dateParts = dateString
        .split('/')
        .map(function (date) {
        return Number(date);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
