import React from "react";
import { Text, View, StyleSheet, } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from "../assets/styles";
import Button from "./Button";

class Barcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  setStatusPemission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({ status: status });
  };

  componentDidMount = () => {
    this.setStatusPemission();
  };

  renderWhenStatusIsNull = () => {
    return (
      <View style={styles.barcodeContainer}>
        <Text style={styles.text}>Cargando...</Text>
      </View>
    );
  };

  renderWhenStatusIsDenied = () => {
    return (
      <View style={styles.barcodeContainer}>
        <Text style={styles.text}>Permission is required</Text>
        <Button
          onPress={this.setStatusPemission}
          styleButton={styles.button}
          styleText={styles.text}
          text="Give permission"
        />
        <Button
          onPress={this.props.handleOpenScanner}
          styleButton={styles.backButton}
          styleText={styles.text}
          text="Back"
        />
      </View>
    );
  };

  renderWhenStatusIsGranted = () => {
    return (
      <View style={styles.barcodeContainer}>
        <BarCodeScanner
          onBarCodeScanned={
            this.props.barcodeScanned ? undefined : this.props.setStateBarcode
          }
          style={StyleSheet.absoluteFillObject}
        ></BarCodeScanner>
        <View style={styles.scope} />
        <Button
          onPress={this.props.handleScanAgain}
          styleButton={styles.button}
          styleText={styles.text}
          text="Scan again"
        />
        <Button
          onPress={this.props.handleOpenScanner}
          styleButton={styles.backButton}
          styleText={styles.text}
          text="Back"
        />
      </View>
    );
  };

  render() {
    const RENDER = {
      null: this.renderWhenStatusIsNull(),
      denied: this.renderWhenStatusIsDenied(),
    };
    return RENDER[this.state.status] || this.renderWhenStatusIsGranted();
  }
}

export default Barcode;
