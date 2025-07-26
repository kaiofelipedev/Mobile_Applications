import React from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./loginStyle"

export default function Login() {

    const [userName, setUserName] = React.useState('')

    const buttonClick = () => {
        if (userName.length < 1) {
            alert('Campo de usuário vazio!')
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.tela1}>

                <Text style={styles.texto1}>Bem-vindo de volta!</Text>
                <Text style={styles.texto2}>Insira seus dados para entrar na sua conta.</Text>

            </View>

            <View style={styles.tela2}>

                <View>
                    <Text>Username</Text>
                    <TextInput style={styles.inText} onChangeText={setUserName}/>
                </View>

                <View>
                    <Text>Senha</Text>
                    <TextInput style={styles.inText}/>
                </View>

                <TouchableOpacity style={styles.button} onPress={buttonClick}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}