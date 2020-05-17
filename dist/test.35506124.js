// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".pikachu * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.pikachu *::before,\n.pikachu *::after {\n  box-sizing: border-box;\n}\n.pikachuWrapper{\n  width: 100vw;\n  height: 100vh;\n  background: #ffe600;\n}\n.pikachu {\n  position: absolute;\n  width: 420px;\n  height: 235px;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.nose {\n  border: 11px solid black;\n  border-top-width: 9px;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 50%;\n  margin-left: -11px;\n  margin-top: 38px;\n  box-shadow: 0 -1px 0 black;\n}\n.nose::before {\n  content: \"\";\n  display: block;\n  width: 22px;\n  height: 5px;\n  border: 1px solid black;\n  background: #000000;\n  position: absolute;\n  top: -14px;\n  left: -11px;\n  border-top-left-radius: 11px 5px;\n  border-top-right-radius: 11px 5px;\n}\n.nose:hover {\n  animation-name: swing;\n  animation-duration: 0.3s;\n  animation-iteration-count: infinite;\n}\n@keyframes swing {\n  from {\n    transform: rotate(0deg);\n  }\n  33%{\n    transform: rotate(-5deg);\n  }\n  67%{\n    transform: rotate(5deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n.eye {\n  border: 3px solid #000000;\n  border-radius: 100%;\n  width: 63px;\n  height: 63px;\n  position: absolute;\n  left: 50%;\n  margin-left: -31px;\n  background: #2e2e2e;\n}\n.eye.left {\n  transform: translateX(-119px);\n}\n.eye.left::before {\n  content: \"\";\n  display: block;\n  width: 31px;\n  height: 31px;\n  background: white;\n  border: 3px solid black;\n  border-radius: 100%;\n  margin-top: -2px;\n  margin-left: 7px;\n}\n.eye.right {\n  transform: translateX(118px);\n}\n.eye.right::before {\n  content: \"\";\n  display: block;\n  width: 31px;\n  height: 31px;\n  background: white;\n  border: 3px solid black;\n  border-radius: 100%;\n  margin-top: -2px;\n  margin-left: 7px;\n}\n.mouth {\n  width: 228px;\n  height: 180px;\n  position: absolute;\n  top: 65px;\n  left: 50%;\n  margin-left: -114px;\n  overflow: hidden;\n}\n.mouth::before,\n.mouth::after{\n  content: \"\";\n  display: block;\n  box-sizing: content-box;\n  border: 3px solid black;\n  width: 80px;\n  height: 25px;\n  background: #ffe600;\n  border-top: none;\n}\n.mouth::before {\n  border-right: none;\n  border-bottom-left-radius: 60px 30px;\n  transform: rotate(-25deg);\n  position: absolute;\n  left: 30px;\n  top: -5px;\n  z-index: 1;\n  box-shadow: 0 -10px 0 #ffe600, 5px -3px 0 #ffe600;\n}\n.mouth::after {\n  border-left: none;\n  border-bottom-right-radius: 60px 30px;\n  transform: rotate(25deg);\n  position: absolute;\n  right: 30px;\n  top: -5px;\n  box-shadow: 0 -10px 0 #ffe600, -5px -3px 0 #ffe600;\n}\n.mouth > div {\n  position: absolute;\n  background: #ff485f;\n  border: 4px solid black;\n  width: 236px;\n  height: 808px;\n  left: 50%;\n  margin-left: -118px;\n  border-bottom-left-radius: 118px 800px;\n  border-bottom-right-radius: 118px 800px;\n  margin-top: -637px;\n  overflow: hidden;\n}\n.mouth > div::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 35px;\n  left: 50%;\n  margin-left: -65px;\n  width: 130px;\n  height: 100px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  box-shadow: 0 -70px 0 #9b000a;\n}\n.face {\n  border: 3px solid black;\n  width: 88px;\n  height: 88px;\n  border-radius: 100%;\n  background: #f00;\n  position: absolute;\n  top: 110px;\n}\n.face.right {\n  right: 0;\n}\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Player = {
  n: 1,
  step: 100,
  clock: undefined,
  ui: {
    code: document.querySelector('#code'),
    css: document.querySelector('#css')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnFast': 'fast',
    '#btnNormal': 'normal',
    '#btnSlow': 'slow'
  },
  init: function init() {
    Player.play();
    Player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in Player.events) {
      if (Player.events.hasOwnProperty(key) === true) {
        var value = Player.events[key];
        document.querySelector(key).onclick = Player[value];
      }
    }
  },
  run: function run() {
    if (Player.n > _css.default.length) {
      Player.pause();
      return;
    }

    Player.ui.code.innerText = _css.default.substr(0, Player.n);
    Player.ui.css.innerText = _css.default.substr(0, Player.n);
    Player.ui.code.scrollTop = Player.ui.code.scrollHeight;
    Player.n += 1;
  },
  play: function play() {
    Player.pause();
    Player.clock = setInterval(Player.run, Player.step);
  },
  pause: function pause() {
    clearInterval(Player.clock);
  },
  fast: function fast() {
    Player.pause();
    Player.step = 10;
    Player.play();
  },
  normal: function normal() {
    Player.pause();
    Player.step = 100;
    Player.play();
  },
  slow: function slow() {
    Player.pause();
    Player.step = 300;
    Player.play();
  }
};
Player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.35506124.js.map