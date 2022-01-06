import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { DataContext } from './DataContext';

export default function MyRecordScreen({ navigation }) {
    const { data } = useContext(DataContext);

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Records</Text>
                <Ionicons style={styles.headerIcon} name="add-circle-outline" size={24} color="black" onPress={() => { navigation.navigate('AddScreen') }} />
            </View>
            <View style={styles.body}>
                {
                    data.map((item) => {
                        return <TouchableOpacity
                            style={styles.item}
                            key={item.id}
                            onPress={() => navigation.navigate('DetailsScreen', item)}
                        >
                            <View style={styles.row}>
                                <Text style={styles.rowTitle}>{item.code}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Entypo name="warning" size={18} color="orange" />
                                    <Text style={[styles.rowTitle, { color: 'blue' }]}>{item.status}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowDes}>{item.name}</Text>
                                <Text style={[styles.rowDes, { color: 'grey' }]}>{item.date}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowDes}>{item.type}</Text>
                                <Text style={[styles.rowDes, { color: 'red' }]}>{item.codeDt}</Text>
                            </View>
                        </TouchableOpacity>
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    headerTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    headerIcon: {
        position: 'absolute',
        right: 20,
        bottom: 10,
    },
    body: {
        paddingHorizontal: 20
    },
    item: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    rowDes: {
        fontSize: 14
    }
})
