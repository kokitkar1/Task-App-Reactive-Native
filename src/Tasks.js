import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'

const Tasks = () => {

    const [task,setTask] = useState("")
    const [taskList,setTaskList] = useState([])

    const handleInputValue = (inputTask) =>{
        setTask(inputTask);
    }

    const handleAddTaskButton = () =>{
        setTaskList((prevTask) => (
        [...prevTask,task]
        ));
    }



  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleInputValue} style={styles.inputBox} placeholder='Add Your Tasks'/>
        <Button onPress={handleAddTaskButton} title='Add Task'/>
      </View>

      
        <Text style={styles.border}></Text>
        <Text style={styles.textTitle}>Your Tasks:</Text>
        
                <FlatList 
                data={taskList}
                renderItem={({item,index}) => {
                    return(<Text style={styles.taskItem} >{index +1}:{item}</Text>)
                }}
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
        paddingHorizontal:15
    },

    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },

    inputBox:{
        width:"75%",
        borderWidth:1,
        borderColor:"#cccccc",
        borderRadius:10,
        padding:5,
        paddingLeft:15
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

    taskItem:{
        margin:5,
        padding:15,
        borderRadius:10,
        backgroundColor: "lightblue",
        color:"black",
    }
})

export default Tasks