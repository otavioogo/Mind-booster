import React from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, Button, Image} from 'react-native';
import 'react-native-gesture-handler';
import FbButton from '../../components/Button/FbButton';
import Card from '../../components/menu/Card';
import FlashTextInput from '../../components/FlashText/FlashTextInput';


const lista =
 {
    front: "Arvore",
    back:"Tree"
}


const props =
 {
    front: "Animais",
    back:"Animals"
}

const label =
 {
    front: "Pronomes",
    back:"pronouns"
}

const color =
 {
    front: "Cores",
    back:"Colors"
}




export default function Cards({navigation}){
    


    return( 
    <SafeAreaView style={styles.label}>
       <FlashTextInput
       		style={styles.input}
			keyboardType="ascii-capable"
			placeholder="Pesquise por um objeto.."
			label="search"
			returnKeyLabel="search"
		/>

        <View style={ styles.buttonContainer }>
			<Button title="Jogar!" color="#57966A"/>
		</View>

        <Card {...lista}/>
        <Card {...props}/>
        <Card {...label}/>
        <Card {...color}/>

        <FbButton style={styles.fbuton}/>
    </SafeAreaView>)
    };

    const styles = StyleSheet.create({
        fbuton: {
            alignItems: "center",
            marginTop: 500,
            marginLeft: 350
        },
        label: {
            marginTop: 50,
            backgroundColor:"#332e56",
            flex:1,
        },
        buttonContainer: { 
			marginHorizontal: 120,
			marginVertical: 30
		},
        input: {
			textAlign: "left",
			backgroundColor: "#FFFFFF",
			borderBottomWidth: 3,
			borderBottomColor: "#6200EE",
		},
    });
