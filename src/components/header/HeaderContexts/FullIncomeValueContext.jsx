import { createContext, useContext,useState,useEffect } from "react";
import { IncomeContext } from "../../TransactionDisplay/TransactionContext/IncomeContext";

 export const FullIncomeContext = createContext()
 
 export const FullIncomeProvider = ({children}) =>
 {
      const [fullIncomeValue,setFullIncome] = useState('');
      const {incomeValueArr} = useContext(IncomeContext)

  useEffect(()=>
  {
   return setFullIncome(incomeValueArr.reduce((prevValue,currentValue)=>prevValue+currentValue,0))
  },[incomeValueArr])

    return(
        <FullIncomeContext.Provider value={{fullIncomeValue,setFullIncome,incomeValueArr}}>
            {children}
        </FullIncomeContext.Provider>
    )
 }