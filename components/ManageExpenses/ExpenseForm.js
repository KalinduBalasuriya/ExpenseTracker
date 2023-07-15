import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
    const [inputValues, setAmountValue]= useState({
        amount:'',
        date:'',
        description:''

    })

    function amountChangeHandler(inputIdentifier,enteredValue) {
        setAmountValue((curInputValues)=>{
            
            return {
                ...curInputValues,
                [inputIdentifier]:enteredValue
            }
        })
    }

    return <View style={styles.form}>
        <Text style={styles.title} >Your Expense</Text>
        <View style={styles.inputsRow} >
            <Input
                style={styles.rowInput}
                label='Amount'
                textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangeHandler.bind(this,'amount'),
                    value: inputValues["amount"],
                }} />


            <Input
                style={styles.rowInput}
                label='date'
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: amountChangeHandler.bind(this,'amount'),
                    value:inputValues['date']
                }} />
        </View>
        <Input label='Description' textInputConfig={{
            multiline: true,
            // autocorrect: false,
            onChangeText: amountChangeHandler.bind(this,'description'),
            value:inputValues['description']
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