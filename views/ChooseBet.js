import React from 'react';
import { View, Text, Image, StyleSheet, Picker, Pressable } from 'react-native';

const ChooseBet = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.betContent}>
                <Image 
                style={styles.betImage}
                source={require('../assets/Dama.png')}
                />
                <Text style={styles.title}>DAMA</Text> 
                <Picker style={styles.betValue}>
                    <Picker.Item label="R$0,50" value="0,50"></Picker.Item>
                    <Picker.Item label="R$1,00" value="1,00"></Picker.Item>
                    <Picker.Item label="R$1,50" value="1,50"></Picker.Item>
                    <Picker.Item label="R$2,00" value="2,00"></Picker.Item>
                </Picker> 
                <Text style={styles.labelBetReturn}>Você irá receber</Text>   
                <Text style={styles.betReturn}>+R$0,90 </Text> 
                <Pressable style={styles.btnConfirmChoice} /* onPress={} */>
                    <Text style={styles.textBtnConfirmChoice}>Desafiar Adversário</Text>
                </Pressable>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    betContent: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'start',
        width: 300,
    },
    betImage: {
        position: 'absolute',
        opacity: 0.1,
        flex: 1,
        top: 0,
        height: 400,
        width: 300,
    },
    title: {
        color: '#ffffff',
        paddingTop: 150,
        fontSize: 64,
        fontWeight: 'bold',
        letterSpacing: 10,
    },
    betValue: {
        width: 250,
        fontSize: 32,
        height: 70,
        marginTop: 125,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 35,
    },
    labelBetReturn: {
        color: '#ffffff',
        marginTop: 30,

    },
    betReturn: {
        color: '#28CE2F',
        fontSize: 36,
        fontWeight: 'bold',
    },
    btnConfirmChoice: {
        width: 250,
        marginTop: 20,
        height: 50,
        backgroundColor: '#286ACE',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnConfirmChoice: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default ChooseBet;