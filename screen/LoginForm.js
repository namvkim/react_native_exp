import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Image, Text, View } from 'react-native';
import LinkedSite from '../assets/linkedsite.png';

export const YourApp = ({ navigation }) => {
    const [data, setData] = useState({ email: '', password: '' });

    const onPress = () => {
        alert('press !!!');
    }
    return (
        <View style={styles.container}>
            <Image source={LinkedSite} style={styles.image} />
            <Text>Acciona Account Users(eg. @acciona, @colemanrail etc.) > Sign in with your corporate ID</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.btnText}>AccionaCorporateLogin</Text>
            </TouchableOpacity>
            <View style={styles.line}>
                <View style={styles.lineItem}></View>
                <Text style={styles.lineTxt}>OR</Text>
                <View style={styles.lineItem}></View>
            </View>
            <Text style={styles.txt1}>All Other Users > Use the login form below</Text>
            <Text style={styles.txt2}>Email</Text>
            <TextInput style={styles.input} placeholder='name@host.com' value={data.email} onChangeText={(value) => { setData({ ...data, email: value }) }}></TextInput>
            <Text style={styles.txt2}>Password</Text>
            <TextInput style={styles.input} placeholder='Password' value={data.password} onChangeText={(value) => { setData({ ...data, password: value }) }}></TextInput>
            <Text style={styles.txt3}>Forgot your password?</Text>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#0c2461' }]} onPress={() => navigation.navigate('DrawerScreen', data)}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.txt4}>Forgot your password or having trouble signing in ?</Text>
            <Text style={styles.txt4}>Contact the Service Desk on: <Text style={styles.txt5}>(03) 9624 4236</Text></Text>
            <Text style={styles.txt4}>Raise an incident via <Text style={styles.txt5}>Service Now Portal</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 10,
    },
    button: {
        width: '100%',
        backgroundColor: '#d63031',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20
    },
    btnText: {
        fontSize: 16,
        color: 'white',
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    lineItem: {
        flex: 1,
        height: 1,
        borderWidth: 1,
        borderColor: '#bdc3c7',
    },
    lineTxt: {
        fontSize: 16,
        color: '#bdc3c7',
        paddingHorizontal: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#dfe4ea',
        width: '100%',
        paddingVertical: 5,
        paddingLeft: 20,
        color: 'black'
    },
    txt1: {
        width: '100%'
    },
    txt2: {
        fontWeight: 'bold',
        width: '100%'
    },
    txt3: {
        width: '100%',
        textAlign: 'right'
    },
    txt4: {
        paddingVertical: 3
    },
    txt5: {
        fontWeight: 'bold',
        color: '#d63031',
    }
})

export default YourApp;