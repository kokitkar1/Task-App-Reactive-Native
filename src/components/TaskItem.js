import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'

const TaskItem = ({index, item, handleDelete}) => {
  return (
    <Pressable android_ripple={{color:"red"}} onPress={handleDelete.bind(this, item.id)}>
      <Text style={styles.taskItem} >{index +1}:{item.task}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    taskItem:{
        margin:5,
        padding:15,
        borderRadius:10,
        backgroundColor: "lightblue",
        color:"black",
    }
})

export default TaskItem