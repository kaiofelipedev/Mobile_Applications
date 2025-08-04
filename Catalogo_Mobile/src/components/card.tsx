import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const Card = () => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image style={styles.imageCard}/>
            <Text style={styles.tituloCard}>TÍTULO</Text>
            <Text style={styles.descricao}>DESCRIÇÃO DO PRODUTO</Text>
            <Text style={styles.priceCard}>PRICE</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '42%',
        height: 220,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        borderRadius: 10
    },
    imageCard: {
        width: '100%',
        height: '40%',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    tituloCard: {
        width: '100%',
        height: 30,
        padding: 5,
        fontWeight: 'bold'
    },
    descricao: {
        width: '100%',
        height: 70,
        padding: 8,
        fontSize: 12,
        color: 'gray'
    },
    priceCard: {
        width: '100%',
        height: '14%',
        paddingTop: 7,
        paddingLeft: 7,
        fontWeight: 'bold'
    }
})