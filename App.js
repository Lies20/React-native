import React from "react";
import { Text,View,StyleSheet } from "react-native";

 export default function app  ()  {
     
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'blue',
      alignItems:"center",
      justifyContent:"center"
      
    },
    text1:{
      fontSize:30
    },
    text2:{
      fontWeight:"bold",
    },
    text3:{
      textAlign:"center"
    }

  })
  
  return(   
     <>
      <View style={styles.container}>
          <View style={{backgroundColor:"white"}}>
              <Text style={styles.text1}>ha</Text>
              <Text style={styles.text2}>hi</Text>
              <Text style={styles.text3}>hij</Text>
          </View>
      </View>
     </>
   )
 }