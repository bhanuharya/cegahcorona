import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class IndoDetails extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.header}>

          <TouchableOpacity>
              <Icon style={{color:'white',transform: [{rotateY: '180deg'}]}} name='exit-to-app' size={35}
              onPress={() => this.props.navigation.navigate('Home')}/>
          </TouchableOpacity>
          
          <View style={styles.header}>
            <Text style={styles.headerText}>Indonesia</Text>
          </View>
          
          <TouchableOpacity>
            <Icon style={{color:'white'}} name='account' size={35} 
            onPress={() => this.props.navigation.navigate('About')}/>
          </TouchableOpacity>

        </View>

        <View style={styles.body}>
            <TouchableOpacity>
                <Text style={styles.searchBar}>Cari Provinsi...</Text>
            </TouchableOpacity>

            <Text style={{color:'black', fontSize: 18, paddingTop: 20, paddingBottom: 20, fontWeight: 'bold'}}>COVID-19 Statistics - DKI Jakarta</Text>
            <View style={styles.box}>

                <View style={styles.content}>
                    <Icon style={{color:'#8000FF'}}name='stethoscope' size={34} />
                    <Text style={{fontSize:18, fontWeight:'bold', paddingLeft: 25}}>Positif : 50.202.020</Text>
                </View>
            
                <View style={styles.content}>
                    <Icon style={{color:'#9AEC5A'}}name='heart-pulse' size={34} />
                    <Text style={{fontSize:18, fontWeight:'bold', paddingLeft: 25}}>Sembuh : 25.123.456</Text>
                </View>

                <View style={styles.content}>
                    <Icon style={{color:'#FF2828'}}name='skull' size={34} />
                    <Text style={{fontSize:18, fontWeight:'bold', paddingLeft: 25}}>Meninggal : 20.101.202</Text>
                </View>

          </View>
        </View>
    </View>
    )
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      fontWeight: '900',
    },
    body: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 30,
        flexDirection:'column',
        justifyContent: 'space-evenly'
    },
    searchBar: {
        backgroundColor: '#8C8787',
        fontSize: 14,
        fontWeight: 'bold',
        borderRadius: 20,
        paddingLeft: 25,
        width: 145,
        height: 25,
        color: '#FFFFFF'
    },
    box: {
        backgroundColor: '#F1EFEF',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        paddingLeft: 25,
        paddingTop: 10,
        paddingBottom: 10, 
    },
    content: {
        flexDirection: 'row',
    },
})