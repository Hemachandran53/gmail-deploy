"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _route = _interopRequireDefault(require("./routes/route.js"));

var _db = _interopRequireDefault(require("./database/db.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _dirname = _path["default"].resolve();

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use('/', _route["default"]);
app.use(_express["default"]["static"](_path["default"].join(_dirname, "./client/built")));
app.get('*', function (_, res) {
  res.sendFile(_path["default"].join(_dirname, "./client/built/index.html"), function (err) {
    res.status(500).send(err);
  });
});
var PORT = process.env.PORT || 8000; //DBConnection();
//app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

var server = function server() {
  (0, _db["default"])();
  app.listen(PORT, function () {
    console.log('listening to port:', PORT);
  });
};

server();
//# sourceMappingURL=index.dev.js.map
