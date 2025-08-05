import React, { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./loginStyle"
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

export default function Login() {

    // Dados de login
    const user = 'admin'
    const senha = '123'

    // Armazenar dados dos campos
    const [campoNome, setCampoNome] = useState('')
    const [campoSenha, setCampoSenha] = useState('')
    const [validaNome, setValidaNome] = useState(true)
    const [validaSenha, setValidaSenha] = useState(true)
    const [validaLogin, setValidaLogin] = useState(true)

    const validaCampos = () => {
        const nomeValido = campoNome.length > 0
        const senhaValida = campoSenha.length > 0

        setValidaNome(nomeValido)
        setValidaSenha(senhaValida)
        
        return nomeValido && senhaValida
    }
    
    const buttonClick = () => {

        if(validaCampos()){
            const checkLogin = campoNome === user && campoSenha === senha
            setValidaLogin(checkLogin)
            if (checkLogin){router.navigate('../Produtos')}
        } else {
            setValidaLogin(true)
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.tela1}>

                <Text style={styles.texto1}>Bem-vindo de volta!</Text>
                <Text style={styles.texto2}>Insira seus dados para entrar na sua conta.</Text>

            </View>

            <View style={styles.tela2}>

                {/* alerta de login ou senha incorreto! */}
                <Text style={[styles.textHidden, {marginLeft: '20%'},
                    validaLogin ? styles.textHidden:styles.textAlert]}>Username ou senha iválidos!</Text>

                {/* CAMPO DE NOME */}
                <View>
                    <Text>Username</Text>

                    <TextInput 
                        style={[styles.inText, validaNome ? styles.inText:styles.fieldEmpty]}
                        onChangeText={setCampoNome}
                    />

                    <Text style={[styles.textHidden, validaNome ? styles.textHidden:styles.textAlert]}>
                        <Ionicons name="alert-circle-outline" size={14} color="red" /> 
                        Campo obrigatório!
                    </Text>
                    
                </View>
                
                {/* CAMPO DE SENHA */}
                <View>
                    <Text>Senha</Text>

                    <TextInput
                        style={[styles.inText, validaSenha ? styles.inText:styles.fieldEmpty]}
                        onChangeText={setCampoSenha}
                    />

                    <Text style={[styles.textHidden, validaSenha ? styles.textHidden:styles.textAlert]}>
                        <Ionicons name="alert-circle-outline" size={14} color="red" />
                        Campo obrigatório!
                    </Text>
                    
                </View>

                {/* Botão ENTRAR */}
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
