import React from "react"
import { StyleSheet, Text, View } from "react-native"
import ProfilePicture from "./ProfilePictures"

const Story = ({ imageUri, name }) => {
  return (
    <View>
      <ProfilePicture uri={imageUri}></ProfilePicture>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

export default Story

const styles = StyleSheet.create({
  name: {
    textAlign: "center"
  }
})
