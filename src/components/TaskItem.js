import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskItem = ({index, item}) => {
  return (
    
      <Text style={styles.taskItem} >{index +1}:{item}</Text>
    
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