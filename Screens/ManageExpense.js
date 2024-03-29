import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";
import { deleteExpense, updateExpense, addExpense } from "../store/expenses";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";



function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const expensesRedux = useSelector((state) => state.currentExpenses.expenseData);
    const selectedExpense = expensesRedux.find((expense)=>expense.id=== editedExpenseId);


    const dispatch = useDispatch();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        });
    }, [navigation, isEditing])

    function deleteExpenseHandler() {
        dispatch(deleteExpense({ id: editedExpenseId }));

        navigation.goBack();


    }
    function cancelHandler() {
        navigation.goBack();
    }
    function confirmHandler(data) {
        if (isEditing) {

            dispatch(updateExpense({ ...data, id: editedExpenseId }));
        } else {
            dispatch(addExpense({ ...data }))
        }
        navigation.goBack();
    }
    return (
        <View style={styles.container} >
            <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing} onSubmit={confirmHandler} defaultValues={selectedExpense} />

            {isEditing && (
                <View style={styles.deleteContaner} >
                    <IconButton
                        icon='trash'
                        color={GlobalStyles.colors.error500}
                        size={24}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    )
}
export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },

    deleteContaner: {
        marginTop: 16,
        paddingTop: 8,
        borderWidth: 2,
        borderRightColor: GlobalStyles.colors.primary800,
        borderLeftColor: GlobalStyles.colors.primary800,
        borderBottomColor: GlobalStyles.colors.primary800,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});