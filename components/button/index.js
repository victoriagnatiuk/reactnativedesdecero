import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import propTypes from 'prop-types';

function Button(props) {
    const { label, action } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

Button.defaultProps = {
    label: "?"
}

Button.propTypes = {
    label: propTypes.string,
    action: propTypes.func.isRequired
}

const styles = StyleSheet.create({
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

export default Button;