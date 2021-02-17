import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

const ProfilePicture = ({ uri, size = 70 }) => {
  return (
    <View style={[styles.container, { width: size + 6, height: size + 6 }]}>
      <Image source={{ uri }} style={[styles.image, { width: size, height: size }]}></Image>
    </View>
  )
}

export default ProfilePicture

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 50,
    borderColor: "#ae22e0",
    borderWidth: 3
  },

  image: {
    borderRadius: 50,
    borderColor: "#ffffff",
    borderWidth: 1
  }
})
