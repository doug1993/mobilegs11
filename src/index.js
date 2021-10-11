import React ,{useEffect,useState} from 'react'
import {View,SafeAreaView, Text, StyleSheet, StatusBar, FlatList,TouchableOpacity} from 'react-native'
import api from './services/api'
//Aestrutura de react-native nao possuem valor semantico 
//View eh todo o tipo de secao do html como div aside section 
//Text sao todos os tipos de textos do html h1 h2 p span
//Todos os componentes o display flex por padrao 
export default function App(){
    const [projects,setProjects] =useState([])

    useEffect(()=>{
        api.get('projects').then(response=>{
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject(){
            // setProjects([...projects,`Novo Projeto ${Date.now()}`])
              const response = await api.post('projects',{
                title: `New Projeto ${Date.now()}`,
                owner: 'DEGERA'
            })
            const newProject = response.data

        setProjects = ([...projects, newProject])
    }

   return (
        <>
        <StatusBar barStyle='light-content' backgroundColor='#7159c1'  />

        <SafeAreaView style={styles.container}>
        <FlatList
            style={styles.container}
            data={projects}
            keyExtractor={project => project.id}
            renderItem={({item:project})=> (
            <Text style={styles.project}>{project.title}</Text>
            )
        }
        />

        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleAddProject}  >
            <Text style={styles.butText}>  Add Project  </Text>
        </TouchableOpacity>
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
    },
    button:{
        backgroundColor: '#FFF',
        margin: 48,
        height: 48,
        borderRadius: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
    butText: {
        color: 'purple',
        fontSize: 24,
        fontFamily: 'Segoe UI',
        fontWeight: 'bold'
    }
    
})