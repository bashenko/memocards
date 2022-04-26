import { StyleSheet } from 'react-native'
import { Card } from './Card'


export const styles = StyleSheet.create({
  card: {
    height: 320,
    width: 240,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C1C1C1',
    borderWidth: 1,
    shadowOpacity: 0.2,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
  },
  cardOver: {
    height: 320,
    width: 240,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C1C1C1',
    borderWidth: 1,
    shadowOpacity: 0.2,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
  },
  face: {
    flex: 1,
    backgroundColor: 'red',
    width: 240,
    height: 320,
    borderRadius: 15,
  },
  back: {
    flex: 1,
    backgroundColor: 'blue',
    width: 240,
    height: 320,
    borderRadius: 15,
  },
  greenBtn:{
    color: 'green',
  },
  redBtn:{
    color: 'red',
  },

})
