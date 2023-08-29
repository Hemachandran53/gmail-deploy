"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EmailSchema = _mongoose["default"].Schema({
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  subject: String,
  body: String,
  date: {
    type: Date,
    required: true
  },
  image: String,
  name: {
    type: String,
    required: true
  },
  starred: {
    type: Boolean,
    required: true,
    "default": false
  },
  bin: {
    type: Boolean,
    required: true,
    "default": false
  },
  type: {
    type: String,
    required: true
  }
});

var email = _mongoose["default"].model('emails', EmailSchema);

var _default = email;
exports["default"] = _default;
//# sourceMappingURL=email.dev.js.map
