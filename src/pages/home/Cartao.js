import React from 'react';
import { KeyboardAvoidingView, View, Image, TouchableOpacity, Text, StyleSheet,Linking,TouchableWithoutFeedback,Keyboard,} from 'react-native';

import { TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';


export default function Cartao({navigation}) {

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Menu"}]
    })
}



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.background}>
        <View style={[styles.container, {justifyContent: 'flex-start', marginTop: 25}]}>
          <Text style={styles.containerTitleText}>Preencha os dados da frente e do verso do flashcard</Text>
        </View>
        <View style={[styles.container, {flex: 6, justifyContent: 'flex-start'}]}>
          <TextInput 
            label="Frente" 
            style={styles.input}
            placeholder="Brinquedo"
            
          />
          <TextInput 
            label="Verso"
            style={styles.input}
            placeholder="TOY" 
            
          />
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnCancel} onPress={entrar}>
            <Text style={styles.btnText}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#332E56'
  },
  logo: {
    width: 133,
    height: 133
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40
  },
  input: {
    backgroundColor: '#fff',
    width: 329,
    height: 150,
    color: 'rgba(0,0,0,0.8705882352941177 )',
    fontSize: 20,
    borderRadius: 3,
    marginBottom: -5,
    justifyContent: 'flex-start'
    
  },
 
  btnRegister: {
    width: 335,
    height: 53,
    backgroundColor: '#6a61a1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 20
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
  btnCancel: {
    width: 335,
    height: 53,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3, 
  },
  containerTitleText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 25,
    marginTop: 20
  }
});
