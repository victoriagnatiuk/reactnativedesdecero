import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import propTypes from 'prop-types';
import { Fragment } from 'react/cjs/react.production.min';

class ActionButton extends Component {
    render() {
        const { reset, plus } = this.props;

        return (
            <Fragment>
                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={reset}
                >
                    <Text style={styles.text}>
                        Reset
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={plus}
                >
                    <Text style={styles.text}>
                        +10
                    </Text>
                </TouchableOpacity>
            </Fragment>
        );
    }
}

ActionButton.propTypes = {
    reset: propTypes.func,
    plus: propTypes.func
}

const styles = StyleSheet.create({
    resetButton: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: 140,
        height: 60
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#2C3A47',
        alignItems: 'center'
    }
});
export default ActionButton;
