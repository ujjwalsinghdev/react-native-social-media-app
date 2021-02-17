import React from "react"
import { StyleSheet, Text, View, Image ,Dimensions} from "react-native"

const Body = ({ imageUri }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: imageUri }}></Image>
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    borderWidth: 1
  }
})
