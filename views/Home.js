import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
    const imgPerfil = require('../assets/imgPerfilExample.png');
    return (
        <View style={styles.container}>
            <ScrollView style={styles.homeContent}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text>Voltar</Text>
                </Pressable>

                <View style={styles.perfil}>
                    <Image source={imgPerfil} style={styles.imagePerfil} />
                    <View style={styles.perfilName}>
                        <Text style={styles.textName}>Gabriel</Text>
                        <Text style={styles.textNickname}>@Gabriel.torres123</Text>
                    </View>
                </View>
                
                <View style={styles.balance}>
                    <Text style={styles.textBalance}>Meu saldo</Text>
                    <Text style={styles.balanceValue}>R$ 93,50</Text>
                </View>
                
                <View style={styles.balanceOptions}>
                    <Pressable style={styles.btnBalance1} onPress={() => navigation.navigate('Login')}>
                        <Icon name="balance-scale-left" size={15} color="#ffffff" />
                        <Text style={styles.textBtnBalance}>Depositar</Text>
                    </Pressable>
                    <Pressable style={styles.btnBalance2} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textBtnBalance}>Retirar</Text>
                        <Icon name="balance-scale-right" size={15} color="#ffffff" />
                    </Pressable>
                </View>

                <View style={styles.inviteFriends}>
                    <Text style={styles.textInviteFriends}>Convide um amigo para jogar com você na Bipix worth</Text>
                    <Pressable style={styles.btnInviteFriends}>
                        <Text style={styles.textBtnInviteFriends}>Convidar</Text>
                    </Pressable>
                </View>
            </ScrollView>
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
        paddingVertical: 30,
        borderWidth: 1,
        borderColor: '#373737',
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 300,
    },

    perfil: {
        gap: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePerfil: {
        marginVertical: 20,
        width: 80,
        height: 80,
        borderWidth: 5,
        borderRadius: 50,
        borderColor: '#286ACE',
    },
    perfilName: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'start',

    },
    textName: {
        color: '#373737',
        fontSize: 24,
        fontWeight: 'bold',
    },
    textNickname: {
        color: '#373737',
        fontSize: 12,
    },

    balance: {
        marginTop: 5,
    },
    textBalance: {
        color: '#373737',
        fontSize: 16,
    },
    balanceValue: {
        color: '#373737',
        fontSize: 24,
        fontWeight: 'bold',
    },
    balanceOptions: {
        alignSelf: 'center',
        width: '100%',
        height: 30,
        marginTop: 40,
        backgroundColor: '#373737',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
    },
    btnBalance1: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderRightWidth: 1,
        borderColor: '#777777',
        flex: 1,
        elevation: 3,
    },
    btnBalance2: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderRadius: 10,
        flex: 1,
        elevation: 3,
    },
    textBtnBalance: {
        color: '#ffffff',
    },

    inviteFriends: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'start',
        gap: 10,
        paddingHorizontal: 15,
    },
    textInviteFriends: {
        fontWeight: 'bold',
        color: '#373737',
    },
    btnInviteFriends: {
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        width: 110,
        backgroundColor: '#286ACE',
        elevation: 3,
    },
    textBtnInviteFriends: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        
        padding: 5,
        justifyContent: 'center',
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
