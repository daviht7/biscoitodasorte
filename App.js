import React, { useState, useEffect } from 'react';
import { View,StyleSheet,Image,Text } from 'react-native';

import Btn from "./Btn";

export default function App() {

  const [texto,setTexto] = useState("")
  const [frases,setFrases] = useState([])

  useEffect(() => {

    setFrases(["A vida é boa.","A vida tem que ser vivida.","Jamais me lembrarei das coisas que nunca vivi."])

  },[])

  function quebrarBiscoito() {

    let r = Math.floor(Math.random() * frases.length)
    
    setTexto(frases[r])

  }

  return (
    <View style={styles.body}>
      <Image source={require("./imagem/biscoito.jpg")} />

      <Text style={styles.frase}>{`"${texto}"`}</Text>

      <Btn color="#B59619" 
          texto="Quebrar biscoito" 
          onPress={quebrarBiscoito}/>
    </View>
  );
}

const styles = StyleSheet.create({

  body : {
    paddingTop : 20,
    flex:1,
    justifyContent : "center",
    alignItems: "center"
  },
  btn : {
    backgroundColor : "#ff0000"
  },
  frase : {
    fontSize : 17,
    color : "#b59619",
    margin: 30,
    fontWeight : "bold",
    fontStyle : "italic"
  }

})