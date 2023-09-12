import { View, TextInput, StyleSheet, Button, Alert, Modal } from 'react-native'
import React, { useState } from 'react'

const AddTask = ({handleAddTaskButton}) => {

    const [task,setTask] = useState("")
    const [taskList,setTaskList] = useState([])


    const handleInputValue = (inputTask) =>{
        setTask(inputTask);
    }

    const addTask = () =>{
        if(!task){
            return Alert.alert("Please Add Task")
        }

        handleAddTaskButton(task);
    }


  return (
    <Modal>
    <View style={styles.inputContainer}>
        <TextInput onChangeText={handleInputValue} style={styles.inputBox} placeholder='Add Your Tasks'/>
        <View style={styles.btnGroup}>
            <View>
                <Button onPress={addTask} title='Add Task'/>
            </View>
            <View>
                <Button  title='Cancel'/>
            </View>
        </View>
      </View>
      </Modal>
  )
}


const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
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

    btnGroup:{
        flexDirection:"row",
        marginTop:20,
    }
})

export default AddTask