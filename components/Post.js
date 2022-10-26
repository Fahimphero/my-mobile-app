import React from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native'

export default function Post({ post, onDelete }) {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    const handleDelete = () => {
        onDelete(post.id)
        console.log(post.id)
    }

    return (
        <View style={[styles.card, styles.shadowProp]}>

            <Text><Text style={styles.container}>User ID: </Text> {post.userId}</Text>
            <Text style={styles.mainContainer}> <Text style={[styles.container, styles.heading]}>Post Title:</Text>   {post.title}</Text>
            <Text style={styles.mainContainer}> <Text style={styles.container}>Post Body:</Text>   {post.body}</Text>
            <Button onPress={handleDelete} title="Delete"></Button>
            {/* <Button title="Create"></Button> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: 'red'
    },

    mainContainer: {
        width: '75%',
    }
    ,
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },

    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});