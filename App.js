import React from "react";
import { Text,View,StyleSheet, ScrollView,Image } from "react-native";

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
    Image:{
      height:100,
      width:300
    }

  })
  
  return(   
     <>
      <ScrollView style={styles.container}>
          <View style={styles.container2}>
              <Text style={styles.text1}>hahha</Text>
              <Text style={styles.text2}>hi</Text>
              <Text style={styles.text3}>hij</Text>
          <Image style={styles.Image} source={{
            uri:"https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"
          }}/>
          </View>
      </ScrollView>
     </>
   )
 }