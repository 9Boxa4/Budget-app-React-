import { createContext,useState } from "react";

export const ExpenseContext = createContext()

 export const ExpenseProvider = ({children}) =>
 {
    const [expenses,setExpense] = useState([
        {
          id:'e1',
          expenseValue:900,
          expenseDescription:'Rent'
        },
      {
        id:`e2`,
        expenseValue:1000,
        expenseDescription:'Holiday'
      },
      {
        id:`e3`,
        expenseValue:250,
        expenseDescription:`Gas & Electricity`
      }
      ,
      {
        id:`e4`,
        expenseValue:4500,
        expenseDescription:'Loan'
      }
        ]);


        //making an array to calculate full expense
        let expenseValueArr = expenses.map(expense => expense.expenseValue)

        return(
            <ExpenseContext.Provider value={{expenses,setExpense,expenseValueArr}}>
                {children}
            </ExpenseContext.Provider> 
        )
 }
