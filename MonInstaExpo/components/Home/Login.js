// Components/Search.js
import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'

export default class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Image source={"require('../../assets/icon.png')"}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2ecc71"
    }
});

