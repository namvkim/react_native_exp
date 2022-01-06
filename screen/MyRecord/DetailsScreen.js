import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyRecordDetails(props) {
    const item = props.route.params;
    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Records</Text>
                <Ionicons style={styles.headerIcon} name="chevron-back" size={24} color="black" onPress={() => { props.navigation.goBack() }} />
            </View>
            <View style={styles.body}>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>SOR Quantity Record No</Text>
                    <Text style={styles.rowContent}>{item.code}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>SOR Quantity Record Status</Text>
                    <Text style={styles.rowContent}>{item.type}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Job</Text>
                    <Text style={styles.rowContent}>{item.job}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Foreman</Text>
                    <Text style={styles.rowContent}>{item.foreman}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Engineer</Text>
                    <Text style={styles.rowContent}>{item.engineer}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Location</Text>
                    <Text style={styles.rowContent}>{item.location}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Total Effort</Text>
                    <Text style={styles.rowContent}>{item.effort}</Text>
                </View>
                <Text style={styles.detialsHeader}>Pay Item Details</Text>
                <View style={styles.detials}>
                    <Text style={styles.detialsHeader}>{item.codeDt}</Text>
                    <View style={styles.detialsRow}>
                        <Text style={styles.detailsTitle}>UoM</Text>
                        <Text style={styles.detailsTitle}>Rate</Text>
                    </View>
                    <View style={styles.detialsRow}>
                        <Text style={styles.detailsContent}>{item.uom}</Text>
                        <Text style={styles.detailsContent}>{'$' + item.rate + '.00'}</Text>
                    </View>
                    <View style={styles.detialsRow}>
                        <Text style={styles.detailsTitle}>Quantity *</Text>
                        <Text style={styles.detailsTitle}>Proposed Value</Text>
                    </View>
                    <View style={styles.detialsRow}>
                        <Text style={styles.detailsContent}>{item.quantity}</Text>
                        <Text style={styles.detailsContent}>{'$' + item.proposed + '.00'}</Text>
                    </View>
                    <View style={styles.detialsRow}>
                        <Text style={styles.detailsTitle}>Comments *</Text>
                    </View>
                    <View style={styles.detialsRow}>
                        <Text style={[styles.detailsContent, { width: '100%' }]}>{item.comment}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
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
        left: 20,
        bottom: 10,
    },
    body: {
        paddingHorizontal: 20
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center'
    },
    rowTitle: {
        flex: 3,
        color: 'grey',
    },
    rowContent: {
        flex: 7,
        paddingHorizontal: 10
    },
    detialsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20
    },
    detials: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 20,
        paddingHorizontal: 20
    },
    detialsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsTitle: {
        fontWeight: 'bold',
        width: '48%',
    },
    detailsContent: {
        fontWeight: 'bold',
        width: '48%',
        padding: 20,
        marginVertical: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'grey'
    }
})