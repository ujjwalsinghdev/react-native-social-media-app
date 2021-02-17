import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import Post from "./Post/Post"
import Stories from "../components/Stories"

const data = [
  {
    user: {
      imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Lisa"
    },
    imageUri:
      "https://images.pexels.com/photos/158465/waterlily-pink-water-lily-water-plant-158465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "The Buddha Lotus #recreateinsta",
    likesCount: 1234,
    postedAt: "6 min ago"
  },
  {
    user: {
      imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Lisa"
    },
    imageUri:
      "https://images.pexels.com/photos/158465/waterlily-pink-water-lily-water-plant-158465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "The Buddha Lotus #recreateinsta",
    likesCount: 1234,
    postedAt: "6 min ago"
  },
  {
    user: {
      imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Lisa"
    },
    imageUri:
      "https://images.pexels.com/photos/158465/waterlily-pink-water-lily-water-plant-158465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "The Buddha Lotus #recreateinsta",
    likesCount: 1234,
    postedAt: "6 min ago"
  }
]

const Feed = () => {
  return <FlatList ListHeaderComponent={Stories} data={data} renderItem={({ item }) => <Post post={item} />} />
}

export default Feed

const styles = StyleSheet.create({})
