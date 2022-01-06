import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import { DataContext } from './DataContext';

export default function AddScreen(props) {
    const { data, setData } = useContext(DataContext);

    return (
        <Formik
            initialValues={{
                id: null,
                code: '',
                name: '',
                type: '',
                status: '',
                date: '',
                codeDt: '',
                job: '',
                foreman: '',
                engineer: '',
                location: '',
                effort: '',
                uom: '',
                rate: '',
                quantity: '',
                proposed: '',
                comment: ''
            }}
            onSubmit={(values) => {
                var today = new Date();
                var date = today.getDate() + ' ' + today.toDateString().split(' ')[1] + ' ' + today.getFullYear();

                values.date = date;
                values.id = data[data.length - 1].id + 1;

                setData([...data, values]);
                props.navigation.goBack();
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ marginTop: 20 }}>Code</Text>
                    <TextInput
                        onChangeText={handleChange('code')}
                        onBlur={handleBlur('code')}
                        value={values.code}
                        style={{ paddingHorizontal: 10, borderColor: 'grey', borderWidth: 1 }}
                    />
                    <Text style={{ marginTop: 20 }}>Name</Text>
                    <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        style={{ paddingHorizontal: 10, borderColor: 'grey', borderWidth: 1 }}
                    />
                    <Text style={{ marginTop: 20 }}>Type</Text>
                    <TextInput
                        onChangeText={handleChange('type')}
                        onBlur={handleBlur('type')}
                        value={values.type}
                        style={{ paddingHorizontal: 10, borderColor: 'grey', borderWidth: 1 }}
                    />
                    <Text style={{ marginTop: 20 }}>Status</Text>
                    <TextInput
                        onChangeText={handleChange('status')}
                        onBlur={handleBlur('status')}
                        value={values.status}
                        style={{ paddingHorizontal: 10, borderColor: 'grey', borderWidth: 1 }}
                    />
                    <TouchableOpacity onPress={handleSubmit} style={{ padding: 10, marginVertical: 20, backgroundColor: '#0984e3' }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}
