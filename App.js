import React from "react";
import { Text,View,StyleSheet, ScrollView } from "react-native";

 export default function app  ()  {
     
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'blue',
     
    },
    text1:{
      fontSize:30
    },
    text2:{
      fontWeight:"bold",
    },
    text3:{
      textAlign:"center"
    },
    container2:{
      backgroundColor:"white",
      marginBottom:80,
      marginTop:80,
      height:900,
       alignItems:"center",
       justifyContent:"center"
    
    },

  })
  
  return(   
     <>
      <ScrollView style={styles.container}>
          <View style={styles.container2}>
              <Text style={styles.text1}>haha</Text>
              <Text style={styles.text2}>hi</Text>
              <Text style={styles.text3}>hij</Text>
          </View>
      </ScrollView>
     </>
   )
 }