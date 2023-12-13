import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';



export default function Home({ navigation }) {


  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate('DePara')} style={styles.btn}>

        <Text style={styles.txt} >DEPARA</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Apurado1')} style={styles.btn}>

        <Text style={styles.txt} >APURADO</Text>

      </TouchableOpacity>


    </View>
  );
}




//CSS
const styles = StyleSheet.create({

  container: {
    paddingTop: '25%'
  },

  btn: {
    marginBottom: '15%',
    padding: 12,
    backgroundColor: '#4c89e3',
  },

  txt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,

  },
})