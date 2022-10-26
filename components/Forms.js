import { Formik, Field, Form } from 'formik';
import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { globalStyles } from './styles/styles';




export default function Forms() {
    return (
        <View >
            <Text>This is a form</Text>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(props) => {
                    <View >
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        >
                        </TextInput>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        >
                        </TextInput>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Rating(1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        >
                        </TextInput>
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}></Button>
                    </View >
                }}
            </Formik>
        </View>
    )
}


