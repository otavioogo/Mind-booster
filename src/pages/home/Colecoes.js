import React from 'react';
import { View, StyleSheet,TouchableWithoutFeedback, SafeAreaView, ScrollView,TouchableOpacity, Text, Button, Image} from 'react-native';
import CardCollection from '../../components/menu/CardCollection';
import Card from '../../components/menu/Card';
import 'react-native-gesture-handler';
import FabButton from '../../components/Button/FabButton';




export default function Colecoes({navigation}) {
  return(
    
    <TouchableOpacity style = {styles.screen}
    
    onPress={() => {
            navigation.navigate("Cards");
        }}>
    <CardCollection/>
    
    </TouchableOpacity>
  

)};
  
  const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#332e56"
    },
  

})
