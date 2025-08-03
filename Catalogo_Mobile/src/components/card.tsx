import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Card = () => {
    return (
        <TouchableOpacity style={styles.card}>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '42%',
        height: 220,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10
    }
})