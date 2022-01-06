import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native';

const YourApp = () => {
    const [history, setHistory] = useState('');
    const [result, setResult] = useState('');
    const arr = ['C', '±', '/', 'x', '7', '8', '9', '─', '4', '5', '6', '+', '1', '2', '3'];
    const getValue = (char) => setResult(pre => {
        if (char >= '0' && char <= '9' || char == '+' || char == '─' || char == 'x' || char == '/' || char == '.') {
            return pre + char;
        } else if (char == 'C') {
            return '';
        } else {
            return pre;
        }
    });
    const Caculate = () => {
        setHistory(result);
        let array = result.split(/([+,─,x,/])/);
        let ans = parseInt(array[0]);
        for (let i = 2; i < array.length; i++) {
            if (array[i] >= '0' && array[i] <= '9') {
                if (array[i - 1] == '+') {
                    ans = ans + parseInt(array[i]);
                } else if (array[i - 1] == '─') {
                    ans = ans - parseInt(array[i]);
                } else if (array[i - 1] == 'x') {
                    ans = ans * parseInt(array[i]);
                } else {
                    ans = ans / parseInt(array[i]);
                }
            }
        }
        setResult(ans);
    }

    return (
        <ImageBackground source={require('../assets/background_caculator.jpg')} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.container}>
                <View style={styles.screen}>
                    <Text style={styles.history}>{history}</Text>
                    <Text style={styles.result}>{result}</Text>
                </View>
                <View style={styles.content}>
                    {arr.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.button}
                                onPress={() => getValue(item)}
                            >
                                <Text style={styles.text}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    <TouchableOpacity
                        style={styles.buttonEQ}
                        onPress={Caculate}
                    >
                        <Text style={styles.textEQ}>=</Text>
                    </TouchableOpacity>
                    <View style={styles.PstView}>
                        <TouchableOpacity style={{ width: 60 }} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => getValue('0')}
                        >
                            <Text style={styles.text}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => getValue('.')}
                        >
                            <Text style={styles.text}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 60 }} />
                    </View>
                </View>
            </View >
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        padding: 30,
        justifyContent: 'center'
    },
    container: {
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    screen: {
        paddingVertical: 20,
    },
    history: {
        color: '#636e72',
        textAlign: 'right',
        fontSize: 18,
    },
    result: {
        color: '#636e72',
        textAlign: 'right',
        fontSize: 55,
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: "#f1f2f6",
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#636e72',
        fontSize: 25,
    },
    PstView: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    buttonEQ: {
        height: 120,
        width: 70,
        borderRadius: 35,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fab1a0',
    },
    textEQ: {
        color: 'white',
        fontSize: 35,
        paddingBottom: 15
    },
})

export default YourApp;