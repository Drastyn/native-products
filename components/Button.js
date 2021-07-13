import React from "react";
import { Text, TouchableOpacity } from "react-native";

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={this.props.styleButton}
      >
        <Text style={this.props.styleText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
