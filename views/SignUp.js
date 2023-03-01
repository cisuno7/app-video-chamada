import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import axios from 'axios';


const SignUp = () => {
    const [username, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    
    const handleSignUp = () => {
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const validSenha = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;

        if(!username || !email || !password || !confirmPassword ) {
            Alert.alert('Preencha os campos','Todos os campos devem ser preenchidos.');
            console.log('Todos os campos devem ser preenchidos.');
        }
        if(validEmail.test(email) === false) {
            Alert.alert('Email','Formato do email incorreto.');
            console.log('Formato do email incorreto');
        }
        if(validSenha.test(password) === false) {
            Alert.alert('Senha','A senha deve possuir 8 caracteres, sendo 1 letra maiúscula, 1 minúscula e 1 caractere especial.');
            console.log('A senha deve possuir no mínimo 8 caracteres, sendo 1 letra maiúscula e 1 minúscula.');
        }
        if(confirmPassword !== password) {
            Alert.alert('Senha','As senhas devem ser iguais.');
            console.log('senhas diferentes');
        }
        else {
            axios.post('http://localhost:3000/signup', {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
            }).then(response => {
                console.log(response.data); // ou exiba uma mensagem de sucesso
            }).catch(error => {
                console.error(error);
            });
        }
        
    };

    
    return ( 
    <View style={styles.container}>
        <View style={styles.FormLogin}>
            <Text style={styles.labelText}>BIPIX LOGO</Text>
            <View style={styles.InputBox}>
                <Text style={styles.labelText}>Seu nome</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Ex: Gabriel Torres"
                    onChangeText={newLogin => setLogin(newLogin)}
                    defaultValue={username}
                    />
            </View>
            <View style={styles.InputBox}>
                <Text style={styles.labelText}>Seu email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="example@example.com"
                    onChangeText={newEmail => setEmail(newEmail)}
                    defaultValue={email}
                    />
            </View>
            <View style={styles.InputBox}>
                <Text style={styles.labelText}>Senha</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="********"
                    onChangeText={newPass => setPassword(newPass)}
                    defaultValue={password}
                    />
            </View>
            <View style={styles.InputBox}>
                <Text style={styles.labelText}>Confirmar senha</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="********"
                    onChangeText={newPassConfirm => setConfirmPassword(newPassConfirm)}
                    defaultValue={confirmPassword}
                    />
            </View>
            <View style={styles.btnBox}>
            <Pressable style={styles.buttonBack} /* onPress={onPress}*/ >
                <Text style={styles.textBtn}>Voltar</Text>
            </Pressable>
            <Pressable style={styles.button}  onPress={handleSignUp} >
                <Text style={styles.textBtn}>Criar conta</Text>
            </Pressable>
            </View>
        </View>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    FormLogin: {
        flexDirection: 'column',
        backgroundColor: '#353535',
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
        borderColor: '#28CE2F',
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
        backgroundColor: '#28CE2F',
        elevation: 3,
    },
    buttonBack: {
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        width: 110,
        backgroundColor: '#444141',
        elevation: 3,
    },
});

 
export default SignUp;