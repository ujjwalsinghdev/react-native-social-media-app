import React from "react"
import { StyleSheet, Text, View } from "react-native"

import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

const Post = ({ post }) => {
  return (
    <View>
      <Header style={styles.header} imageUri={post.user.imageUri} name={post.user.name}></Header>
      <Body imageUri={post.imageUri}></Body>
      <Footer likesCount={post.likesCount} caption={post.caption} postedAt={post.postedAt}></Footer>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})
