import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions } from 'react-native'
import historico from './components/historico';
import ResultsEmpate from './components/ResultsEmpate';
import ResultsO from './components/ResultsO';
import ResultsX from './components/ResultsX';

const windowWidth = Dimensions.get('window').width;
const JogoGalo = () => {
  const [player_ativo, setPlayer_ativo] = useState('X')
  const [marcador, setMarcador] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const marcaPosicao = (posicao) => {
    if(!marcador[posicao]){
      let pos = [...marcador]
      pos[posicao] = player_ativo
      setMarcador(pos)
      if(player_ativo === 'X'){  
        setPlayer_ativo('O')
      }else{
        setPlayer_ativo('X')
      }
    }
  }

  const resetMarcador = () => {
    setMarcador([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }

  const calcularVencedor = (espacos) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(espacos[a] && espacos[a] === espacos[b] && espacos[a] === espacos[c]){
        return espacos[a];
      }
      else if(!espacos.includes(null)){
        return 'empate';
    }
    }
    return null;
  }

  useEffect(() => {
    const vencedor = calcularVencedor(marcador);

    if(vencedor === 'X'){
      alert("Jogador X Venceu!")
      historico.key = historico.key +1
      resetMarcador()
      historico.historico.push(<ResultsX key={historico.key}></ResultsX>)

    }else if(vencedor === 'O'){
      alert("Jogador O Venceu!")
      historico.key = historico.key +1
      resetMarcador()
      historico.historico.push(<ResultsO key={historico.key}></ResultsO>)

    }else if (vencedor && vencedor === 'empate'){
      alert("Empate, Joguem de novo!")
      historico.key = historico.key +1
      resetMarcador()
      historico.historico.push(<ResultsEmpate key={historico.key}></ResultsEmpate>)
    }
  }, [marcador])
  return (
    <SafeAreaView style={styles.body}>
      <View style={[styles.playerInfo, { backgroundColor: player_ativo === 'X' ? 'black' : 'gray' }]}>
        <Text style={styles.playerTxt}>Vez do Jogador {player_ativo}'s </Text>
      </View>
      <View style={styles.mainContainer}>

        {/* esquerdaCima */}
        <Pressable style={styles.esquerdaCima} onPress={()=>marcaPosicao(0)}>
          {marcador[0] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[0] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>

        {/* meioCima */}
        <Pressable style={styles.meioCima} onPress={()=>marcaPosicao(1)}>
          {marcador[1] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[1] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>

        {/* direitaCima */}
        <Pressable style={styles.direitaCima} onPress={()=>marcaPosicao(2)}>
          {marcador[2] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[2] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>

        {/* esquerdameio */}
        <Pressable style={styles.esquerdaMeio} onPress={()=>marcaPosicao(3)}>
          {marcador[3] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[3] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>

        {/* meiomeio */}
        <Pressable style={styles.meioMeio} onPress={()=>marcaPosicao(4)}>
          {marcador[4] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[4] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>

        {/* direitameio */}
        <Pressable style={styles.direitaMeio} onPress={()=>marcaPosicao(5)}>
          {marcador[5] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[5] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>

        {/* esquerdabaixo*/}
        <Pressable style={styles.baixoEsquerda} onPress={()=>marcaPosicao(6)}>
          {marcador[6] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[6] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>

        {/* meiobaixo */}
        <Pressable style={styles.baixoMeio} onPress={()=>marcaPosicao(7)}>
          {marcador[7] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[7] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>

        {/* direitabaixo */}
        <Pressable style={styles.baixoDireita} onPress={()=>marcaPosicao(8)}>
          {marcador[8] === 'X' && <Image source={require('./cross.png')} style={styles.icon} />}
          {marcador[8] === 'O' && <Image source={require('./circulo.png')} style={styles.icon} />}
        </Pressable>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff'
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fff'
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 60
  },
  esquerdaCima: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 8,
    borderBottomWidth: 8
  },
  meioCima: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 8
  },
  direitaCima: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 8,
    borderLeftWidth: 8,
  },
  esquerdaMeio: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 8,
  },
  meioMeio: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  direitaMeio: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 8,
  },
  baixoEsquerda: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 8,
    borderTopWidth: 8,
  },
  baixoMeio: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 8,
  },
  baixoDireita: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 8,
    borderTopWidth: 8,
  },
  icon: {
    height: 62,
    width: 62
  },

})

export default JogoGalo