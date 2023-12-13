import React, { useState, useEffect, Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import config from '../../../config/config.json'
import * as FileSystem from 'expo-file-system'
import {shareAsync} from 'expo-sharing';
import api from '../../Services/Api';




export default function Start({ navigation }) {

    const [rfid_dp, setRfid_dp] = useState('');
    const [codigo_de_barras_cliente_dp, setCodigo_de_barras_cliente_dp] = useState('');
    const [quantidade, setQuantidade] = useState('1');

    
    const downloadfromurl = async () =>{
        const filename = 'small.mp4';
        const result = await FileSystem.downloadAsync(
            'http://techslides.com/demos/sample/videos/small.mp4',
            FileSystem.documentDirectory + filename
        );
        console.log(result)

        save(result.uri);
    }

    const save = (uri) =>{
        shareAsync(uri);
    }
    
      
        const createAndWriteToFile = async () => {
          try {
            // Crie uma pasta chamada "MeusArquivos" no diretório de documentos
            const folderName = 'MeusArquivos';
            const folderPath = `${FileSystem.documentDirectory}${folderName}`;
            await FileSystem.makeDirectoryAsync(folderPath, { intermediates: true });
      
            // Crie e escreva dados em um arquivo chamado "dados.txt" dentro da pasta
            const fileName = 'dados.txt';
            const filePath = `${folderPath}/${fileName}`;
            const content = 'Estes são os dados que serão salvos no arquivo.';
      
            await FileSystem.writeAsStringAsync(filePath, content);

            // Compartilhe o arquivo usando expo-sharing
      await shareFile(filePath);
      
            console.log('Pasta criada e dados salvos com sucesso:', filePath);
          } catch (error) {
            console.error('Erro ao criar pasta e salvar dados:', error);
          }
        };

        const shareFile = async (filePath) => {
            try {
              const fileUri = `file://${filePath}`;
              await Sharing.shareAsync(fileUri, { mimeType: 'text/plain', dialogTitle: 'Compartilhar dados' });
            } catch (error) {
              console.error('Erro ao compartilhar o arquivo:', error);
            }
          };

        
    
    

    const saveData = async () =>{
        try{
            //obter o caminho do diretorio de documentos do aplicativo
            const documentsPath = `${FileSystem.documentDirectory}Aquii`

            //Definir o nome da pasta que desejamos criar
            const folderName = 'coletaDePara';

            //combinar o caminho da pasta com o nome do arquivo
            const folderPath = `${documentsPath}${folderName}`

            //combinar o caminho da pasta com o nome do arquivo
            const filePath = `${folderPath}/meuArquivo.txt`;

            //Criar a pasta se ela não existir
            await FileSystem.makeDirectoryAsync(folderPath, {intermediates: true});

            //escrever o texto no arquivo
            await FileSystem.writeAsStringAsync(filePath,'ola', {encoding: FileSystem.EncodingType.UTF8});

           // console.log(FileSystem.documentDirectory)

            //mensagem de sucesso
            Alert.alert('Dados salvos com sucesso');
        } catch(error){
            //mensagem de erro
            Alert.alert('Erro ao salvar os dados')
        }
    }
    


   /* useEffect(() => {
        alert('funcionando');
    }, [])*/


    async function registerDePara() {

        if (( rfid_dp === '') || ( codigo_de_barras_cliente_dp === '')) {
            return alert("ERRO! preencha o campo")
        } else if (( rfid_dp === '0') || ( codigo_de_barras_cliente_dp === '0')) {
            alert("Apenas numeros maiores que 0!")
        } else {

            let reqs = await fetch(config.urlRootNode + 'collect', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rfid_dp: rfid_dp,
                    codigo_de_barras_cliente_dp: codigo_de_barras_cliente_dp,
                    quantidade: quantidade
                })
            });
        }
    }


    return (

        <SafeAreaView >
        
            <TextInput
                name="rfid_dp"
                style={styles.input}
                onChangeText={(text)=>setRfid_dp(text)}
                value={rfid_dp}
                placeholder="codigo RFID"
                keyboardType="numeric"
            />
            <Text>{rfid_dp}</Text>
            <TextInput
                name="codigo_de_barras_cliente_dp"
                style={styles.input}
                onChangeText={(text)=>setCodigo_de_barras_cliente_dp(text)}
                value={codigo_de_barras_cliente_dp}
                placeholder="Codigo de barras"
                keyboardType="numeric"
            />

            <TextInput
                name="quantidade"
                style={styles.input}
                onChangeText={(text)=>setQuantidade(text)}
                value={quantidade}
                editable={false}
                keyboardType="numeric"
            />

            <TouchableOpacity onPress={downloadfromurl} style={styles.btnEnviar}>

                <Text style={styles.txt}>Enviar</Text>

            </TouchableOpacity>

            <View>

                <Text /><Text /><Text /><Text />

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
        marginTop: '-30%',
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
