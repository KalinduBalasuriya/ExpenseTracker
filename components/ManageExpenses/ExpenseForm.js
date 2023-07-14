import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
    const [amountValue, setAmountValue]= useState('')

    function amountChangeHandler(enteredAmout) {
        setAmountValue(enteredAmout)
    }

    return <View style={styles.form}>
        <Text style={styles.title} >Your Expense</Text>
        <View style={styles.inputsRow} >
            <Input
                style={styles.rowInput}
                label='Amount'
                textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangeHandler,
                    value:amountValue,
                }} />


            <Input
                style={styles.rowInput}
                label='date'
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => { },
                }} />
        </View>
        <Input label='Description' textInputConfig={{
            multiline: true,
            // autocorrect: false,
        }} />
    </View>
}

export default ExpenseForm;

const styles = StyleSheet.create({

    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    form: {
        marginTop: 80
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    }
})