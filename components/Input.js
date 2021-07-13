import React from "react";
import { TextInput } from "react-native";

class TextInputs extends React.Component {
  render() {
    return (
      <TextInput
        multiline={false || this.props.multiline}
        placeholder={this.props.placeholder}
        value={this.props.value}
        style={this.props.style}
        onChangeText={(value) => this.props.onChangeText(value)}
      />
    );
  }
}

export default TextInputs;
