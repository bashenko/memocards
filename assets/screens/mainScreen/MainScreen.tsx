import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from '../card/Card'

import { styles } from './styles'



const MainScreenCmp = () => {
  
  return (
    <View style={styles.container}>
        <Card></Card>
    </View>
  )
}

export const MainScreen = MainScreenCmp
