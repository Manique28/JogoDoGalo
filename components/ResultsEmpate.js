import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ResultadoEmpate = () => {
  return (
    <View style={styles.container}>
      
      <View style = {styles.quadrado}>
        <Text style = {styles.texto}>Empataram</Text>
      </View>
    </View>
  )
}

export default ResultadoEmpate

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
        color:'red'



    }
})