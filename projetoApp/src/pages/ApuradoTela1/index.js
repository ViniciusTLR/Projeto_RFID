import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

export default function ApuradoTela1({ navigation }) {


    const [cod_inventario, setCliente] = useState('');

    function checkToNavigate() {
        if( (cod_inventario !== '') && (cod_inventario > 0)){
            return navigation.navigate('Apurado2')
        }else{
            alert("Digite um valor")
        }
     
      }

    return (
        <SafeAreaView >

            

            <TextInput
                name="cod_inventario"
                style={styles.input}
                onChangeText={(text) => setCliente(text)}
                value={cod_inventario}
                placeholder="codigo inventario"
                keyboardType="numeric"
            />
            

            <View>

                <TouchableOpacity  onPress={checkToNavigate} style={styles.btnEnviar}>

                    <Text style={styles.txt} >NEXT</Text>

                </TouchableOpacity>



                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnHome}>

                    <Text style={styles.txt} >HOME</Text>

                </TouchableOpacity>


            </View>


        </SafeAreaView>


    );
};


//CSS

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    btnEnviar: {
        margin: 100,
        marginTop: 30,
        padding: 13,
        backgroundColor: '#4c89e3',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 15,

    },

    txt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,

    },

    btnHome: {
        margin: 100,
        marginTop: '-10%',
        padding: 13,
        backgroundColor: '#4c89e3',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2,
        elevation: 15,
    }
});
