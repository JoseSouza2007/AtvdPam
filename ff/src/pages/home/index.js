import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navegacao = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Tela HOME</Text>
            <Button title='Ir para Fotos' onPress={() => navegacao.navigate('Fotos')} />
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
        justifyContent: 'center',
    },
});