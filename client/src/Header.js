import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { styles } from "./Styles";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style= {styles.title}>
                Wassup cool guy
            </Text>
        </View>
    )
}

