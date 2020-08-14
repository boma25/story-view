import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
  } from 'react-native';

  const width = Dimensions.get('window').width

const Progres =()=>{
    return(
        <View style={{flexDirection:"row", paddingTop:20, justifyContent: "center"}}>
            <View style={styles.progres}>
                <View style={{backgroundColor:"#999", height:10, borderRadius:10}}></View>
            </View>
            <View style={styles.progres}></View>
            <View style={styles.progres}></View>
            <View style={styles.progres}></View>
            <View style={styles.progres}></View>
          </View>
    )
}

const styles = StyleSheet.create({

    progres :{
        width:width/6,
        height:10,
        borderWidth:1,
        borderColor: "#999",
        marginRight:10,
        borderRadius:10
    }

});

export default Progres