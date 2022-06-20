import { createContext,useState,useEffect } from "react";

export const IncomeContext = createContext()

 export const IncomeProvider = ({children}) =>
 {
    
    const [incomes,setIncomes] = useState([
        {
          id:`i1`,
          incomeValue:3000,
          incomeDescription:'Salary',
        },
        {
          id:`i2`,
          incomeValue:1500,
          incomeDescription:'Project',
        },
        {
          id:`i3`,
          incomeValue:5000,
          incomeDescription:'Sold car',
        }])
       

        //making an array to calculate full income
        let incomeValueArr = incomes.map(income => income.incomeValue)
        return(
            <IncomeContext.Provider value={{incomes,setIncomes,incomeValueArr}}>
                {children}
            </IncomeContext.Provider> 
        )
 }

