"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setAttributes;
var _keys = _interopRequireDefault(require("lodash/keys"));
var _inflection = require("inflection");
function setAttributes() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let {
    model,
    modelJson
  } = options;
  (0, _keys.default)(model.constructor.attributes).forEach(attributeName => {
    model[attributeName] = modelJson[attributeName] ? modelJson[attributeName] : modelJson[(0, _inflection.underscore)(attributeName)];
  });
}
//# sourceMappingURL=set_attributes.js.map