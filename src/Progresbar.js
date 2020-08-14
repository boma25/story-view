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
        message:first,
        animation1 : new Animated.Value(0),
        animation2 : new Animated.Value(0),
        animation3 : new Animated.Value(0),
        animation4 : new Animated.Value(0),
        animation5 : new Animated.Value(0)
    }

    componentDidMount(){
        this.slidein()
    }

    slidein = ()=>{
        Animated.sequence([
            Animated.timing(this.state.animation1,{
                toValue:66,
                duration:5000,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.animation2,{
                toValue:66,
                duration:5000,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.animation3,{
                toValue:66,
                duration:5000,
                useNativeDriver: false
            }),
            Animated.timing(this.state.animation4,{
                toValue:66,
                duration:5000,
                useNativeDriver: false
            }),
            Animated.timing(this.state.animation5,{
                toValue:66,
                duration:5000,
                useNativeDriver: false
            }),
        ]).start()
    }
    render(){
            
        return(
            <View style={{alignItems: 'center', justifyContent: "space-around", height:height}}>
                <View style={{flexDirection:"row", marginTop:-70, justifyContent: "center", }}>
                    <TouchableOpacity style={styles.progres}  >
                        <Animated.View style={{height:13, width:this.state.animation1, backgroundColor:"white"}}/>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.progres} onPress={()=> this.setState({message:second})}>
                        <Animated.View style={{height:13, width:this.state.animation2, backgroundColor:"white"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.progres} >
                        <Animated.View style={{height:13, width:this.state.animation3, backgroundColor:"white"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.progres}>
                        <Animated.View style={{height:13, width:this.state.animation4, backgroundColor:"white"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.progres} >
                        <Animated.View style={{height:13, width:this.state.animation5, backgroundColor:"white"}}/>
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
        borderWidth:2,
        borderColor: "#999",
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#999"
    }

});

export default Progresbar