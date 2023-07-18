import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { View ,StyleSheet} from "react-native";





function ExpenseOutput({expenses, expensePeriod}) {
    
    
    
    return (
        <View style={styles.containr} >
            <ExpensesSummary expenses ={expenses} periodName={expensePeriod}/>
            <ExpensesList expenses ={expenses} />
        </View>
    )
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    containr:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        backgroundColor:GlobalStyles.colors.primary700,

    }
})