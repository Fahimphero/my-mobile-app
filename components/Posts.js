import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native'
import Countries from './Countries';
import Forms from './Forms';
import Post from './Post';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const [text, onChangeText] = React.useState('      ');
    const [text2, onChangeText2] = React.useState('      ');
    const [number, onChangeNumber] = React.useState(null);

    const handleAdd = () => {
        console.log(text)
        console.log(text2)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: text,
                body: text2,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())

            .then(data => {
                console.log(data)
                setPosts(() => [...posts, data])

            })
            .catch(err => {
                console.log(err)
            })

    }

    const onDelete = async (id) => {

        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.status !== 200) {
                    return
                }
                else {
                    setPosts(posts.filter((post) => {
                        return post.id !== id;
                    }))
                }

            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <View>
            <ScrollView>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText2}
                        value={text2}
                    />
                    <Button onPress={handleAdd} title="Add"></Button>
                </SafeAreaView>
                {/* <Countries></Countries> */}
                <Forms></Forms>
                <Text> Posts {posts.length} </Text>
                {
                    posts.map(post => <Post onDelete={onDelete} key={post.id} post={post}></Post>)
                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});