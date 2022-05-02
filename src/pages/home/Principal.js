import React, { useState } from "react";
import { KeyboardAvoidingView, View, StyleSheet, SafeAreaView, Text, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import FlashTextInput from '../../components/FlashText/FlashTextInput';
import LogoImage from '../../assets/mind-booster.png';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../services/firebase";
import { AntDesign} from '@expo/vector-icons'
import { passwordValidator } from "../../components/menu/helpers";



export default function Login({navigation}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordIsVisibles, setPasswordIsVisibles] = useState(false);
  const [erro, setErro] = useState("flex");
  const [passwordValidError, setPasswordValidError] = useState('');
  const [errorEmail, setErrorEmail] = useState("error");
  
  const handleValidPassword = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
    if (val.length === 0) {
      setPasswordValidError('Entre com uma Senha Valida');
    } else if (reg.test(val) === false) {
      setPasswordValidError('Senha Nao Confere');
    } else if (reg.test(val) === true) {
      setPasswordValidError('');
    }
    };


  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
    })
}

  async function createUser() {
      await createUserWithEmailAndPassword(auth, email, password)
      .then(value => {
          console.log('Cadastrado com Sucesso ' + value.user.uid);
      })
      .catch(error => console.log(error));
  };

    return (
    <KeyboardAvoidingView behavior='padding' style={styles.screen}>
      
        <View style={styles.header}>
            <Image style={styles.LogoImage} source={LogoImage}/>
            <Text style ={styles.LogoText}>Mind Booster</Text>
        </View>
        
        <Text style={styles.Txt}>Preencha os dados do seu cadastro</Text>

        <View style={styles.form}>

        <TextInput 
            placeholder="E-mail"
            value={email}
            onChangeText={value => setEmail(value)}
            style={styles.input}
            keyboardType="ascii-capable" />
        </View>

        <View style={styles.container}>


        <View style={styles.containertInputPasswords}>
            <TextInput 
            placeholder="Senha"
            
            onChangeText={value => setPassword(value)}
            style={styles.inputPasswords}
            keyboardType="ascii-capable"
            autoComplete="password" 
            secureTextEntry={!passwordIsVisibles}
            />
        
        
        <TouchableOpacity style={styles.links}
           onPress={() => setPasswordIsVisibles(!passwordIsVisibles)} >
             {passwordIsVisibles == true ?    
          <AntDesign 
            name="eye"
            size={30} />
             :
         <AntDesign 
         name="eyeo"
            size={30} />
                   }
        </TouchableOpacity>



           </View>     
      </View>

      <View style={styles.containerr}>         

        <View style={styles.containertInputPassword}>
            <TextInput 
            placeholder="Repetir Senha"
            onChangeText={value => {
              setPassword(value);
               handleValidPassword(value);
            }}
            style={styles.inputPassword}
            keyboardType="ascii-capable"
            autoComplete="password" 
            secureTextEntry={!passwordIsVisible}
            />
       
        
        <TouchableOpacity style={styles.links}
           onPress={() => setPasswordIsVisible(!passwordIsVisible)} >
             {passwordIsVisible == true ?    
          <AntDesign 
            name="eye"
            size={30} />
             :
         <AntDesign 
                name="eyeo"
            size={30} />
                   }
        </TouchableOpacity>
     
          </View>
          <View style={{display: erro }}> 
              <Text style={styles.labelerror} >  
              {passwordValidError ? <Text>{passwordValidError}</Text> : null}
               </Text>
            </View>

    </View> 

        <View style={ styles.buttonContainer }>
        <Button color="#6a61a1" title="Cadastrar" onPress={() => createUser()} />
        
       </View>
       
       <View style={ styles.buttonContainer }>
        <Button color="#6a61a1" title="Sair" onPress={() => entrar()} />
        
       </View>

 
    </KeyboardAvoidingView>
    
    )
}

const styles = new StyleSheet.create({
    screen:{
        
        backgroundColor: "#423F5D",
        width:"100%",
        height: "100%",
        justifyContent:'flex-start',
        alignItems: 'center',
        
    },
    label: {
      display: 'flex',
  },
  labelerror: {
    color: "#f00",
    alignItems: "flex-end",
    position: "relative",
    marginTop: 0
  },
    form: {
      width: "100%",
      display: "flex",
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -20
        },
    header:{
      backgroundColor: "#423F5D",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
     
      marginTop: 61,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "80%",
      height: 70
    },
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',   
      marginTop: 20,
    },
    containerr:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',   
      marginTop: 20,
    },
    containertInputPassword: {

      flexDirection: 'row',
      width: '80%',
      borderColor: "#6200ee",
      color: "#6200ee",
      backgroundColor: "#FFF",
      borderRadius: 7,
      
      height: 50,
      alignItems: "center",
      marginTop: 30

      },
      containertInputPasswords: {
        flexDirection: 'row',
        width: '80%',
        borderColor: "#6200ee",
        color: "#6200ee",
        backgroundColor: "#FFF",
        borderRadius: 7,
        
        height: 50,
        alignItems: "center",
        marginTop: 10

      },
      inputPassword:{
        width: '85%',
        height: 50,
        color: "#6200ee",
        padding: 8,
        
 
       },
      inputPasswords:{
        width: '85%',
        height: 50,
        color: "#6200ee",
        padding: 8,
      },
      links: {
        width: "15%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
    input: {
      height: 50,  
      width: "80%",
      
      borderRadius: 5,
      borderColor: "#6200ee",
      color: "#6200ee",
      backgroundColor: "#FFF",
      padding: 10,
      position: "relative",
      marginTop: 12,
    
    },
    LogoImage:{
        marginLeft: 20,
        alignItems: 'center',
        width: 40,
        height: 60,
        marginTop: 20,
    },
    LogoText:{
        marginLeft:10,
        fontSize: 20,
        color: "#FFF",
        marginTop: 20,
    },
    Txt:{
        width: "80%",
        padding:50,
        paddingTop:60,
        color:"#FFF",
        fontSize: 25,
        textAlign: 'center',
        marginTop: -15
        
    },
    btnCadastro:{
        marginTop: 100,
        color: "#6a61a1"
    }
})
