'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactToastify = require('react-toastify');

var _AppRouter = require('./routers/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

require('react-toastify/dist/ReactToastify.css');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

require('normalize.css/normalize.css');

require('./styles/styles.scss');

require('core-js/stable/map');

require('core-js/stable/set');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();
// provider makes the store available everywhere in the application
var App = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_AppRouter2.default, null),
  _react2.default.createElement(_reactToastify.ToastContainer, { autoClose: 4000, pauseOnFocusLoss: false })
);

_reactDom2.default.render(App, document.getElementById('app'));
