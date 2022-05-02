import React from "react";
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import 'react-native-gesture-handler';
import Icon  from "react-native-vector-icons/FontAwesome";
import CardCollection from "./CardCollection";



export default function Card (props){
    return (
        <SafeAreaView style = {styles.countainer}>
            <TouchableOpacity style = {styles.card}>
                <View style={styles.textCard}>
                    <Text style={styles.description}>Frente</Text>    
                    <Text style={styles.text}>{props.front}</Text>
                    
                </View>
                
                <View style={styles.textCard}>
                    <Text style={styles.description}>Verso</Text>    
                    <Text style={styles.text}>{props.back}</Text>
                </View>
                
                <View style={styles.viewEdit}>
                    <Icon name="pencil" color="#2680EB" size={ 30 } style={styles.label} />
                    <Icon name="trash" color="#FF0C0C" size= { 30 } style={styles.imageOptions}/>
                </View>
            
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    countainer:{
        marginTop: 30,
        height:70,
        marginHorizontal: "5%",
        backgroundColor: "#FFF",
        borderRadius: 15,
        
    },
    card:{
        height:"100%",
        width: "100%",
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'row',        
    },
    textCard:{
        justifyContent:"flex-start",
        width: "30%",
    },
    description:{
        color:"#868686",
        marginLeft: 10,
    },
    text:{
        width: "100%",
        
        fontSize: 20,
        marginLeft: 10,
        color: '#27aca7',
        fontWeight: 'bold'
    },
    viewEdit:{
        flexDirection: 'row',
        width:"33%",
        justifyContent:"flex-end",
        marginLeft: -20
    },
    imageOptions:{
        marginRight: -20,
        width:30,
        height:30,
    },
    label: {
        marginRight: 20
    }

})
