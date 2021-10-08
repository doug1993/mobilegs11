import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
//Aestrutura de react-native nao possuem valor semantico 
//View eh todo o tipo de secao do html como div aside section 
//Text sao todos os tipos de textos do html h1 h2 p span
//Todos os componentes o display flex por padrao 
export default function App(){
    return (
        <>
        <StatusBar barStyle='light-content' backgroundColor='#7159c1'  />
        <View style={styles.container}>
            <Text style={styles.title1}>
                    Hello Gostack
            </Text>
        </View>
        </>
    )}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#7159c1',
        alignItems:'center',
        justifyContent:'center'
    },
    title1:{
        justifyContent:'center',
        color: 'white',
        fontWeight:'bold',
        fontSize: 25
    }
})