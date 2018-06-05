function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Layer from '../Layer/Layer';
import Button from '../Button/Button';
import Grommet from '../Grommet/Grommet';

var CenterLayer = function (_Component) {
  _inherits(CenterLayer, _Component);

  function CenterLayer() {
    var _temp, _this, _ret;

    _classCallCheck(this, CenterLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onOpen = function () {
      return _this.setState({ open: true });
    }, _this.onClose = function () {
      return _this.setState({ open: undefined });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CenterLayer.prototype.render = function render() {
    var open = this.state.open;

    return React.createElement(
      Grommet,
      null,
      React.createElement(Button, { label: 'Open', onClick: this.onOpen, primary: true }),
      open ? React.createElement(
        Layer,
        {
          position: 'center',
          modal: true,
          onClickOutside: this.onClose,
          onEsc: this.onClose
        },
        React.createElement(Button, { label: 'Close', onClick: this.onClose })
      ) : null
    );
  };

  return CenterLayer;
}(Component);

storiesOf('Layer', module).add('Center Layer', function () {
  return React.createElement(CenterLayer, null);
});