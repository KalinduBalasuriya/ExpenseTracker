import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../UI/Button";

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        });
    }, [navigation, isEditing])

    function deleteExpenseHandler() {

    }
     function cancelHandler(){

     }
     function confirmHandler(){

     }
    return (
        <View style={styles.container} >
            <View style={styles.buttons} >
                <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ?'Update' : "Add"}</Button>
            </View>
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
    buttons:{
        flexDirection:'row',
        justifyContent:'center',
    },
    button:{
       minWidth:120,
       marginHorizontal:8,
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