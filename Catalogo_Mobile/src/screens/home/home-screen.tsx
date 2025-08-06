import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from '@/src/screens/home/style'


export default function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.containerBottons}>
                <TouchableOpacity style={styles.buttons}>
                <Text>Produtos Masculinos</Text>
                </TouchableOpacity>

                {/* Botão feminino */}
                <TouchableOpacity style={styles.buttons}>
                    <Text>Produtos Femininos</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}