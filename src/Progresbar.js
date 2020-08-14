import React, {Component} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Animated, 
    Easing,
    TouchableWithoutFeedback,
  } from 'react-native';

  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  const first = "With SaVest Wallet You can buy airtime and save!"
  const second = "the second view"
  const third = "the third view"
  const fourth = "the fourth view"
  const last = "the last view"

class Progresbar extends Component{
    state = {
        message:first
    }

    render(){
        
        return(
            <View style={{alignItems: 'center', justifyContent: "space-around", height:height}}>
                <View style={{flexDirection:"row", marginTop:-70, justifyContent: "center", }}>
                    <TouchableOpacity style={styles.progres}  >
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.progres} onPress={()=> this.setState({message:second})}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.progres} >
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.progres}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.progres} >
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: "center", alignItems:"center", paddingTop:70}}>
                    <Text style={{fontSize:25, textAlign:"center", fontWeight: "bold", color:"#154360"}}>
                        {this.state.message}
                    </Text>
                </View>
                <TouchableOpacity style={{
                                    backgroundColor:"#154360",
                                        width:width-40, 
                                        alignItems:"center", 
                                        justifyContent: "center", 
                                        height:46
                                        }}>
                    <Text style={ { fontSize:15, color:"#fff" }}>
                        FUND YOUR WALLET 
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    progres :{
        width:width/6,
        height:15,
        borderWidth:1,
        borderColor: "#999",
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#999"
    }

});

export default Progresbar