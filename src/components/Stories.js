import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import Story from "./Story"

const data = [
  {
    imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Lisa"
  },
  {
    imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Misa"
  },
  {
    imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Disa"
  },
  {
    imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Bhisa"
  },
  {
    imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Kisa"
  },
  {
    imageUri: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "SISA"
  }
]

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      keyExtractor={({ name }) => name}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
    ></FlatList>
  )
}

export default Stories

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  }
})
