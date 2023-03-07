import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import BalanceIcon from 'react-native-vector-icons/FontAwesome5';
import Share from 'react-native-vector-icons/EvilIcons';
import Search from 'react-native-vector-icons/Ionicons';

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
                        <BalanceIcon name="balance-scale-left" size={15} color="#ffffff" />
                        <Text style={styles.textBtnBalance}>Depositar</Text>
                    </Pressable>
                    <Pressable style={styles.btnBalance2} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textBtnBalance}>Retirar</Text>
                        <BalanceIcon name="balance-scale-right" size={15} color="#ffffff" />
                    </Pressable>
                </View>

                <View style={styles.inviteFriends}>
                    <Text style={styles.textInviteFriends}>Convide um amigo para jogar com você na Bipix worth</Text>
                    <Pressable style={styles.btnInviteFriends}>
                        <Text style={styles.textBtnInviteFriends}>Convidar</Text>
                        <Share name="share-google" size={20} color="#ffffff" />
                    </Pressable>
                </View>

                <View style={styles.searchGames}>
                    <TextInput 
                        style={styles.searchInput}
                        placeholder="Ex: Truco"
                        /* onChangeText={newUser => setLogin(newUser)}
                        defaultValue={} */
                        />
                    <Search name="search" size={20} color="#222222" />
                </View>

                <View style={styles.gamesMenu}>
                    <Text style={styles.gamesTitle}>JOGOS BIPIX WORTH</Text>
                    <View style={styles.modeOptions}>
                        <Pressable style={styles.btnVsFriends} /* onPress={() => navigation.navigate('Login')} */ >
                            <Text style={styles.textBtnVsFriends}>Contra amigos</Text>
                        </Pressable>
                        <Pressable style={styles.btnAdventure} /* onPress={() => navigation.navigate('Login')} */ >
                            <Text style={styles.textBtnAdventure}>Modo aventura</Text>
                        </Pressable>
                    </View>

                    <View style={styles.gamesBox}>
                        <View style={styles.gamesItem}>
                            <Image
                                style={styles.gamesImage}
                                source={require('../assets/Dama.png')}
                            />
                            <Pressable style={styles.btnPlay} /* onPress={() => navigation.navigate('Login')} */ >
                                <Text style={styles.textBtnPlay}>Jogar</Text>
                            </Pressable>
                        </View>
                        <View style={styles.gamesItem}>
                            <Image
                                style={styles.gamesImage}
                                source={require('../assets/Baralho.png')}
                            />
                            <Pressable style={styles.btnPlay} /* onPress={() => navigation.navigate('Login')} */ >
                                <Text style={styles.textBtnPlay}>Jogar</Text>
                            </Pressable>
                        </View>
                        <View style={styles.gamesItem}>
                            <Image
                                style={styles.gamesImage}
                                source={require('../assets/Truco.png')}
                            />
                            <Pressable style={styles.btnPlay} /* onPress={() => navigation.navigate('Login')} */ >
                                <Text style={styles.textBtnPlay}>Jogar</Text>
                            </Pressable>
                        </View>
                        <View style={styles.gamesItem}>
                            <Image
                                style={styles.gamesImage}
                                source={require('../assets/Xadrez.png')}
                            />
                            <Pressable style={styles.btnPlay} /* onPress={() => navigation.navigate('Login')} */ >
                                <Text style={styles.textBtnPlay}>Jogar</Text>
                            </Pressable>
                        </View>
                    </View>
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
        paddingHorizontal: 20,
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
        borderLeftWidth: 1,
        borderColor: '#777777',
        paddingHorizontal: 10,
        flex: 1,
        elevation: 3,
    },
    textBtnBalance: {
        color: '#ffffff',
    },

    inviteFriends: {
        marginTop: 20,
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
        justifyContent: 'center',
        borderRadius: 10,
        width: 'max-content',
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#286ACE',
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textBtnInviteFriends: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,   
        alignSelf: 'center',   
        justifySelf: 'center',
    },
    
    searchGames: {
        marginTop: 30,
        borderColor: '#222222',
        borderWidth: 3,
        borderRadius: 17,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 4,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        outline: 'none',
    },

    gamesMenu: {
        marginTop: 30,
    },
    gamesTitle: {
        color: '#286ACE',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modeOptions: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    btnVsFriends: {
        backgroundColor: '#286ACE',
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        borderRadius: 15,
        alignItems: 'center',
        flex: 1,
        padding: 5,
    },
    textBtnVsFriends: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    btnAdventure: {
        backgroundColor: '#373737',
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderRadius: 15,
        alignItems: 'center',
        padding: 5,
        flex: 1,
    },
    textBtnAdventure: {
        color: '#ffffff',
        fontWeight: 'bold',
    },

    gamesBox: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1,
    },
    gamesItem: {
        width: '45%',
        gap: 10,
        justifyContent: 'center',
        marginVertical: 15,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    btnPlay: {
        backgroundColor: '#373737',
        borderRadius: 15,
        alignItems: 'center',
        padding: 5,
        width: '80%',
    },
    textBtnPlay: {
        color: '#ffffff',
    },
    gamesImage: {
        width: 80,
        height: 80,
    },
});



export default Home;
