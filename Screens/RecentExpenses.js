import { Text } from "react-native";
import ExpenseOutput from "../components/ExpensesOutput/ExpenseOutput";
function RecentExpenses(){
return (
    <ExpenseOutput expensePeriod="Last 7 days" />
)
}
export default RecentExpenses;