import React, { useState } from "react";
import {  View, Text, TextInput, Button, StyleSheet , Image, TouchableOpacity, Alert} from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../services/firebase";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Background } from "../../components/Background";
import { Section } from "../../components/Section";
import mindBoosterImage from "../../assets/mind-booster.png";
import FlashTextInput from '../../components/FlashText/FlashTextInput';
import 'react-native-gesture-handler';
import { AntDesign} from '@expo/vector-icons'
import { Menu } from '../../components/menu/index'




export function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const [errorEmail, setErrorEmail] = useState("error");
    const [erro, setErro] = useState("flex");
    const [emailValidError, setEmailValidError] = useState('');

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        
        if (val.length === 0) {
          setEmailValidError('E-mail deve ser inserido');
        } else if (reg.test(val) === false) {
          setEmailValidError('Entre com um E-mail Valido');
        } else if (reg.test(val) === true) {
          setEmailValidError('');
        }
        };
        
    
    const createUser = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Principal"}]
        })  
    
    }

    async function login() {
        
    
        await signInWithEmailAndPassword(auth, email, password)
        .then(value => {
            
            console.log('Login com Realizado!');
            navigation.navigate('Menu');
            
        })
        .catch(error => console.log(error));
        
    
    };

    return(
        <Background>
			<Section>
            <View style={styles.logo}>
					<Image source={mindBoosterImage} style={styles.logoImage} />
				</View>
				<Text style={styles.title}>MindBooster</Text>

        <View style={styles.form}>

            <TextInput 
                placeholder="email"
                value={email}
                onChangeText={value => {
                        setEmail(value);
                         handleValidEmail(value);
                }}
                style={styles.input}
                keyboardType="ascii-capable"
                
            />
            <View style={{display: erro }}> 
              <Text style={styles.labelerror} >
                 {emailValidError ? <Text>{emailValidError}</Text> : null}
               </Text>
            </View>
        </View>  
       
         

        <View style={styles.container}>

        <View style={styles.containertInputPassword}>

            
              <TextInput 
                placeholder="password"
                value={password}
                onChangeText={value => setPassword(value)}
                style={styles.inputPassword}
                keyboardType="ascii-capable"
                autoComplete="password"
                secureTextEntry={!passwordIsVisible} 
            />
            
            <TouchableOpacity  style={styles.links}
                onPress={() => setPasswordIsVisible(!passwordIsVisible)} >
                {passwordIsVisible == true ?    
            <AntDesign 
                name="eye"
                size={25} />
                    :
                    <AntDesign 
                    name="eyeo"
                    size={25} />
                }
           </TouchableOpacity>
          
        </View>
  </View>          

        <Text style={styles.link}>Esqueci a senha</Text>

                
            <View style={ styles.buttonContainer }>
            

            <Button
                 title="ENTRAR"
                   onPress={login}
                   
            
                 color="#6A61A1" />

            <Button
            title="CADASTRE-SE"
            onPress={() => createUser()}
                color="#B58D97" />

        </View>


       
        </Section>
		</Background>

    )
}


const styles = StyleSheet.create({
    sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
		color: Colors.White,

	},
    label: {
        display: 'flex',
    },
    labelerror: {
      color: "#f00",
      alignItems: "flex-end",
      position: "relative"
    },
	logo: {
		marginTop: -20,
		alignSelf: "center",
		width: 132,
		height: 132,
	},
	logoImage: {
		width: "100%",
	},
	title: {
		fontSize: 56,
		color: "#FFFFFF",
	},
	form: {
		width: "100%",
		display: "flex",
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "4%"
      },
      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
        marginTop: 50,
      },
      containertInputPassword: {

      flexDirection: 'row',
      width: '100%',
      borderColor: "#6200ee",
      color: "#6200ee",
      backgroundColor: "#FFF",
      borderRadius: 7,
      
      height: 50,
      alignItems: "center",

      },
      inputPassword:{
       width: '85%',
       height: 50,
       color: "#6200ee",
       padding: 8,
       

      },
	  input: {
        height: 50,  
        width: "100%",
        borderWidth: 1,
        borderRadius: 7,
        
        color: "#6200ee",
        backgroundColor: "#FFF",
        padding: 10,
        position: "relative",
        marginTop: 12,
        flexDirection: 'row'
      
      },
	link: {
		marginTop: 5,
		color: "#FFFFFF",
		fontWeight: "700",
		alignSelf: "flex-end",
        marginTop: 25
	},
    links: {
        width: "15%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
       
    },
	buttonContainer: {
		height: 150,
		marginTop: 21,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
});
