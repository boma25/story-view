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

  

  const text = ["With SaVest Wallet You can buy airtime and save!",
                "the second view",
                "the third view",
                "the fourth view",
                "the last view"
            ]

class Progresbar extends Component{
    state = {
        message : 0,
        animation1 : new Animated.Value(0),
        animation2 : new Animated.Value(0),
        animation3 : new Animated.Value(0),
        animation4 : new Animated.Value(0),
        animation5 : new Animated.Value(0),
        textanimation1 : new Animated.Value(1660)
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
            Animated.timing(this.state.textanimation1,{
                toValue:820,
                duration:1,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.animation2,{
                toValue:66,
                duration:5000,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.textanimation1,{
                toValue:0,
                duration:1,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.animation3,{
                toValue:66,
                duration:5000,
                useNativeDriver: false
            }),
            Animated.timing(this.state.textanimation1,{
                toValue:-800,
                duration:1,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.animation4,{
                toValue:66,
                duration:5000,
                useNativeDriver: false
            }),
            Animated.timing(this.state.textanimation1,{
                toValue:-1660,
                duration:1,
                useNativeDriver: false,
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
                    <TouchableOpacity style={styles.progres} >
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
                <View style={{flexDirection:"row",}}>
                <Animated.View style={{justifyContent: "center", alignItems:"center", paddingTop:70, marginLeft:this.state.textanimation1, width:width}}>
                    <Text style={{fontSize:25, textAlign:"center", fontWeight: "bold", color:"#154360"}}>
                        {text[0]}
                    </Text>
                </Animated.View>
                <Animated.View style={{justifyContent: "center", alignItems:"center", paddingTop:70,marginLeft:0 , width:width}}>
                    <Text style={{fontSize:25, textAlign:"center", fontWeight: "bold", color:"#154360"}}>
                        {text[1]}
                    </Text>
                </Animated.View>
                <Animated.View style={{justifyContent: "center", alignItems:"center", paddingTop:70,marginLeft:0 , width:width}}>
                    <Text style={{fontSize:25, textAlign:"center", fontWeight: "bold", color:"#154360"}}>
                        {text[2]}
                    </Text>
                </Animated.View>
                <Animated.View style={{justifyContent: "center", alignItems:"center", paddingTop:70,marginLeft:0 , width:width}}>
                    <Text style={{fontSize:25, textAlign:"center", fontWeight: "bold", color:"#154360"}}>
                        {text[3]}
                    </Text>
                </Animated.View>
                <Animated.View style={{justifyContent: "center", alignItems:"center", paddingTop:70,marginLeft:0 , width:width}}>
                    <Text style={{fontSize:25, textAlign:"center", fontWeight: "bold", color:"#154360"}}>
                        {text[4]}
                    </Text>
                </Animated.View>
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