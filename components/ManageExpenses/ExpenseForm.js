import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../../UI/Button";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel,curData, defaultValues }) {
    const [inputValues, setAmountValue] = useState({
        amount: defaultValues? defaultValues.amount.toString() : '',
        date: defaultValues? defaultValues.date.toString() : '',
        description: defaultValues? defaultValues.description.toString() : ''

    })

    function amountChangeHandler(inputIdentifier, enteredValue) {
        setAmountValue((curInputValues) => {

            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    };
    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date).toString(),
            description: inputValues.description
        };
        onSubmit(expenseData)
    }

    return <View style={styles.form}>
        <Text style={styles.title} >Your Expense</Text>
        <View style={styles.inputsRow} >
            <Input
                style={styles.rowInput}
                label='Amount'
                textInputConfig={{
                    placeholder: curData && `${curData.amount}` ,
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangeHandler.bind(this, 'amount'),
                    value: inputValues["amount"],
                }} />


            <Input
                style={styles.rowInput}
                label='date'
                textInputConfig={{
                    placeholder: curData && `${curData.date}` ,
                    maxLength: 10,
                    onChangeText: amountChangeHandler.bind(this, 'date'),
                    value: inputValues['date']
                }} />
        </View>
        <Input label='Description' textInputConfig={{
            placeholder: curData && `${curData.description}` ,
            multiline: true,
            textAlignVertical:'top',
            // autocorrect: false,
            onChangeText: amountChangeHandler.bind(this, 'description'),
            value: inputValues['description']
        }} />
        <View style={styles.buttons} >
            <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel ? 'Update' : "Add"}</Button>
        </View>
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
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
})