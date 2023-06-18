import { View, Text, StyleSheet } from "react-native";

function ExpenseItem (){
    return(
     <View style={styles.expenseContainer}>
        <Text style={styles.text} >Expense 1</Text>
     </View>
    )
}

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseContainer:{
          marginHorizontal:30,
          marginVertical:12,
          padding:12,
          paddingHorizontal:19,
          paddingVertical:25,
          backgroundColor: '#6164fd',
          borderRadius: 6,
          elevation: 15,
          shadowColor:'#000000ff',
          shadowOpacity: 0.5,
          shadowRadius: 8,

    },
    text:{
        color:'white'
    }
})