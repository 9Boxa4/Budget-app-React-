import { createContext, useContext,useState,useEffect } from "react";
import { ExpenseContext } from "../../TransactionDisplay/TransactionContext/ExpenseContext";

 export const FullExpenseContext = createContext()
 
 export const FullExpenseProvider = ({children}) =>
 {
      const [fullExpenseValue,setFullExpense] = useState('');
      const {expenseValueArr} = useContext(ExpenseContext)

  useEffect(()=>
  {
   return setFullExpense(expenseValueArr.reduce((prevValue,currentValue)=>prevValue+currentValue,0))
  },[expenseValueArr])

    return(
        <FullExpenseContext.Provider value={{fullExpenseValue,setFullExpense,expenseValueArr}}>
            {children}
        </FullExpenseContext.Provider>
    )
 }