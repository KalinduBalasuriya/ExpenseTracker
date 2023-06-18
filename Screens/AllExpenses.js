
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import ExpenseItem from "../components/ExpenseItem";

function AllExpenses() {
    return (
        <View style={styles.container} >
            <Title />
            <ExpenseItem/>
            <ExpenseItem/>
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


