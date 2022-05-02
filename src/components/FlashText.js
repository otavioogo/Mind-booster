import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity } from "react-native";



export default function FlashTextInput(props) {
  const [text, onChangeText] = React.useState(props.txt);
  var secretOption = props.ocultPwd;

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style = {styles.viewInput}>
        <TextInput
          style={styles.input}
          secureTextEntry={secretOption}
          onChangeText={onChangeText}
          value={text}
        />     
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  safeareaview:{
    width: "100%",
    alignItems:'center',
    justifyContent: 'center',
  },
  viewInput:{
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "4%",
    
    width: "100%",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#FFF",
    borderColor: "#6200ee",
    width: "80%",
  },
  input: {
    height: 50,  
    width: "85%",
    color: "#6200ee",
    padding: 10,
    position: "relative",
    textAlign: "center",
  },
});
