import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {store} from '@/src/store/index'
import { Provider } from "react-redux";

interface CardProps {
    titulo: string,
    descricao: string,
    imagem: string,
    preco: string,
    onClick: () => void
}

export const Card = ({titulo, descricao, imagem, preco, onClick}: CardProps) => {

    return (
        <Provider store={store}>
            <TouchableOpacity style={styles.card} onPress={onClick}>
                <Image style={styles.imageCard} source={{ uri: imagem }}/>
                <Text style={styles.tituloCard}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.priceCard}>R$ {preco}</Text>
            </TouchableOpacity>
        </Provider>
        
    )
}

export const styles = StyleSheet.create({
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
        borderColor: 'gray',
        resizeMode: 'contain'
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
        fontSize: 10,
        color: 'gray'
    },
    priceCard: {
        width: '100%',
        height: '14%',
        paddingTop: 7,
        paddingLeft: 7,
        fontWeight: 'bold',
        fontSize: 16
    }
})