import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { HeaderBackground } from '@react-navigation/stack'
import { StyleSheet, Text, View , TouchableOpacity, Image, Color } from 'react-native';

import Colecoes from '../../pages/home/Colecoes';
import Icon from 'react-native-vector-icons/FontAwesome'
import Principal from '../../pages/home/Principal'
import Card from '../menu/Card'
import Cards from '../../pages/home/Cards'


Icon.loadFont();

const Drawer = createDrawerNavigator();

export default function Menu() {

    return(
       
        <Drawer.Navigator 
        
        initialRouteName= "Colecoes"
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerContentOptions={{labelStyle : {"Color": "#FFF", fontSize: 18}}}
        screenOptions={{
            drawerStyle: {
            backgroundColor: "#25243a",
            width: 240,
            
            },
            
          }}
   
        >
            <Drawer.Screen name="Minhas Colecoes" component={Colecoes} 
                options = {{
                    drawerIcon: config => <Icon name="bars" size={30} color="#fff"></Icon>,
                    
                    headerStyle:{
                    backgroundColor: "#423F5D",
                    
                    }
                }}
            />

            
            
            

            
            


        </Drawer.Navigator>
        
    )
}


function CustomDrawerContent (props) {
    return(
        <DrawerContentScrollView {...props}>
            <ProfileDrawer {...props}/>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => {props.navigation.popToTop()}} labelStyle={{color: '#fff', fontSize: 20}} icon={() => <Icon name="angle-left" size={25} color="#fff"/>} />


        </DrawerContentScrollView>
    )
}

function ProfileDrawer(props) {
    return(

        <TouchableOpacity onPress={() => {props.navigation.navigate("Principal")}}>
            <View style={styles.container}>
                    <View style={styles.imagecontainer}>
                        <Image source={{uri: "https://randomuser.me/api/portraits/men/1.jpg" }} style={styles.imageStyle} />

                    </View>
                <View style={styles.containerText}>
                    <Text style={styles.drawertext}> Otavio Ogo</Text>
                
                </View>
            </View>
        </TouchableOpacity>
            )
}


const styles = StyleSheet.create({
    drawerStyle: {
        width: 250,
        backgroundColor: "#423F5D",
    },
    container: {
        alignItems: 'center',
        height: 165
    },
    imageStyle: {
        width: 100,
        height: 100
    },
    drawertext: {
        color: '#fff',
        fontSize: 18
    },
    containerText: {
        alignItems: 'center'
    },
    imagecontainer: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000',
        elevation: 6
    }
})
