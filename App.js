/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleUp() {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 1});
  }

  handleDown() {
    const {counter: ct} = this.state;
    this.setState({counter: ct - 1},
      () => {
        if ( (ct-1) < 0) {
          this.setState({counter: 0})
        }
      });
  }

  handleReset() {
    this.setState({counter: 0})
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { counter } = this.state;
    if (nextState.counter == counter) {
      return false;
    }
    return true;
  }

  render() {
    console.log('Rendering');

    const { counter } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Button action={this.handleDown}></Button>
        
          <View style={styles.button}>
            <Text style={styles.text}>{counter}</Text>
          </View>

          <Button label="+" action={this.handleUp}></Button>
        </View>

        <View style = {styles.subcontainer2}>
          <TouchableOpacity style = {styles.resetButton} onPress = {this.handleReset}>
            <Text style={styles.text}>
              Reset
            </Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20
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
  },
  resetButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 140,
    height: 60
  }
});

export default App;
