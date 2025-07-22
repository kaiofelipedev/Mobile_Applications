import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>

            <View style={styles.tela1}>

                <Text style={styles.texto1}>Bem-vindo de volta!</Text>
                <Text style={styles.texto2}>Insira seus dados para entrar na sua conta.</Text>

            </View>

            <View style={styles.tela2}>

                <Text>Username</Text>
                <TextInput style={styles.inText}/>

                <Text>Senha</Text>
                <TextInput style={styles.inText}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tela1: {
        backgroundColor: '#2567e8',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tela2:{
        width: '80%',
        height: 270,
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 16,
        position: 'absolute',
        backgroundColor: '#fff',
        top: '35%',
        left: '10%',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
        paddingTop: 40
    },
    texto1: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    texto2: {
        color: '#fff',
        fontSize: 14,
        marginTop: 10
    },
    inText: {
        width: '90%',
        height: 30,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        marginTop: 6
    }
})