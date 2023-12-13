import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import moment from 'moment';




export default function DePara({ navigation }) {

    const [cliente, onChangeClientedp] = useState('');
    const [filial_cliente, onChangeFilial_clientedp] = useState('');
    const [currentDatedp, setCurrentDatedp] = useState('');


    //DATA EM TEMPO REAL
    useEffect(() => {
        setInterval(
            () => {
                let date = moment().utcOffset('-03:00').format('DD/MM/YYYY');
                setCurrentDatedp(date);
            },
        );
    }, []);

    async function registerDePara() {

    }


    return (

        <SafeAreaView >

            <TextInput
                name="clientedp"
                style={styles.input}
                onChangeText={onChangeClientedp}
                value={cliente}
                placeholder="Cliente"
                keyboardType="numeric"
            />

            <TextInput
                name="filial_clientedp"
                style={styles.input}
                onChangeText={onChangeFilial_clientedp}
                value={filial_cliente}
                placeholder="Filial cliente"
                keyboardType="numeric"
            />

            <TextInput
                name="data"
                style={styles.input}
                onChangeText={setCurrentDatedp}
                value={currentDatedp}
                editable={false}
            />

            <View>

                <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.btnStart}>

                    <Text style={styles.txt}>START</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btnHome}>

                    <Text style={styles.txt} >HOME</Text>

                </TouchableOpacity>


            </View>


        </SafeAreaView>


    );
};

// CSS

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    btnStart: {
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
        elevation: 10,
    },

    txt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
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
        shadowRadius: 2.22,
        elevation: 10,
    }
});
