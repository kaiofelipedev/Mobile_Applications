import React from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./loginStyle"

export default function Login() {

    const [userName, setUserName] = React.useState('')
    const [checkName, setCheckName] = React.useState(true)
    const [userPassword, setUserPassword] = React.useState('')
    const [checkPassword, setCheckPassword] = React.useState(true)

    const buttonClick = () => {
        setCheckName(userName.length < 1 ? false:true)
        setCheckPassword(userPassword.length < 1 ? false:true)
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

                    <TextInput 
                        style={[styles.inText,!checkName ? styles.fieldEmpty : styles.inText]}
                        onChangeText={setUserName}
                    />

                    <Text
                        style={[styles.textHidden,
                        !checkName ? styles.textAlert : styles.textHidden]}>Campo obrigatório!
                    </Text>
                </View>

                <View>
                    <Text>Senha</Text>

                    <TextInput
                        style={[styles.inText, !checkPassword ? styles.fieldEmpty : styles.inText]}
                        onChangeText={setUserPassword}
                    />

                    <Text
                        style={[styles.textHidden,
                        !checkPassword ? styles.textAlert : styles.textHidden]}>Campo obrigatório!
                    </Text>
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={buttonClick}
                >

                    <Text style={styles.textButton}>Entrar</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}