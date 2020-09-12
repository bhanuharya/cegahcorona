import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          isError: false,
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity>
                <Icon style={{color:'white',transform: [{rotateY: '180deg'}]}} name='exit-to-app' size={35}/>
          </TouchableOpacity>
            <Icon style={{color:'white'}} name='alert' size={35}/>    
            <Text style={styles.headerText}>CegahCorona</Text>
          </View>
            <View style={styles.container2}>
                <Text style={[styles.title, styles.darkBlue]}>WELCOME</Text>
                <View style={styles.inputView}>
                <Text style={[styles.textSmall]}>Username / Email</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={userName => this.setState({ userName })}
                    />
                        
                </View>
                <View style={styles.inputView}>
                <Text style={[styles.textSmall]}>Password</Text>
                    <TextInput 
                        style={styles.inputText}
                        onChangeText={password => this.setState({ password })} 
                    />
                        
                </View>
                <TouchableOpacity style={[styles.button, styles.buttonLight]} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={[styles.textBig]}>atau</Text>
                <TouchableOpacity style={[styles.button, styles.buttonDark]}>
                    <Text style={styles.buttonText}>Daftar ?</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
    },container2: {
        flex: 1,
        alignItems: "center",
        
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
    title: {
        fontSize: 24,
        fontWeight : '900',
        margin: 50
    },
    inputView: {
        width: "80%",
        height: 80,
        marginBottom: 30,
        justifyContent: "center",
        borderRadius: 10,
    },
    inputText: {
        height: 48,
        padding: 10,
        fontSize: 20,
        borderColor: "#A59F9F",
        borderWidth: 1,
        borderRadius:  25
    },
    textSmall: {
        fontSize: 16    ,
        alignSelf: "flex-start",
        color : "#A59F9F"
        
        
    },
    textBig: {
        fontSize: 24
    },
    button:{
        width: "40%",
        borderRadius: 16,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    buttonText: {
        fontSize: 21,
        color: "white"
    },
    buttonDark: {
        backgroundColor: "#003366"
    },
    buttonLight: {
        backgroundColor: "#C74747"
    },
    darkBlue: {
        color: '#003366'
    },
    lightBlue: {
        color: '#3EC6FF'
    }
  });
