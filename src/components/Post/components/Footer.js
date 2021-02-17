import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Footer = ({ likesCount, caption, postedAt }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likesCount} likes</Text>
      <Text>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  likes: {
    fontWeight: "bold",
    margin: 3
  },
  caption: {
    margin: 3
  },
  postedAt: {
    color: "#8c8c8c"
  }
})
