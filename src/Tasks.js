import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import TaskItem from './components/TaskItem.js'
import AddTask from './components/AddTask.js'

const Tasks = () => {

    const [task,setTask] = useState("")
    const [taskList,setTaskList] = useState([])

    
    const handleAddTaskButton = (task) =>{
        setTaskList((prevTask) => (
        [...prevTask,{task:task, id:Math.random().toString()}]
        ));
    }


    const handleDelete = (id) =>{
        setTaskList((currentList)=> currentList.filter((t) => t.id !== id))
    }



  return (
    <View style={styles.container}>
      <AddTask handleAddTaskButton={handleAddTaskButton} />

      
        <Text style={styles.border}></Text>
        {taskList.length > 0 ? (<Text style={styles.textTitle}>Your Tasks:</Text>) : (<Text style={styles.textTitle}>No Tasks</Text>)}
        
        
                <FlatList 
                data={taskList}
                renderItem={({item,index}) => <TaskItem handleDelete={handleDelete} item={item} index={index}/>}
                keyExtractor={(item,index) => {
                    return index
                }}
                />


                {/* <ScrollView>
                {taskList?.map((taskItem,index) => (
                    <Text style={styles.taskItem} key={index} >{taskItem}</Text>
                ))}
                </ScrollView> */}
      
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        paddingHorizontal:15,
    },

    textTitle:{
        fontSize:26,
        fontWeight:"bold",
        marginTop:10,
        color:"blue"
    },

    border:{
        borderBottomWidth:1,
        color:"#cccccc"
    },
})

export default Tasks