import React, {Component, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Animated
  } from 'react-native';





  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  const activeColor = "#fff"
  const inactiveColor = ""


  const text = [
    "first screen",
    "second screen",
    "third screen",
    "fourth screen",
    "last screen",
]

  
  let r =1;
  let m = 10;
  if(text.length>5){
      r = text.length-5
    }
    
    if(text.length>m){
        m = text.length-r
    }
    class Progresbar extends Component{
        state = {
            message: 0,
            slide1: new Animated.Value(0),
            slide2: new Animated.Value(0),
            slide3: new Animated.Value(0),
            slide4: new Animated.Value(0),
            slide5: new Animated.Value(0)
        }
        
        componentDidMount(){
            Animated.timing(this.state.slide1, {
                toValue: (width/(text.length+r)-3),
                duration: 5000,
                useNativeDriver: false,
            }).start(() => {
                this.next()
                Animated.timing(this.state.slide2, {
                    toValue: (width/(text.length+r)-3),
                    duration: 5000,
                    useNativeDriver: false,
                }).start(()=>{
                    this.next()
                    Animated.timing(this.state.slide3, {
                        toValue: (width/(text.length+r)-3),
                        duration: 5000,
                        useNativeDriver: false,
                    }).start(()=>{
                        this.next()
                        Animated.timing(this.state.slide4, {
                            toValue: (width/(text.length+r)-3),
                            duration: 5000,
                            useNativeDriver: false,
                        }).start(()=>{
                            this.next()
                            Animated.timing(this.state.slide5, {
                                toValue: (width/(text.length+r)-3),
                                duration: 5000,
                                useNativeDriver: false,
                            }).start()
                        })
                    })
                })
              });
        }
        next =()=>{
            if(this.state.message !== text.length-1){
                this.setState({message:this.state.message + 1})
            }
        }
        back =()=>{
            if(this.state.message !== 0){
                this.setState({message:this.state.message - 1})
            }
        }
        
        progressclick=(x)=>{
            
            this.setState({
                message:text.indexOf(x),
            })
            
        }
        render(){
            const text = [
                              {
                                  text:"first screen",
                                  width:this.state.slide1
                              },
                              {
                                  text:"second screen",
                                  width:this.state.slide2
                              },
                              {
                                  text:"third screen",
                                  width:this.state.slide3
                              },
                              {
                                  text:"fourth screen",
                                  width:this.state.slide4
                              },
                              {
                                  text:"last screen",
                                  width:this.state.slide5
                              },
                          ]
            const ProgressBar =text.map((bars, index,)=>
            <TouchableOpacity key={index} style={[styles.progres,{backgroundColor: "transparent"}]} onPress={()=>this.progressclick(bars)}> 
                    <Animated.View style={{...styles.progressInner,width:bars.width}}/>
                </TouchableOpacity>
            )

        return(
            <View style={{alignItems: 'center', justifyContent: "space-around", height:height}}>
                <View style={{flexDirection:"row", marginTop:-70, justifyContent: "center", }}>
                        {ProgressBar}
                </View>
                <Writeup value={this.state.message}  next={this.next} back={this.back} />
                <View style={{}}>
                </View>
            </View>
        );
    }
}



const Writeup=(props)=>{
    return(
        <View style={{flexDirection:"row", alignItems:"center", paddingTop:70, width:width,justifyContent:"space-between", height:height/4}}>
            <TouchableOpacity onPress={props.back} style={{width:width/3, height:height/1.1}}>
                
            </TouchableOpacity>
            <View>
                <Text style={{fontSize:20, textAlign:"center", fontWeight: "bold", color:"#154360",width:width/3}}>{text[props.value]}</Text>
            </View>
            <TouchableOpacity onPress={props.next} style={{width:width/3, height:height/1.1}}>
                
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    progres :{
        width:width/(text.length+r),
        height:10,
        borderWidth:2,
        borderColor: "#999",
        marginRight:m,
        borderRadius:5,
        
    },
    progressInner:{
        height:8,
        backgroundColor: "#999",
        marginRight:m,
        borderRadius:5,
    }

});

export default Progresbar