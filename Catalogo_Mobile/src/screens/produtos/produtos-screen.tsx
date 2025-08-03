import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Card } from '@/src/components/card'

export const ProdutosScreen = () => {
    return (
        // Tela
        <View style={styles.tela}>

            {/* Container de botos das abas */}
            <View style={styles.containerBottons}>

                {/* Botão masculino */}
                <TouchableOpacity style={styles.buttons}>
                    <Text>Produtos Masculinos</Text>
                </TouchableOpacity>

                {/* Botão feminino */}
                <TouchableOpacity style={styles.buttons}>
                    <Text>Produtos Femininos</Text>
                </TouchableOpacity>

            </View>

            {/* Lista de produtos */}
            <View style={styles.listaProdutos}>

                {/* Card de produto */}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </View>

        </View>
    )
}