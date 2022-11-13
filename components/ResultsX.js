import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ResultadoX = () => {
  return (
    <View style={styles.container}>
      
      <View style = {styles.quadrado}>
        <Text style = {styles.texto}>X - Venceu</Text>
      </View>
    </View>
  )
}

export default ResultadoX

const styles = StyleSheet.create({

    container:{
        height:130,
        width:330,
        alignSelf:'center',
        marginVertical:20,
        justifyContent:'center',
    },
    
    texto:{

        fontSize:50,
        color:'black'


    }
})