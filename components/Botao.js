import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Botao = ({onpress, texto}) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onpress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  )
}

export default Botao

const styles = StyleSheet.create({

    botao:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        width:120,
        alignSelf:'center',
        borderColor:'black',
        borderWidth:4,
        borderRadius:40,
        marginBottom:20,
        marginHorizontal: 5,
    },

    texto:{
        color:'white',
        fontSize:25
    }
})
