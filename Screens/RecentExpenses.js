import { Text } from "react-native";
import ExpenseOutput from "../components/ExpensesOutput/ExpenseOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays, getFormattedDate } from "../util/date";

function RecentExpenses() {

    expenseredux = useSelector((state) => state.currentExpenses.expenseData)
    const dates = expenseredux.map((item) => {
        item.date = new Date(item.date);
        return item
    }
    )
    // const formatDate = getFormattedDate(dates[0].date)
    console.log(dates);
     const recentExpenses = dates.filter((item)=>{
        const today = new Date();
        date7DaysAgo = getDateMinusDays(today, 7)

        return item.date >= date7DaysAgo && item.date <= today 
     })

    return (
        <ExpenseOutput expenses={recentExpenses} />


    )
}
export default RecentExpenses;