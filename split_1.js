"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Flex = _interopRequireDefault(require("./node_modules/mdx-deck/dist/Flex"));

var _Box = _interopRequireDefault(require("./node_modules/mdx-deck/dist/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Root = _styledComponents.default.div.withConfig({
  displayName: "Split__Root",
  componentId: "sc-12ot84a-0"
})([], {
  width: '100vw',
  height: '100vh'
});

var Split_1 = function Split_1(_ref) {
  var children = _ref.children;

  var _React$Children$toArr = _react.default.Children.toArray(children.props.children),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      a = _React$Children$toArr2.slice(0,5),
      rest = _React$Children$toArr2.slice(5);

  return _react.default.createElement(Root, null,
    _react.default.createElement(_StyledFlex,
      {
        _css: {
          alignItems: 'right',
          height: '100%',
          'padding-right': '100px',
          'padding-left': '50px'
          //'text-align': 'right',
          //'padding-left': '100px'

        }
      },
      _react.default.createElement(_Box.default,
        {
          width: 5 / 11
        },
        a),
      _react.default.createElement(_Box.default,
        {
          width: 1/ 11
        },
        ),
      _react.default.createElement(_Box.default,
        {
          width: 5 / 11
        },
        rest)
      ));
};

var _default = Split_1;
exports.default = _default;

var _StyledFlex = (0, _styledComponents.default)(_Flex.default)(_templateObject(), function (p) {
  return p._css;
});
