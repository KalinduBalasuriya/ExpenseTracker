
import { View, Text, StyleSheet, Button } from "react-native";
import Title from "../components/Title";
import ExpenseItem from "../components/ExpenseItem";
import { FlatList } from "react-native-gesture-handler";
import {  useLayoutEffect, useState } from "react";
import AddExpenseScreen from "./AddExpenseScreen";

function AllExpenses({navigation}) {

    const [modalIsVisible, setModalIsVisible] = useState(false)
   
    function addButtonHandler(){
          navigation.navigate("Add_Expense")

          
    }

    useLayoutEffect(()=>{
          navigation.setOptions({
            headerRight:()=>{
                return <Button title ='Tap me'
                onPress={addButtonHandler}/>
            }
          })
    })

    return (
        <View style={styles.container} >
        <Text>Hi</Text>  
        </View>
        
    )
}
export default AllExpenses;

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'column'
    },

})


