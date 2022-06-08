/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ActionButton from './components/actionButton';
import Button from './components/button';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handlePlusTen = this.handlePlusTen.bind(this);
  }

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 });
  }

  handleDown() {
    const { counter: ct } = this.state;
    if ((ct - 1) >= 0) {
      this.setState({ counter: ct - 1 });
    }
  }

  handleReset() {
    this.setState({ counter: 0 });
  }

  handlePlusTen() {
    const plusNumber = 10;
    const { counter } = this.state;
    this.setState({counter: counter + plusNumber});
  }

  render() {
    console.log('Rendering');

    const { counter } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Button label='-' action={this.handleDown}></Button>

          <View style={styles.button}>
            <Text style={styles.text}>{counter}</Text>
          </View>

          <Button label="+" action={this.handleUp}></Button>
        </View>

        <View style={styles.subcontainer2}>
          <ActionButton
            reset={this.handleReset}
            plus={this.handlePlusTen}
          ></ActionButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#182C61'
  },
  subcontainer: {
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  subcontainer2: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    marginTop: 20,
    flexDirection: 'row'
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2C3A47',
    alignItems: 'center'
  }
});

export default App;
