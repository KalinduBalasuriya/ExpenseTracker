import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../../UI/Button";
import { Alert } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, curData, defaultValues, }) {
    const [inputs, setInputs] = useState({
        amount: { value: defaultValues ? defaultValues.amount.toString() : '', isValid: true },
        date: { value: defaultValues ? defaultValues.date.toString() : '', isValid: true },
        description: { value: defaultValues ? defaultValues.description.toString() : '', isValid: true }

    })

    function amountChangeHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {

            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }
        })
    };
    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value).toString(),
            description: inputs.description.value
        };
        const isAmountValid = expenseData.amount > 0 && !isNaN(expenseData.amount);
        const isDateValid = expenseData.date.toString() !== 'Invalid Date';
        const isDescriptionValid = expenseData.description.trim().length > 0;

        if (!isAmountValid || !isDateValid || !isDescriptionValid) {
            setInputs((curInputs) => {
                return {
                    amount: { value: curInputs.amount.value, isValid: isAmountValid },
                    date: { value: curInputs.date.value, isValid: isDateValid },
                    description: { value: curInputs.description.value, isValid: isDescriptionValid }
                }
            });
            // Alert.alert('Invalid input', 'Please check your input values')
            return;
        }

        onSubmit(expenseData);
    }

    const formIsInValid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid

    return <View style={styles.form}>
        <Text style={styles.title} >Your Expense</Text>
        <View style={styles.inputsRow} >
            <Input
                style={styles.rowInput}
                label='Amount'
                invalid={!inputs.amount.isValid}
                textInputConfig={{
                    placeholder: curData && `${curData.amount}`,
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangeHandler.bind(this, 'amount'),
                    value: inputs.amount.value,
                }} />


            <Input
                style={styles.rowInput}
                label='date'
                invalid={!inputs.date.isValid}
                textInputConfig={{
                    placeholder: curData && `${curData.date}`,
                    maxLength: 10,
                    onChangeText: amountChangeHandler.bind(this, 'date'),
                    value: inputs.date.value
                }} />
        </View>
        <Input label='Description'
            invalid={!inputs.description.isValid}
            textInputConfig={{
                placeholder: curData && `${curData.description}`,
                multiline: true,
                textAlignVertical: 'top',
                // autocorrect: false,
                onChangeText: amountChangeHandler.bind(this, 'description'),
                value: inputs.description.value
            }}
        />
        {formIsInValid && <Text style={styles.errortext} >Please check your input values!</Text>}
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
    errortext: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8
    },
    

})