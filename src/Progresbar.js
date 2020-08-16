import React, {Component, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image
  } from 'react-native';


  import back from "../assets/prev.png"
  import next from "../assets/next.png"
  import gohome from "../assets/backarrow.png"


  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  const text = [
                    "With SaVest Wallet You can buy airtime and save!",
                    "the second view",
                    "the third view",
                    "the fourth view",
                    "the last view"
                ]

class Progresbar extends Component{
    state = {
        color:"",
        message:0
    }

    componentDidMount(){
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
        const ProgressBar =text.map(bars=>
                <TouchableOpacity style={styles.progres} onPress={()=>this.progressclick(bars)}  >
                    <View style={{height:13, width:66, backgroundColor:"transparent"}}/>
                </TouchableOpacity>
            )

        return(
            <View style={{alignItems: 'center', justifyContent: "space-around", height:height}}>
                <View style={{flexDirection:"row", marginTop:-70, justifyContent: "center", }}>
                        {ProgressBar}
                </View>
                <Writeup value={this.state.message} next={this.next} back={this.back} />
                <View style={{}}>
                    <TouchableOpacity style={styles.fundbutton}>
                        <Text style={ { fontSize:15, color:"#fff" }}>
                            FUND YOUR WALLET 
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:"row", paddingTop:20,marginBottom:-40}}>
                        <Image source={gohome}  style={{height:20,width:20, marginRight:15}}/>
                        <Text>
                            Home
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const Writeup=(props)=>{
    return(
        <View style={{flexDirection:"row", alignItems:"center", paddingTop:70, width:width,justifyContent:"space-between", height:height/4}}>
            <TouchableOpacity onPress={props.back}>
                <Image source={back} style={{height:20,width:20}}/>
            </TouchableOpacity>
            <Text style={{fontSize:25, textAlign:"center", fontWeight: "bold", color:"#154360",width:width-70}}>{text[props.value]}</Text>
            <TouchableOpacity onPress={props.next}>
                <Image source={next} style={{height:20,width:20}}/>
            </TouchableOpacity>
        </View>
    )
}

const Progresbars =(props)=>{
    const {id,color,press} = props
    return(
        <View>
           
        </View>
        
    )
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
    },
    fundbutton: {
        backgroundColor:"#154360",
        width:width-40, 
        alignItems:"center", 
        justifyContent: "center", 
        height:46
    }

});

export default Progresbar