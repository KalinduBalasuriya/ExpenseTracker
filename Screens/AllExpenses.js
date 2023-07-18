import ExpenseOutput from "../components/ExpensesOutput/ExpenseOutput";
import { useSelector } from "react-redux"
import { getFormattedDate } from "../util/date";

function AllExpenses(){
    const expenseRedux = useSelector((state)=>state.currentExpenses.expenseData);
    
    
    
return (
    <ExpenseOutput expenses={expenseRedux} expensePeriod="Total" />
)
}
export default AllExpenses;