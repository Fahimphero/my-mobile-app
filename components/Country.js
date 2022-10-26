import React from 'react'
import { View, Text } from 'react-native'

export default function Country({ country }) {
    return (
        <View>
            <Text>Country {country.name.common}</Text>
        </View>
    )
}