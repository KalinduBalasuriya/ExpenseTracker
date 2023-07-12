import { createSlice } from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19').toString()
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05').toString()
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01').toString()
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19').toString()
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18').toString()
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05').toString()
    },
    {
        id: 'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01').toString()
    },
    {
        id: 'e8',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19').toString()
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18').toString()
    },
]

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenseData: DUMMY_EXPENSES
    },
    reducers: {
        deleteExpense:(state, action)=>{
           state.expenseData=state.expenseData.filter((data)=> data.id !== action.payload.id);
                
        }

    }
});

export const deleteExpense = expenseSlice.actions.deleteExpense;
export default expenseSlice.reducer;