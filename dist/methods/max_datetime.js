"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var MaxDateTime = (function (_super) {
    __extends(MaxDateTime, _super);
    function MaxDateTime() {
        _super.apply(this, arguments);
        this.methodName = 'maxdatetime';
    }
    return MaxDateTime;
}(method_expression_1.MethodExpression));
exports.MaxDateTime = MaxDateTime;
//# sourceMappingURL=max_datetime.js.map