import React from 'react'
import { View, Text, Button } from 'react-native'

import { styles } from './styles'


const CardCmp = () => {
  
  return (
    <View style={styles.card}>
        <Text style={styles.text}>Die Freiheit</Text> 
        <Button title="Flip" />
    </View>
  )
}

export const Card = CardCmp
