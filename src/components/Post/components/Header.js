import React from "react"
import { StyleSheet, Text, View } from "react-native"
import ProfilePicture from "../../ProfilePictures"

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container} >
      <ProfilePicture size={40} uri={imageUri}></ProfilePicture>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
  },
  name:{
    alignSelf:"center",
    fontWeight:"bold",
    color:"#3c3c3c"
  }
})
