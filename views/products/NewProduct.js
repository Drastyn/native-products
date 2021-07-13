import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import ProductsService from "../../services/ProductsService";
import styles from "../../assets/styles";
import Barcode from "../../components/Barcode";
import Input from "../../components/Input";
import Button from "../../components/Button";

const INITIAL_STATE = {
  openScanner: false,
  barcodeScanned: false,
  headers: {},
  product: {},
  title: "",
  price: "",
  description: "",
  barcode: "",
  status: "",
};

class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount = () => {
    this.setStateHeaders();
  };

  setStateHeaders = () => {
    this.setState({
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
  };

  setStateTitle = (title) => {
    this.setState({ title });
  };

  setStateDescription = (description) => {
    this.setState({ description });
  };

  setStatePrice = (price) => {
    this.setState({ price });
  };

  handleScanAgain = () => {
    this.setState({ barcodeScanned: false });
  };

  setStateProduct = () => {
    this.setState({
      product: {
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        token: this.state.barcode,
      },
    });
  };

  setStateBarcode = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.setState({ barcodeScanned: true, barcode: data });
  };

  handleOpenScanner = () => {
    this.setState({
      barcodeScanned: false,
      openScanner: !this.state.openScanner,
    });
  };

  handleSendProduct = async() => {
    await this.setStateProduct();
    ProductsService.post(this.state.product, this.state.headers)
      .then(() => this.setState(INITIAL_STATE))
      .then(() => this.setState({ status: "Created!" }))
      .catch((error) => console.log(error));
  };

  render() {
    if (this.state.openScanner) {
      return (
        <Barcode
          barcodeScanned={this.state.barcodeScanned}
          handleScanAgain={this.handleScanAgain}
          setStateBarcode={this.setStateBarcode}
          handleOpenScanner={this.handleOpenScanner}
        />
      );
    }
    return (
      <SafeAreaView style={[styles.container]}>
        <ScrollView>
          <View style={[styles.content]}>
            <Text style={[styles.text, styles.title]}>New Product</Text>
            <Input
              placeholder="Name"
              value={this.state.title}
              style={styles.input}
              onChangeText={this.setStateTitle}
            />
            <Input
              placeholder="Price"
              value={this.state.price}
              style={styles.input}
              onChangeText={this.setStatePrice}
            />
            <Input
              multiline={true}
              placeholder="Description"
              value={this.state.description}
              style={[styles.input, styles.textArea]}
              onChangeText={this.setStateDescription}
            />
            <Text style={styles.text}>{this.state.barcode}</Text>
            <Button
              onPress={this.handleOpenScanner}
              styleButton={styles.button}
              styleText={styles.text}
              text="Scan!"
            />
            <Button
              onPress={this.handleSendProduct}
              styleButton={styles.button}
              styleText={styles.text}
              text="Send"
            />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default NewProduct;
