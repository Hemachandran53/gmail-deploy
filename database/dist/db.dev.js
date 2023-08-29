"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var USERNAME = process.env.DB_USERNAME;
var PASSWORD = process.env.DB_PASSWORD;

var DBConnection = function DBConnection() {
  var DB_URI = "mongodb://".concat(USERNAME, ":").concat(PASSWORD, "@cluster0.hglz8yy.mongodb.net/?retryWrites=true&w=majority");

  try {
    _mongoose["default"].connect(DB_URI, {
      useNewUrlParser: true
    });

    _mongoose["default"].set('strictQuery', false);

    console.log('Database connected sucessfully');
  } catch (error) {
    console.log('Error while connecting with the database ', error.message);
  }
};

var _default = DBConnection;
exports["default"] = _default;
//# sourceMappingURL=db.dev.js.map
