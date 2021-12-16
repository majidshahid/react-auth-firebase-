import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet,Text,View ,TouchableOpacity} from "react-native";
import { auth } from "../firebase";

const HomeScreen =()=>{
const navigation = useNavigation()
    const handleSignOut=()=>{
        auth.signOut()
        .then(()=>{
           navigation.replace('LOGIN')
        })
        .catch(error => alert(error.message))
    }
    return (
        <View style={Styles.container}>
<Text>Email:{auth.currentUser?.email} </Text>
<TouchableOpacity
style={Styles.button}
onPress={handleSignOut}
>
<Text style={Styles.buttonText} >Sign Out</Text>
</TouchableOpacity>
        </View>
    )
}

export default HomeScreen;

const Styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    button: {
        backgroundColor: "#0782F9",
        width: '80%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
   
    buttonText: {
       
        color: "white"
    },
})