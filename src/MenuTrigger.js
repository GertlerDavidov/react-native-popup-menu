import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import { debug } from './logger.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MenuTrigger extends Component {

  _onPress() {
    debug('trigger onPress');
    this.props.onPress && this.props.onPress();
    this.context.menuActions.openMenu(this.props.menuName);
  }

  render() {
    const { disabled, onRef, text, children, style, image, customStyles, ...other } = this.props;
    const onPress = () => !disabled && this._onPress();

    return (
      <View ref={onRef} collapsable={false}>
        <TouchableHighlight onPress={onPress} style={[customStyles.triggerWrapper, style]}
          {...defaultTouchableStyles} {...customStyles.triggerTouchable}>
          <View {...other}  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Icon name="expand-more" size={16} color={'#ffffff'} style={{marginRight:6,}} />
            {image ? children[1] : null}
            {text ? <Text style={customStyles.triggerText}>{text}</Text> : children[0]}
          </View>
        </TouchableHighlight>
      </View>
    );
  }

}

MenuTrigger.propTypes = {
  disabled: React.PropTypes.bool,
  text: React.PropTypes.string,
  image: React.PropTypes.bool,
  onPress: React.PropTypes.func,
  customStyles: React.PropTypes.object,
};

MenuTrigger.defaultProps = {
  disabled: false,
  customStyles: {},
};

MenuTrigger.contextTypes = {
  menuActions: React.PropTypes.object,
};

const defaultTouchableStyles = {
  underlayColor: 'rgba(0, 0, 0, 0.1)',
};

export default MenuTrigger;
