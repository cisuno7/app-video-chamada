import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Home = ({navigation}) => {
    const imgPerfil = require('../assets/imgPerfilExample.png');
    return (
        <View style={styles.container}>
            <View style={styles.homeContent}>
                <View style={styles.perfil}>
                    <Image source={imgPerfil} style={styles.imagePerfil} />
                    <View style={styles.username}>
                        <Text style={styles.text}>Gabriel</Text>
                        <Text style={styles.text}>@Gabriel</Text>
                    </View>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeContent: {
        flexDirection: 'column',
        backgroundColor: '#555555',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 300,
    },
    imagePerfil: {
        marginVertical: 20,
        width: 80,
        height: 80,
    },
    perfil: {
        flex: 1,
        flexDirection: 'row',
    },
    username: {
        flexDirection: 'column',
    },
    text: {
        color: '#FFFFFF',
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        width: 110,
        backgroundColor: '#286ACE',
        elevation: 3,
    },
});



export default Home;
