import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'

import { styles } from './styles'


// tutorial: https://youtu.be/LlvBzyy-558
const CardCmp = () => {

  // let counter = 0;
  const [counter, setCounter] = useState('false');

  
  const increment=()=>{
    setCounter(!counter);
    console.log('counter: ', counter);
  }
  
  return (
    <View style={counter ? styles.card : styles.cardOver}>
      <Text>{counter.toString()}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="color" onPress={increment}  />  
      <Button title="color" onPress={increment} />  
    </View>
  )
}


export const Card = CardCmp
