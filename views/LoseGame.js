import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const LoseGame = () => {
    const imgDama = require('../assets/dama.png');
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Dama</Text>
            <Image
                style={styles.image}
                source={imgDama}
                
            />
                <Text style={styles.message}>Não foi dessa vez</Text>
            <Pressable style={styles.buttonRematch} /* onPress={onPress} */>
                <Text style={styles.textBtn}>Revanche</Text>
            </Pressable>
            <Pressable style={styles.buttonEnd} /* onPress={onPress} */>
                <Text style={styles.textBtn}>Finalizar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8baafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginVertical: 20,
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 40,
        color: '#ffffff',
    },
    message: {
        fontSize: 24,
        color: '#ffffff',
    },
    textBtn: {
        fontSize: 18,
    },
    buttonRematch: {
        backgroundColor: '#FDC500',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        marginTop: 40,
        marginVertical: 10,
        width: 110,
        elevation: 3,
    },
    buttonEnd: {
        backgroundColor: '#1463AC',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        borderRadius: 15,
        width: 110,
        elevation: 3,
    },
});

export default LoseGame;