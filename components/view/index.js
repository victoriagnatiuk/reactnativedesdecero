import React from 'react';
import {View, StyleSheet} from 'react-native';

function Viewer() {
    return <View style = {styles.container}/>;
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        backgroundColor: 'red'
    },
});

export default Viewer;