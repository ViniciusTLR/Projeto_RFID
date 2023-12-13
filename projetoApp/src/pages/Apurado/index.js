import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import moment from 'moment';
import config from '../../../config/config.json'



export default function Apurado({ navigation }) {


    const [rfid_ap, setRfid] = useState('');
    const [estoque, setEstoque] = useState('1');
    const [currentDate, setCurrentDate] = useState('');

    //DATA EM TEMPO REAL
    useEffect(() => {
        setInterval(
            () => {
                let date = moment().utcOffset('-03:00').format('DD/MM/YYYY');
                setCurrentDate(date);
            },
        );
    }, []);

    //Envia os dados do formulário para o backend
    async function registerApurado() {

        if ( rfid_ap === '') {
            return alert("ERRO! preencha o campo")
        } else if ( rfid_ap === '0') {
            alert("Apenas numeros maiores que 0!")
        } else {

            let reqs = await fetch(config.urlRootNode + 'create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rfid_ap: rfid_ap,
                    estoque: estoque,
                    currentDate: currentDate
                })
            });
        }
    }


    return (
        <SafeAreaView >

            <TextInput
                name="rfid_ap"
                style={styles.input}
                onChangeText={(text) => setRfid(text)}
                value={rfid_ap}
                placeholder="codigo RFID"
                keyboardType="numeric"
            />

            <TextInput
                name="estoque"
                style={styles.input}
                onChangeText={(text) => setEstoque(text)}
                value={estoque}
                editable={false}
                keyboardType="numeric"
            />

            <TextInput
                name="currentDate"
                style={styles.input}
                onChangeText={(text) => setCurrentDate(text)}
                value={currentDate}
                editable={false}
            />

            <View>

                <TouchableOpacity onPress={registerApurado} style={styles.btnEnviar}>

                    <Text style={styles.txt} >ENVIAR</Text>

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
