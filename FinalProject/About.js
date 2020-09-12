import React from 'react';
import {
  StyleSheet,
  View, 
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class About extends React.Component{
    state = {
        fullname: "",
        username: "",
        status: ""
    }
    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.header}>
                <TouchableOpacity>
            <Icon style={{color:'white',transform: [{rotateY: '180deg'}]}} name='exit-to-app' size={35}/>
          </TouchableOpacity>
                    
            <Icon style={{alignItems: 'center',color:'white'}} name='alert' size={35}/>    
            <Text style={styles.headerText}>CegahCorona</Text>
          </View>
            <View style={styles.container2}>
                <Text style={[styles.title]}>WELCOME</Text>
            
            <View style={styles.profileContainer}>
            <Icon name="account-circle" size={150} color={'#EFEFEF'}/>
            
            <TouchableOpacity style={[styles.button, styles.buttonLight]}>
                    <Text style={styles.buttonText}>Homepage</Text>
                </TouchableOpacity></View>
            <View style={styles.container3}>
        
            <View style={styles.inputView}>
                <Text style={[styles.textSmall]}>Fullname</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={text => this.setState({fullname:text})}/>
                        
                </View>
                <View style={styles.inputView}>
                <Text style={[styles.textSmall]}>Username</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={text => this.setState({username:text})}/>
            </View>
            <View style={styles.inputView}>
                <Text style={[styles.textSmall]}>Status Rapid Test</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={text => this.setState({status:text})}/>
                        
            </View>
            <TouchableOpacity style={[styles.button1, styles.buttonLight]}>
                    <Text style={styles.buttonText1}>Edit Profile</Text>
                </TouchableOpacity></View>
            </View>
            </View>
 
            
                

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,  
    },
    container2: {
        flex: 1,  
        alignItems: 'center',
    },
    container3: {
        flex: 1,  
        alignItems: 'center',    
    },
    header: {
        backgroundColor: '#E25151',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
    headerText: {
        color: 'white',
        fontSize: 30,
        padding: 15,
        fontWeight : '900'
    },
    profileContainer:{
        alignItems: 'center',
        marginBottom: 8,
        
      },
      button:{
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    button1:{
        width: "50%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    buttonText: {
        fontSize: 21,
        color: "white",
        fontWeight: 'bold'
    },
    buttonText1: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold'
    },
    buttonDark: {
        backgroundColor: "#003366"
    },
    buttonLight: {
        backgroundColor: "#E25151",
        
    },
    inputView: {
        width: "110%",
        height: 60,
        margin: 5,
        justifyContent: "center",
        borderRadius: 10,
        marginBottom : 2,
        
        
        
        
    },
    inputText: {
        height: 24,
        padding: 10,
        fontSize: 20,
        borderColor: "#A59F9F",
        borderWidth: 1,


        
    },
    textSmall: {
        fontSize: 16,
        color : "#41A4AE",
        fontWeight: 'bold'
        
        
    },
    textBig: {
        fontSize: 24
    },
    title: {
        fontSize: 24,
        fontWeight : '900',
        marginTop:20,
        marginBottom: 20
        
    }
       
});