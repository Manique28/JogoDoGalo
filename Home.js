import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, Button, ScrollView, View, ImageBackground} from 'react-native';
import Botao from './components/Botao';



const Home = () => {
    const nav = useNavigation();


  
  return ( 

      <View style={styles.container}>
        

         <Botao texto='Jogar' onpress={() => {
           nav.navigate("Play");
        }}></Botao>



          <Botao texto='Historico' onpress={() => {
           nav.navigate("Results");
        }}></Botao>
      </View>
  );
};

const styles = StyleSheet.create({

  container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'

  },

  info:{

    fontSize:100,
    color:'black',
    position:'absolute',
    right:20,
    bottom:20,
  },
  texto:{
    fontSize:100,
    color:'black',
    position:'absolute',
    top:100,
    fontWeight:'bold',
  },

  imagem:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  }




})



  export default Home;