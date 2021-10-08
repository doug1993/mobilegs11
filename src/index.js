import React ,{useEffect,useState} from 'react'
import {View,SafeAreaView, Text, StyleSheet, StatusBar, FlatList} from 'react-native'
import api from './services/api'
//Aestrutura de react-native nao possuem valor semantico 
//View eh todo o tipo de secao do html como div aside section 
//Text sao todos os tipos de textos do html h1 h2 p span
//Todos os componentes o display flex por padrao 
export default function App(){
    const [projects,setProjects] =useState([])

    useEffect(()=>{
        api.get('projects').then(response=>{
            console.log(response.data)
            setProjects(response.data)
        })
    }, [])

   return (
        <>
        <StatusBar barStyle='light-content' backgroundColor='#7159c1'  />

        <SafeAreaView style={styles.container}>
        <FlatList
            
            data={projects}
            keyExtractor={project => projects.id}
            renderItem={({item:project})=> (
            <Text style={styles.project}key={project.id}>{project.title}</Text>
            )
        }
        />
        </SafeAreaView>

        {/*
        <View style={styles.container}>
            {projects.map(project =><Text style={styles.project}key={project.id}>{project.title}</Text>)}
        </View>*/}
        </>
    )}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#7159c1',
        paddingTop: 24

        
    },
    project:{
        justifyContent:'center',
        color: 'white',
        fontWeight:'bold',
        fontSize: 50,
        marginBottom: 60,
    }
})