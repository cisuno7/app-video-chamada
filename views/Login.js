import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import axios from 'axios';

const Login = ({navigation}) => {

    const [login, setLogin] = React.useState('');
    const [passwd, setPasswd] = React.useState('');

    const handleLogin = ({navigation}) => {
        const validLogin = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const validPass = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;

        if( !login || !passwd ) {
            Alert.alert('Preencha os campos','Todos os campos devem ser preenchidos.');
            console.log('Todos os campos devem ser preenchidos.');
        }
        if(validLogin.test(login) === false) {
            Alert.alert('Email','Formato do email incorreto.');
            console.log('Formato do email incorreto');
        }
        if(validPass.test(passwd) === false) {
            Alert.alert('Senha','A senha deve possuir 8 caracteres, sendo 1 letra maiúscula, 1 minúscula e 1 caractere especial.');
            console.log('A senha deve possuir no mínimo 8 caracteres, sendo 1 letra maiúscula e 1 minúscula.');
        }
        else {
            axios.post('/auth', {
                email: login,
                password: passwd
            }).then(response => {
                console.log(response.data);
                navigation.navigate('Home')
            }).catch(error => {
                console.log(error); 
            });
        }
      };
      
    
    return (
    <View style={styles.container}>
        <View style={styles.FormLogin}>
            <Text style={styles.labelText}>BIPIX LOGO</Text>
            <View style={styles.InputBox}>
                <Text style={styles.labelText}>Login</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="example@example.com"
                    onChangeText={newLogin => setLogin(newLogin)}
                    defaultValue={login}
                    />
            </View>
            <View style={styles.InputBox}>
                <Text style={styles.labelText}>Senha</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="********"
                    onChangeText={newPass => setPasswd(newPass)}
                    defaultValue={passwd}
                    />
            </View>
            <View style={styles.btnBox}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.textBtn}>Criar conta</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleLogin} >
                <Text style={styles.textBtn}>Entrar</Text>
            </Pressable>
            </View>
        </View>
    </View>
    );
};


  




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353535',
        alignItems: 'center',
        justifyContent: 'center',
    },
    FormLogin: {
        flexDirection: 'column',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 300,
    },
    InputBox: {
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#286ACE',
        color: '#ffffff',
        borderWidth: 3,
        padding: 10,
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    labelText: {
        color: '#FFFFFF',
        marginVertical: 10,
        fontSize: 18,
        alignSelf: 'start',
    },
    textBtn: {
        color: '#FFFFFF',
        fontSize: 18,
        marginVertical: 10,
        alignSelf: 'center',
    },
    btnBox: {
        height: 40,
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
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



export default Login;
