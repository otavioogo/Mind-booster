import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableWithoutFeedback, Animated } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import Editar from "../../pages/home/Editar";
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function FabButton(props) {



     const navigation = useNavigation();

    
    
        return (
            <View style={styles.container}>
           


      
            <TouchableWithoutFeedback onPress = {() => navigation.navigate("Editar")}>
            <Animated.View style={[styles.button, styles.menu]}>
            <AntDesign name="plus" size={24} color="#FFF" />
             </Animated.View>
            </TouchableWithoutFeedback>

            </View>
        );
    }


const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        position: "absolute",
        marginLeft: 350,
        marginTop: 480
    },
    button:{
        
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60/2,
        justifyContent: "center",
        alignItems: "center",
        shadowRadius: 10,
        shadowColor: '#857DB1',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        }
    },
    menu:{
        backgroundColor: '#857DB1',
        

    },
    submenu: {
        width: 48,
        height: 48,
        borderRadius: 48/2,
        backgroundColor: '#857DB1'
    }
});
