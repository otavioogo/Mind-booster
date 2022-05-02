import React from "react";
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, StyleSheet, Text, SafeAreaView, View, Image, FlatList } from "react-native";
import 'react-native-gesture-handler';
import Icon  from "react-native-vector-icons/FontAwesome";
import FabButton from "../Button/FabButton";


import 'react-native-gesture-handler'


export default function CardCollection (){
   
	const lista = [

		{
			id: 1,
			name: 'Objetos',
			image: require('../../assets/ball.png')
		},
		
		{
			id: 2,
			name: 'Cores',
			image: require('../../assets/colors.png')
		},
		
		{
			id: 3,
			name: 'Animais',
			image: require('../../assets/bear.png')
		},
		
		{
			id: 4,
			name: 'Adjetivos',
			image: require('../../assets/tree.png')
		},
		
		{
			id: 5,
			name: 'Pronomes',
			image: require('../../assets/arrow.png')
		},

	];

	onDelte = () => {
		alert ("ERROR")
	}

	const oneLista = ( { item } ) => (
		<SafeAreaView style = {styles.countainer}>
		<View style = {styles.card}>
		<View style={styles.item}>
			<View style={styles.avatarContainer}>
				<Image source={item.image} style={styles.avatar} />
			</View>
		<Text style={styles.name}>{item.name}</Text>
		</View>
		</View>    
		
		<TouchableWithoutFeedback >
			<View style={styles.viewEdit}>
		<Icon name="pencil" color="#2680EB" size={ 30 } style={styles.imageOptions} />
							
		</View>	
		</TouchableWithoutFeedback >
		

		<TouchableOpacity 
		 activeOpacity={0.6}
		 underlayColor="#DDDDDD"
		onPress={()=>this.onDelte()}>
			<View style={styles.viewDelete}>	
			<Icon name="trash" color="#FF0C0C" size= {30} style={styles.imageDelete} />
		</View>	
	
		</TouchableOpacity>
		</SafeAreaView>
	)

	


    return (
        <SafeAreaView >
            <FlatList
			
			data = { lista }
			renderItem = { oneLista }
			
			ListEmptyComponent={ <Text> FLAT LIST</Text>}
			
			/>

				<FabButton style={styles.fbuton}/>
        </SafeAreaView>
        
    )
    
}

const styles = StyleSheet.create({
	countainer:{
        marginTop: 25,
        height:100,
        marginHorizontal: "5%",
        backgroundColor: "#FFF",
        borderRadius: 15,
		
    },
	card:{
        height:"100%",
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'row',      
		  
    },
    image:{
        marginLeft:15,
        width: "22%",
        height:"80%"
    },
    text:{
        width: "40%",
        textAlign: "center",
        fontSize: 40,
        marginLeft: 20,
        color: '#27aca7'
    },
    viewEdit:{
        width:"100%",
        alignItems:"flex-end",
		marginTop: -75
    },
	viewDelete: {
		width:"100%",
        alignItems:"flex-end",
		marginTop: -75,
	
	},
    imageOptions:{
        width:40,
        height:40,
		marginTop: -15
    },
	imageDelete: {
		width:40,
        height:40,
		marginTop: 80
	},
	item: {
		flex: 1,
		flexDirection: 'row',
		alignItems: "center",
		paddingVertical: 13,
	},
	avatarContainer: {
		height:"100%",
		justifyContent: 'flex-start',
		alignItems: "center",
		flexDirection: 'row', 
		marginLeft: 10
	},
	avatar: {
		height: 55,
		width: 55,
	},
	name: {
		width: "40%",
        textAlign: "center",
        fontSize: 30,
        marginLeft: 30,
        color: '#27aca7'
	},
	fbuton: {
		alignItems: "center",
		marginTop: 500,
		marginLeft: 400
	}
})
