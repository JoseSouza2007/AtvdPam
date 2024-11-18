import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Fotos() {
    const navegacao = useNavigation();
    return (
        <View style={styles.container}>
            <Image
            source={require('./img/saitama.png')}
            />
            <Text>Página Fotos</Text>
            <Button title='Voltar para Home' onPress={() => navegacao.navigate('Home')} />
            <Button title='Ir para Localização' onPress={() => navegacao.navigate('localizacao')} />
            <Button title='Ir para Cadastro' onPress={() => navegacao.navigate('cadastro')} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});