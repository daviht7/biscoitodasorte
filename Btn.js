import React, { useState } from 'react';
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Btn({ color,texto,onPress }) {

  const [style,setStyle] = useState(
    StyleSheet.create({
      btn : {
       width: 250,
       height:50,
       borderWidth: 2,
       borderColor: color ? color : "#ff0000",
       backgroundColor: "transparent",
       borderRadius: 25
      },
      btnArea : {
        flex: 1,
        flexDirection: "row",
        justifyContent : "center",
        alignItems : "center"
      },
      btnText : {
        color : color ? color : "#ff0000",
        fontSize: 14,
        fontWeight : "bold"
      }
   })
  )

  return (
   <TouchableOpacity style={style.btn} onPress={() => onPress()}>
      <View style={style.btnArea}>
        <Text style={style.btnText}>{ texto } </Text>
      </View>
   </TouchableOpacity>
  );
}
