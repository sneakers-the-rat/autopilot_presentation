"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("node_modules/mdx-deck/dist/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blue = '#0af';

var themeColors = {
    primary: "#f5f5f5",
    secondary: "#252523",
    tertiary: "#f26483",
    quaternary: "#4cb69f"
}

var _default = _objectSpread({}, _base.default, {
  font: '"Anonymous Pro", system-ui, sans-serif',
  colors: {
    text: '#fff',
    background: themeColors.secondary,
    blue: blue,
    link: blue,
    pre: blue,
    preBackground: '#000',
    code: blue
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
    //fontSize: "6em",
    fontFamily: "Staatliches"
  },
  h1:{
    fontSize: "6em",
    color: themeColors.quaternary,
    'line-height':'1.0',
    'padding-top': '10px'
  },
  h2:{
    color: themeColors.primary,
    'padding-bottom': '0px',
    fontWeight:10,
    'line-height': '1.1'
  },
  quote: {
    fontWeight: 600
  },
  css: {
    '.contain':{'position':'relative',
                'top': 0,
                'left': 0},
    '.im1':{'position':'relative',
                'top': 0,
                'left': 0},
    '.im2':{'position':'absolute',
                'top': 0,
                'left': 0},
    'li': {
    'color': themeColors.quaternary,
    'line-height': '1.0'
    },
    'li>span': {
    'color': themeColors.primary
    },
    '.red': {
      'color': themeColors.tertiary
    },
    '.blue': {
      'color': themeColors.quaternary
    },
    '.invis': {
      'visibility': 'hidden'
    },
    '.right': {
      'text-align': 'right'
    },
    '.larger':{
      fontSize: "2em",
      'line-height': '1.5'
    },
    '.floatleft':{
      'float':'left',
    },
    '.floatright':{
      'float':'right'
    },
    '.floatcenter':{
      'clear':'none',
      'text-align':'center'
    }

  },
  transitionDuration: '0s'
});

exports.default = _default;
