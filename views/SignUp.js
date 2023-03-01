import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const SignUp = () => {
    const [login, setLogin] = React.useState('');
    const [passwd, setPasswd] = React.useState('');

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
                    defaultValue={login}
                    />
            </View>
            <View style={styles.InputBox}>
                <Text style={styles.labelText}>Seu email</Text>
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
            <View style={styles.InputBox}>
                <Text style={styles.labelText}>Confirmar senha</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="********"
                    onChangeText={newPass => setPasswd(newPass)}
                    defaultValue={passwd}
                    />
            </View>
            <View style={styles.btnBox}>
            <Pressable style={styles.buttonBack} /* onPress={onPress} */>
                <Text style={styles.textBtn}>Voltar</Text>
            </Pressable>
            <Pressable style={styles.button} /* onPress={onPress} */>
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