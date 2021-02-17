import React from "react"
import { StyleSheet, Text, View } from "react-native"

import Feed from "../components/Feed"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Feed></Feed>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})
