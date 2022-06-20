import React,{useContext} from 'react'
import { FullExpenseContext } from './HeaderContexts/FullExpenseValueContext'
import { FullIncomeContext } from './HeaderContexts/FullIncomeValueContext'

const HeaderTransactionState = () => {
  const {fullIncomeValue} = useContext(FullIncomeContext)
  const {fullExpenseValue} = useContext(FullExpenseContext)
  const Expense = fullExpenseValue
  const Income = fullIncomeValue

  //setting value commas on three numbers, and ending with two zeros
  const settingValues = (someValue) =>
{
  return someValue.toLocaleString(undefined,{ minimumFractionDigits:2})
}

  return (
    <> 
    <p className='currentBudget'>{Income>Expense? '+' : ''}{settingValues(Income-Expense)}</p>
        <div className='transaction-state-container'>
             <div className='income-state'>
                 <p>Income</p>
                 <p>+{settingValues(Income)}</p>
             </div>
             <div className='expense-state'>
                 <p>Expenses</p>
                     <p className='expense-state-assessment'> -{settingValues(Expense)}
                       <span className='procent-final'>{Income ===0? "" : Math.round(Expense/Income*100).toFixed(0)}{Income===0?"":"%"}</span>
                      </p>
             </div>
         </div>
    </>
  )
}

export default HeaderTransactionState